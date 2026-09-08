import type { PoolClient } from 'pg';

import { config } from '../config.js';
import { pool } from '../db/pool.js';

export async function withTransaction<T>(
  callback: (client: PoolClient) => Promise<T>,
  authenticated = false,
): Promise<T> {
  return withContextTransaction(callback, {
    admin_authenticated: authenticated ? 'true' : 'false',
  });
}

async function withContextTransaction<T>(
  callback: (client: PoolClient) => Promise<T>,
  context: Record<string, string>,
): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    if (config.DATABASE_APP_ROLE) {
      await client.query("SELECT set_config('role', $1, true)", [config.DATABASE_APP_ROLE]);
    }
    for (const [key, value] of Object.entries(context)) {
      await client.query('SELECT set_config($1, $2, true)', [`app.${key}`, value]);
    }
    const value = await callback(client);
    await client.query('COMMIT');
    return value;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export const withAdminTransaction = <T>(callback: (client: PoolClient) => Promise<T>) =>
  withTransaction(callback, true);

export const withAnalysisTransaction = <T>(callback: (client: PoolClient) => Promise<T>) =>
  withContextTransaction(callback, {
    admin_authenticated: 'false',
    analysis_request: 'true',
    analysis_worker: 'false',
  });

export const withRoleRequestTransaction = <T>(callback: (client: PoolClient) => Promise<T>) =>
  withContextTransaction(callback, {
    admin_authenticated: 'false',
    role_request: 'true',
  });

export const withWorkerTransaction = <T>(callback: (client: PoolClient) => Promise<T>) =>
  withContextTransaction(callback, {
    admin_authenticated: 'false',
    analysis_request: 'false',
    analysis_worker: 'true',
  });
