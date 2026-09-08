import { createHmac } from 'node:crypto';
import type { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { config } from '../../config.js';
import { pool } from '../../db/pool.js';
import { withRoleRequestTransaction } from '../../shared/db-context.js';
import { CaptchaError, verifyCaptcha } from '../../shared/captcha.js';
import { errorEnvelope } from '../../shared/errors.js';

const requestSchema = z.object({
  roleTitle: z.string().trim().min(2).max(100),
  seniority: z.string().trim().max(30).optional(),
  industry: z.string().trim().max(200).optional(),
  desiredSkills: z.string().trim().max(500).optional(),
  replyEmail: z.string().email().max(254).optional().or(z.literal('')),
  captchaToken: z.string().min(1).max(4096),
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
    try {
      await verifyCaptcha(value.captchaToken);
      const dedupeHash = roleRequestDedupeHash(value);
      const result = await withRoleRequestTransaction(async (client) => {
        await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [dedupeHash]);
        const existing = await client.query(
          `SELECT id FROM role_requests
           WHERE dedupe_hash = $1
             AND created_at >= now() - ($2::int * interval '1 minute')
           LIMIT 1`,
          [dedupeHash, config.ROLE_REQUEST_DEDUPE_MINUTES],
        );
        if (existing.rowCount) return { accepted: true, duplicate: true };
        await client.query(
          `INSERT INTO role_requests(role_title, seniority, industry, desired_skills, reply_email, dedupe_hash)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [value.roleTitle, value.seniority ?? null, value.industry ?? null, value.desiredSkills ?? null, value.replyEmail || null, dedupeHash],
        );
        return { accepted: true, duplicate: false };
      });
      return reply.code(202).send(result);
    } catch (error) {
      if (error instanceof CaptchaError) {
        return reply.code(error.code === 'CAPTCHA_UNAVAILABLE' ? 503 : 400).send(errorEnvelope(error.code, error.message));
      }
      throw error;
    }
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

function roleRequestDedupeHash(value: z.infer<typeof requestSchema>) {
  const normalized = [
    value.roleTitle,
    value.seniority,
    value.industry,
    value.desiredSkills,
    value.replyEmail,
  ].map((item) => item?.trim().toLowerCase().replace(/\s+/g, ' ') ?? '');
  return createHmac('sha256', config.SESSION_HASH_PEPPER)
    .update(JSON.stringify(normalized))
    .digest('hex');
}
