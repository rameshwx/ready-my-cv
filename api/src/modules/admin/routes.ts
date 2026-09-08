import type { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { withAdminTransaction } from '../../shared/db-context.js';
import { errorEnvelope, sendError } from '../../shared/errors.js';
import { authenticate } from '../auth/service.js';

const statuses = z.enum(['new', 'reviewing', 'planned', 'added', 'rejected', 'duplicate']);

export async function registerAdminRoutes(app: FastifyInstance) {
  await app.register(async (scope) => {
    scope.addHook('preHandler', authenticate);

    scope.get('/app/admin/dashboard', async () => withAdminTransaction(async (client) => {
      const [requests, roles, events] = await Promise.all([
        client.query(`SELECT count(*)::int AS total, count(*) FILTER (WHERE status = 'new')::int AS new FROM role_requests`),
        client.query('SELECT count(*)::int AS total FROM job_roles WHERE archived_at IS NULL'),
        client.query('SELECT count(*)::int AS total FROM aggregate_events'),
      ]);
      const queue = await client.query(`
        SELECT
          count(*) FILTER (WHERE status = 'queued')::int AS queued,
          count(*) FILTER (WHERE status = 'processing')::int AS processing,
          count(*) FILTER (WHERE status = 'awaiting_email')::int AS awaiting_email,
          count(*) FILTER (WHERE status IN ('email_pending', 'email_sending'))::int AS email_pending,
          COALESCE(max(EXTRACT(EPOCH FROM (now() - created_at))) FILTER (WHERE status = 'queued'), 0)::int AS oldest_queued_seconds,
          COALESCE(avg(EXTRACT(EPOCH FROM (now() - processing_started_at))) FILTER (WHERE status = 'processing' AND processing_started_at IS NOT NULL), 0)::int AS active_processing_seconds
        FROM analysis_jobs`);
      const failures = await client.query(`
        SELECT count(*) FILTER (WHERE event_name = 'analysis_failed')::int AS processing_failures,
               count(*) FILTER (WHERE event_name = 'email_failed')::int AS email_failures
        FROM aggregate_events`);
      return { roleRequests: requests.rows[0], roles: roles.rows[0], aggregateEvents: events.rows[0], queue: queue.rows[0], failures: failures.rows[0] };
    }));

    scope.get('/app/admin/role-requests', async () => withAdminTransaction(async (client) => ({
      items: (await client.query('SELECT id, role_title, seniority, industry, status, created_at FROM role_requests ORDER BY created_at DESC LIMIT 200')).rows,
    })));

    scope.patch('/app/admin/role-requests/:id', async (request, reply) => {
      const parsed = z.object({ status: statuses }).strict().safeParse(request.body);
      const id = Number((request.params as { id: string }).id);
      if (!parsed.success || !Number.isSafeInteger(id)) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'Status or request ID is invalid.'));
      return withAdminTransaction(async (client) => {
        const result = await client.query('UPDATE role_requests SET status = $1 WHERE id = $2 RETURNING id, status', [parsed.data.status, id]);
        if (!result.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Role request not found.');
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('role_request_status_changed', $1::jsonb)`, [JSON.stringify({ requestId: id, status: parsed.data.status })]);
        return reply.send(result.rows[0]);
      });
    });

    scope.get('/app/admin/audit-logs', async () => withAdminTransaction(async (client) => ({
      items: (await client.query('SELECT id, action, summary, created_at FROM audit_logs ORDER BY created_at DESC LIMIT 200')).rows,
    })));
  });
}
