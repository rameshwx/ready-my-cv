import { hash } from '@node-rs/argon2';

import { config } from '../config.js';
import { initialCatalog } from '../catalog.js';
import { pool } from './pool.js';

const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query("SELECT set_config('app.admin_authenticated', 'true', true)");

  const account = await client.query('SELECT id FROM admin_account WHERE id = 1');
  if (!account.rowCount) {
    const passwordHash = await hash(config.ADMIN_INITIAL_PASSWORD, {
      algorithm: 2,
      memoryCost: 19_456,
      timeCost: 2,
      parallelism: 1,
    });
    await client.query(
      `INSERT INTO admin_account(id, username, password_hash, force_password_change)
       VALUES (1, $1, $2, true)`,
      [config.ADMIN_INITIAL_USERNAME.toLowerCase(), passwordHash],
    );
  }

  for (const role of initialCatalog.roles) {
    const roleResult = await client.query(
      `INSERT INTO job_roles(slug, title, description, active)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description
       RETURNING id`,
      [role.slug, role.title, role.description, role.active],
    );
    const roleId = roleResult.rows[0].id;
    const versionResult = await client.query(
      `INSERT INTO role_rule_versions(job_role_id, seniority, status, version, snapshot)
       VALUES ($1, 'all', 'published', 1, $2::jsonb)
       ON CONFLICT(job_role_id, seniority, version) DO UPDATE SET snapshot = COALESCE(role_rule_versions.snapshot, EXCLUDED.snapshot)
       RETURNING id`,
      [roleId, JSON.stringify(role)],
    );
    const versionId = versionResult.rows[0].id;
    const ruleCount = await client.query('SELECT count(*)::int AS count FROM role_rules WHERE version_id = $1', [versionId]);
    if (ruleCount.rows[0].count === 0) {
      for (const rule of role.requirements) {
        const ruleResult = await client.query(
          `INSERT INTO role_rules(rule_key, version_id, canonical_term, required, weight, category, expected_section, recommendation_id)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
          [rule.id, versionId, rule.term, rule.required, rule.weight, rule.category, rule.expectedSections[0] ?? null, rule.recommendationIds[0] ?? null],
        );
        for (const alias of rule.aliases) await client.query('INSERT INTO rule_aliases(rule_id, alias) VALUES ($1, $2)', [ruleResult.rows[0].id, alias]);
        for (const exclusion of rule.exclusions) await client.query('INSERT INTO rule_exclusions(rule_id, phrase) VALUES ($1, $2)', [ruleResult.rows[0].id, exclusion]);
      }
    }
  }

  for (const recommendation of initialCatalog.recommendations) {
    await client.query(
      `INSERT INTO recommendation_templates(id, copy) VALUES ($1, $2)
       ON CONFLICT(id) DO UPDATE SET copy = EXCLUDED.copy`,
      [recommendation.id, recommendation.text],
    );
  }

  await client.query(
    `INSERT INTO catalog_versions(version, engine_version, status, published_at, created_by)
     VALUES ($1, $2, 'published', $3, 1)
     ON CONFLICT(version) DO NOTHING`,
    [initialCatalog.version, initialCatalog.engineVersion, initialCatalog.publishedAt],
  );
  await client.query(
    `INSERT INTO catalog_snapshots(version, snapshot, published_at, created_by)
     VALUES ($1, $2::jsonb, $3, 1)
     ON CONFLICT(version) DO NOTHING`,
    [initialCatalog.version, JSON.stringify(initialCatalog), initialCatalog.publishedAt],
  );

  await client.query('COMMIT');
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  client.release();
  await pool.end();
}
