import type { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { pool } from '../../db/pool.js';
import { errorEnvelope } from '../../shared/errors.js';

const requestSchema = z.object({
  roleTitle: z.string().trim().min(2).max(100),
  seniority: z.string().trim().max(30).optional(),
  industry: z.string().trim().max(200).optional(),
  desiredSkills: z.string().trim().max(500).optional(),
  replyEmail: z.string().email().max(254).optional().or(z.literal('')),
  website: z.literal('').optional(),
}).strict();

const metricSchema = z.object({
  eventName: z.enum(['scan_started', 'scan_completed', 'role_request_submitted']),
  roleSlug: z.string().regex(/^[a-z0-9-]{2,80}$/).optional(),
}).strict();

export async function registerRoleRequestRoutes(app: FastifyInstance) {
  app.post('/app/role-requests', { config: { rateLimit: { max: 5, timeWindow: '1 hour' } } }, async (request, reply) => {
    const parsed = requestSchema.safeParse(request.body);
    if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
    const value = parsed.data;
    await pool.query(
      `INSERT INTO role_requests(role_title, seniority, industry, desired_skills, reply_email)
       VALUES ($1, $2, $3, $4, $5)`,
      [value.roleTitle, value.seniority ?? null, value.industry ?? null, value.desiredSkills ?? null, value.replyEmail || null],
    );
    return reply.code(202).send({ accepted: true });
  });

  app.post('/app/metrics', { config: { rateLimit: { max: 30, timeWindow: '1 hour' } } }, async (request, reply) => {
    const parsed = metricSchema.safeParse(request.body);
    if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
    await pool.query('INSERT INTO aggregate_events(event_name, role_slug) VALUES ($1, $2)', [parsed.data.eventName, parsed.data.roleSlug ?? null]);
    return reply.code(202).send({ accepted: true });
  });

  app.get('/app/metrics', async () => {
    const result = await pool.query(
      `SELECT event_name AS "eventName", count(*)::int AS count
       FROM aggregate_events GROUP BY event_name ORDER BY event_name`,
    );
    return { items: result.rows };
  });
}
