import type { PoolClient } from 'pg';

import { config } from '../config.js';
import { pool } from '../db/pool.js';

export async function withTransaction<T>(
  callback: (client: PoolClient) => Promise<T>,
  authenticated = false,
): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    if (config.DATABASE_APP_ROLE) {
      await client.query("SELECT set_config('role', $1, true)", [config.DATABASE_APP_ROLE]);
    }
    await client.query('SELECT set_config($1, $2, true)', [
      'app.admin_authenticated',
      authenticated ? 'true' : 'false',
    ]);
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
