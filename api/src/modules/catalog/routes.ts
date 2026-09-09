import type { FastifyInstance } from 'fastify';
import type { PoolClient } from 'pg';
import { z } from 'zod';

import { config } from '../../config.js';
import { pool } from '../../db/pool.js';
import { withAdminTransaction } from '../../shared/db-context.js';
import { errorEnvelope, sendError } from '../../shared/errors.js';
import { authenticate } from '../auth/service.js';

const createRoleInput = z.object({
  slug: z.string().regex(/^[a-z0-9-]{2,80}$/),
  title: z.string().trim().min(2).max(120),
  description: z.string().max(500),
  active: z.boolean().optional(),
}).strict();

const updateRoleInput = z.object({
  slug: z.string().regex(/^[a-z0-9-]{2,80}$/),
  title: z.string().trim().min(2).max(120),
  description: z.string().max(500),
  active: z.boolean(),
}).partial().strict();

const settingsInput = z.object({
  donationUrl: z.string().url().max(500).nullable().optional(),
  adsEnabled: z.boolean().optional(),
}).strict();

async function buildCatalogSnapshot(client: PoolClient, version: string) {
  const roleRows = await client.query(
    `SELECT r.id, r.slug, r.title, r.description, r.active,
            v.seniority
     FROM job_roles r
     LEFT JOIN role_rule_versions v
       ON v.job_role_id = r.id AND v.status = 'published'
     WHERE r.archived_at IS NULL
     ORDER BY r.title`,
  );
  const roles = [];
  for (const role of roleRows.rows) {
    if (!role.seniority && role.active) continue;
    const versionRow = await client.query(
      `SELECT id FROM role_rule_versions
       WHERE job_role_id = $1 AND status = 'published'
       ORDER BY version DESC LIMIT 1`,
      [role.id],
    );
    const rules = versionRow.rowCount
      ? await client.query(
          `SELECT rr.rule_key AS id, rr.canonical_term AS term, rr.required,
                  rr.weight::float AS weight, rr.category,
                  rr.expected_section AS "expectedSection",
                  rr.recommendation_id AS "recommendationId",
                  COALESCE(array_agg(DISTINCT ra.alias) FILTER (WHERE ra.alias IS NOT NULL), '{}') AS aliases,
                  COALESCE(array_agg(DISTINCT re.phrase) FILTER (WHERE re.phrase IS NOT NULL), '{}') AS exclusions
           FROM role_rules rr
           LEFT JOIN rule_aliases ra ON ra.rule_id = rr.id
           LEFT JOIN rule_exclusions re ON re.rule_id = rr.id
           WHERE rr.version_id = $1
           GROUP BY rr.id
           ORDER BY rr.id`,
          [versionRow.rows[0].id],
        )
      : { rows: [] };
    roles.push({
      slug: role.slug,
      title: role.title,
      description: role.description,
      active: role.active,
      seniorities: role.seniority === 'all' ? ['junior', 'mid', 'senior', 'lead'] : [role.seniority],
      requirements: rules.rows.map((rule) => ({
        id: rule.id,
        term: rule.term,
        aliases: rule.aliases,
        exclusions: rule.exclusions,
        phrases: [],
        required: rule.required,
        weight: Number(rule.weight),
        category: rule.category,
        expectedSections: rule.expectedSection ? [rule.expectedSection] : [],
        recommendationIds: rule.recommendationId ? [rule.recommendationId] : [],
      })),
    });
  }
  const recommendations = await client.query(
    `SELECT id, copy AS text, active FROM recommendation_templates WHERE active ORDER BY id`,
  );
  return {
    version,
    engineVersion: '1.0.0',
    publishedAt: new Date().toISOString(),
    roles,
    recommendations: recommendations.rows,
  };
}

