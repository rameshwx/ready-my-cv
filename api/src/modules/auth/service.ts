import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';

import { hash, verify } from '@node-rs/argon2';
import type { FastifyReply, FastifyRequest } from 'fastify';

import { config } from '../../config.js';
import { pool } from '../../db/pool.js';
import { withAdminTransaction } from '../../shared/db-context.js';

const digest = (value: string) =>
  createHash('sha256').update(value).update(config.SESSION_HASH_PEPPER).digest('hex');

export const normalizeUsername = (value: string) => value.trim().toLowerCase();

export const safeEqual = (a: string, b: string) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
};

export async function login(username: string, password: string) {
  const normalized = normalizeUsername(username);
  const result = await pool.query('SELECT * FROM lookup_admin_credentials($1)', [normalized]);
  const account = result.rows[0];
  if (
    !account ||
    !account.active ||
    !safeEqual(normalized, account.username) ||
    !(await verify(account.password_hash, password))
  ) {
    return null;
  }
  const token = randomBytes(32).toString('base64url');
  const expires = new Date(Date.now() + config.SESSION_ABSOLUTE_HOURS * 3_600_000);
  await pool.query('SELECT create_admin_session($1, $2)', [digest(token), expires]);
  return { token, expires, forcePasswordChange: account.force_password_change };
}

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const token = request.cookies[config.SESSION_COOKIE_NAME];
  if (!token) return reply.code(401).send({ error: { code: 'AUTH_REQUIRED', message: 'Please sign in.' } });
  const result = await withAdminTransaction(async (client) => {
    const idle = `${config.SESSION_IDLE_MINUTES} minutes`;
    return client.query(
      `UPDATE admin_sessions s
       SET last_used_at = now()
       FROM admin_account a
       WHERE s.session_hash = $1
         AND s.revoked_at IS NULL
         AND s.expires_at > now()
         AND s.last_used_at > now() - $2::interval
         AND a.id = 1
         AND a.active = true
       RETURNING a.force_password_change`,
      [digest(token), idle],
    );
  });
  if (!result.rowCount) {
    reply.clearCookie(config.SESSION_COOKIE_NAME, { path: '/' });
    return reply.code(401).send({ error: { code: 'SESSION_EXPIRED', message: 'Your session has expired.' } });
  }
  request.admin = { forcePasswordChange: result.rows[0].force_password_change };
}

export async function logout(token?: string) {
  if (!token) return;
  await withAdminTransaction((client) =>
    client.query('UPDATE admin_sessions SET revoked_at = now() WHERE session_hash = $1', [digest(token)]),
  );
}

export async function changeAccount(
  currentPassword: string,
  newUsername?: string,
  newPassword?: string,
) {
  return withAdminTransaction(async (client) => {
    const result = await client.query(
      'SELECT username, password_hash FROM admin_account WHERE id = 1 FOR UPDATE',
    );
    const account = result.rows[0];
    if (!account || !(await verify(account.password_hash, currentPassword))) return false;
    const username = normalizeUsername(newUsername || account.username);
    const passwordHash = newPassword
      ? await hash(newPassword, { algorithm: 2, memoryCost: 19_456, timeCost: 2, parallelism: 1 })
      : account.password_hash;
    await client.query(
      `UPDATE admin_account
       SET username = $1, password_hash = $2, force_password_change = false, updated_at = now()
       WHERE id = 1`,
      [username, passwordHash],
    );
    await client.query('UPDATE admin_sessions SET revoked_at = now() WHERE revoked_at IS NULL');
    await client.query(
      `INSERT INTO audit_logs(action, summary) VALUES ('credentials_changed', $1::jsonb)`,
      [JSON.stringify({ sessionsRevoked: true })],
    );
    return true;
  });
}