export async function registerCatalogRoutes(app: FastifyInstance) {
  app.get('/app/catalog', async (_request, reply) => {
    const result = await pool.query('SELECT snapshot FROM catalog_snapshots ORDER BY published_at DESC LIMIT 1');
    return reply.send(result.rows[0]?.snapshot ?? { version: 'unavailable', engineVersion: 'unknown', publishedAt: new Date().toISOString(), roles: [], recommendations: [] });
  });

  app.get('/app/config', async () => {
    const result = await pool.query('SELECT donation_url AS "donationUrl", ads_enabled AS "adsEnabled" FROM site_settings WHERE id = 1');
    return {
      ...(result.rows[0] ?? { donationUrl: null, adsEnabled: false }),
    };
  });

  app.register(async (scope) => {
    scope.addHook('preHandler', authenticate);
    scope.get('/app/admin/roles', async () => withAdminTransaction(async (client) => ({ items: (await client.query(
      `SELECT r.id, r.slug, r.title, r.description, r.active, r.archived_at, r.created_at, r.updated_at,
              EXISTS (SELECT 1 FROM role_rule_versions v WHERE v.job_role_id = r.id AND v.status = 'published') AS "hasPublishedRules"
       FROM job_roles r ORDER BY r.title`,
    )).rows })));
    scope.post('/app/admin/roles', async (request, reply) => {
      const parsed = createRoleInput.safeParse(request.body);
      if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
      return withAdminTransaction(async (client) => {
        const result = await client.query(
          `INSERT INTO job_roles(slug, title, description, active) VALUES ($1, $2, $3, false)
           RETURNING id, slug, title, description, active, archived_at`,
          [parsed.data.slug, parsed.data.title, parsed.data.description],
        );
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('role_created', $1::jsonb)`, [JSON.stringify({ roleId: result.rows[0].id })]);
        return reply.code(201).send(result.rows[0]);
      });
    });
    scope.patch('/app/admin/roles/:id', async (request, reply) => {
      const parsed = updateRoleInput.safeParse(request.body);
      if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
      if (Object.keys(parsed.data).length === 0) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'At least one role field is required.'));
      const id = Number((request.params as { id: string }).id);
      if (!Number.isSafeInteger(id)) return sendError(reply, 400, 'VALIDATION_ERROR', 'Role ID is invalid.');
      return withAdminTransaction(async (client) => {
        const current = await client.query(
          `SELECT archived_at,
                  EXISTS (SELECT 1 FROM role_rule_versions v WHERE v.job_role_id = job_roles.id AND v.status = 'published') AS "hasPublishedRules"
           FROM job_roles WHERE id = $1`,
          [id],
        );
        if (!current.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Role not found.');
        if (parsed.data.active === true && current.rows[0].archived_at) {
          return sendError(reply, 409, 'ROLE_ARCHIVED', 'Restore the role before activating it.');
        }
        if (parsed.data.active === true && !current.rows[0].hasPublishedRules) {
          return sendError(reply, 409, 'ROLE_NOT_READY', 'A published rule version is required before activation.');
        }
        const result = await client.query(
          `UPDATE job_roles SET slug = COALESCE($1, slug), title = COALESCE($2, title), description = COALESCE($3, description), active = COALESCE($4, active), updated_at = now()
           WHERE id = $5 RETURNING id, slug, title, description, active`,
          [parsed.data.slug, parsed.data.title, parsed.data.description, parsed.data.active, id],
        );
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ($1, $2::jsonb)`, [
          parsed.data.active === true ? 'role_activated' : parsed.data.active === false ? 'role_deactivated' : 'role_updated',
          JSON.stringify({ roleId: id }),
        ]);
        return reply.send(result.rows[0]);
      });
    });
    scope.delete('/app/admin/roles/:id', async (request, reply) => {
      const id = Number((request.params as { id: string }).id);
      if (!Number.isSafeInteger(id)) return sendError(reply, 400, 'VALIDATION_ERROR', 'Role ID is invalid.');
      return withAdminTransaction(async (client) => {
        const result = await client.query(
          `UPDATE job_roles
           SET active = false, archived_at = COALESCE(archived_at, now()), updated_at = now()
           WHERE id = $1
           RETURNING id`,
          [id],
        );
        if (!result.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Role not found.');
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('role_archived', $1::jsonb)`, [JSON.stringify({ roleId: id })]);
        return reply.send({ deleted: true, id });
      });
    });
    scope.post('/app/admin/roles/:id/restore', async (request, reply) => {
      if (request.body && typeof request.body === 'object' && Object.keys(request.body as object).length > 0) {
        return sendError(reply, 400, 'VALIDATION_ERROR', 'The restore request is invalid.');
      }
      const id = Number((request.params as { id: string }).id);
      if (!Number.isSafeInteger(id)) return sendError(reply, 400, 'VALIDATION_ERROR', 'Role ID is invalid.');
      return withAdminTransaction(async (client) => {
        const result = await client.query(
          `UPDATE job_roles SET archived_at = NULL, active = false, updated_at = now()
           WHERE id = $1 AND archived_at IS NOT NULL
           RETURNING id, slug, title, description, active, archived_at`,
          [id],
        );
        if (!result.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Archived role not found.');
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('role_restored', $1::jsonb)`, [JSON.stringify({ roleId: id })]);
        return reply.send(result.rows[0]);
      });
    });

    scope.get('/app/admin/rule-versions', async () => withAdminTransaction(async (client) => ({ items: (await client.query(
      `SELECT v.id, v.job_role_id, r.slug, r.title, v.seniority, v.status, v.version, v.created_at
       FROM role_rule_versions v JOIN job_roles r ON r.id = v.job_role_id ORDER BY v.created_at DESC`,
    )).rows })));

    scope.get('/app/admin/rule-versions/:id', async (request, reply) => {
      const id = Number((request.params as { id: string }).id);
      if (!Number.isSafeInteger(id)) return sendError(reply, 400, 'VALIDATION_ERROR', 'Rule version ID is invalid.');
      return withAdminTransaction(async (client) => {
        const result = await client.query(
          `SELECT v.id, v.job_role_id, v.seniority, v.status, v.version, v.snapshot,
                  r.slug, r.title
           FROM role_rule_versions v JOIN job_roles r ON r.id = v.job_role_id
           WHERE v.id = $1`,
          [id],
        );
        if (!result.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Rule version not found.');
        return reply.send(result.rows[0]);
      });
    });

    scope.post('/app/admin/rule-versions', async (request, reply) => {
      const input = z.object({ jobRoleId: z.number().int().positive(), seniority: z.string().max(30).default('all'), snapshot: z.record(z.unknown()).optional() }).strict().safeParse(request.body);
      if (!input.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
      return withAdminTransaction(async (client) => {
        const version = await client.query('SELECT COALESCE(max(version), 0) + 1 AS next FROM role_rule_versions WHERE job_role_id = $1 AND seniority = $2', [input.data.jobRoleId, input.data.seniority]);
        const result = await client.query(
          `INSERT INTO role_rule_versions(job_role_id, seniority, status, version, snapshot) VALUES ($1, $2, 'draft', $3, $4::jsonb) RETURNING id, job_role_id, seniority, status, version`,
          [input.data.jobRoleId, input.data.seniority, version.rows[0].next, JSON.stringify(input.data.snapshot ?? {})],
        );
        return reply.code(201).send(result.rows[0]);
      });
    });

    scope.post('/app/admin/rule-versions/:id/validate', async (request, reply) => {
      const id = Number((request.params as { id: string }).id);
      return withAdminTransaction(async (client) => {
        const result = await client.query('SELECT snapshot FROM role_rule_versions WHERE id = $1', [id]);
        if (!result.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Rule version not found.');
        const snapshot = result.rows[0].snapshot as Record<string, unknown>;
        const rules = await client.query('SELECT rule_key, weight FROM role_rules WHERE version_id = $1', [id]);
        const errors: string[] = [];
        if (Object.keys(snapshot).length === 0) errors.push('Draft snapshot is empty.');
        if (!rules.rowCount) errors.push('Draft has no normalized rules.');
        const seen = new Set<string>();
        for (const rule of rules.rows) {
          if (seen.has(rule.rule_key)) errors.push(`Duplicate rule: ${rule.rule_key}`);
          seen.add(rule.rule_key);
          if (Number(rule.weight) <= 0) errors.push(`Invalid weight: ${rule.rule_key}`);
        }
        return reply.send({ valid: errors.length === 0, errors });
      });
    });

    scope.get('/app/admin/rule-versions/:id/diff', async (request, reply) => {
      const id = Number((request.params as { id: string }).id);
      const query = z.object({ against: z.coerce.number().int().positive().optional() }).strict().safeParse(request.query);
      if (!query.success || !Number.isSafeInteger(id)) return sendError(reply, 400, 'VALIDATION_ERROR', 'Version IDs are invalid.');
      return withAdminTransaction(async (client) => {
        const current = await client.query('SELECT id, snapshot FROM role_rule_versions WHERE id = $1', [id]);
        if (!current.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Rule version not found.');
        const previous = query.data.against
          ? await client.query('SELECT id, snapshot FROM role_rule_versions WHERE id = $1', [query.data.against])
          : { rowCount: 0, rows: [] };
        if (query.data.against && !previous.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Comparison version not found.');
        const changed = JSON.stringify(current.rows[0].snapshot) !== JSON.stringify(previous.rows[0]?.snapshot);
        return reply.send({ from: query.data.against ?? null, to: id, changes: changed ? ['snapshot_changed'] : [] });
      });
    });

    scope.post('/app/admin/publication/publish', async (request, reply) => {
      const input = z.object({ versionId: z.coerce.number().int().positive() }).strict().safeParse(request.body);
      if (!input.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'A version ID is required.'));
      return withAdminTransaction(async (client) => {
        const version = await client.query('SELECT id, job_role_id, snapshot FROM role_rule_versions WHERE id = $1 AND status = \'draft\' FOR UPDATE', [input.data.versionId]);
        if (!version.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Draft version not found.');
        const roleId = version.rows[0].job_role_id;
        await client.query(`UPDATE role_rule_versions SET status = 'archived' WHERE job_role_id = $1 AND status = 'published'`, [roleId]);
        await client.query('UPDATE role_rule_versions SET status = \'published\' WHERE id = $1', [input.data.versionId]);
        const catalogVersion = `catalog-${Date.now()}`;
        const snapshot = await buildCatalogSnapshot(client, catalogVersion);
        await client.query(
          `INSERT INTO catalog_versions(version, engine_version, status, published_at, created_by)
           VALUES ($1, $2, 'published', now(), 1)`,
          [catalogVersion, snapshot.engineVersion],
        );
        await client.query(
          `INSERT INTO catalog_snapshots(version, snapshot, published_at, created_by)
           VALUES ($1, $2::jsonb, now(), 1)`,
          [catalogVersion, JSON.stringify(snapshot)],
        );
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('catalog_published', $1::jsonb)`, [JSON.stringify({ versionId: input.data.versionId, catalogVersion })]);
        return reply.send({ published: true, versionId: input.data.versionId, catalogVersion });
      });
    });

    scope.post('/app/admin/publication/rollback', async (request, reply) => {
      const input = z.object({ version: z.string().min(1).max(80) }).strict().safeParse(request.body);
      if (!input.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'A catalog version is required.'));
      return withAdminTransaction(async (client) => {
        const snapshot = await client.query('SELECT snapshot FROM catalog_snapshots WHERE version = $1', [input.data.version]);
        if (!snapshot.rowCount) return sendError(reply, 404, 'NOT_FOUND', 'Catalog snapshot not found.');
        const rollbackVersion = `rollback-${Date.now()}`;
        await client.query(`INSERT INTO catalog_versions(version, engine_version, status, published_at) VALUES ($1, '1.0.0', 'published', now())`, [rollbackVersion]);
        await client.query(`INSERT INTO catalog_snapshots(version, snapshot, published_at) VALUES ($1, $2::jsonb, now())`, [rollbackVersion, JSON.stringify(snapshot.rows[0].snapshot)]);
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('catalog_rollback', $1::jsonb)`, [JSON.stringify({ sourceVersion: input.data.version, rollbackVersion })]);
        return reply.send({ published: true, version: rollbackVersion });
      });
    });

    scope.get('/app/admin/settings', async () => withAdminTransaction(async (client) => (await client.query('SELECT donation_url AS "donationUrl", ads_enabled AS "adsEnabled" FROM site_settings WHERE id = 1')).rows[0]));
    scope.patch('/app/admin/settings', async (request, reply) => {
      const parsed = settingsInput.safeParse(request.body);
      if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
      return withAdminTransaction(async (client) => {
        await client.query('UPDATE site_settings SET donation_url = COALESCE($1, donation_url), ads_enabled = COALESCE($2, ads_enabled), updated_at = now() WHERE id = 1', [parsed.data.donationUrl, parsed.data.adsEnabled]);
        await client.query(`INSERT INTO audit_logs(action, summary) VALUES ('settings_changed', '{}'::jsonb)`);
        return reply.send({ saved: true });
      });
    });
  });
}
