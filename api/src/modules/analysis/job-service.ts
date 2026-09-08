import { randomBytes, randomUUID } from 'node:crypto';
import type { PoolClient } from 'pg';

import { config } from '../../config.js';
import { withAnalysisTransaction, withWorkerTransaction } from '../../shared/db-context.js';
import { decryptPayload, encryptPayload, hashJobHandle, hashLeaseToken } from './crypto.js';
import type { AnalysisJobStatus, ParsedDocument, QueuedAnalysisReport } from './analysis-types.js';

export type AnalysisJobRow = {
  id: string;
  handle_hash: string;
  status: AnalysisJobStatus;
  role_slug: string;
  seniority: string | null;
  catalog_version: string;
  pdf_payload: Buffer | null;
  document_payload: Buffer | null;
  report_payload: Buffer | null;
  email_payload: Buffer | null;
  attempt_count: number;
  email_attempt_count: number;
  lease_token_hash: string | null;
  expires_at: Date;
};

const metric = async (client: PoolClient, eventName: string) => {
  await client.query('INSERT INTO aggregate_events(event_name) VALUES ($1)', [eventName]);
};

export async function recordAnalysisMetric(eventName: string) {
  return withAnalysisTransaction((client) => metric(client, eventName));
}

async function purgeJob(client: PoolClient, id: string, eventName?: string) {
  const deleted = await client.query('DELETE FROM analysis_jobs WHERE id = $1 RETURNING id', [id]);
  if (deleted.rowCount && eventName) await metric(client, eventName);
  return Boolean(deleted.rowCount);
}

export async function createAnalysisJob(input: {
  pdfBytes: Buffer;
  roleSlug: string;
  seniority: string | null;
  catalogVersion: string;
}) {
  const handle = randomBytes(32).toString('base64url');
  const id = randomUUID();
  const expiresAt = new Date(Date.now() + config.JOB_TTL_MINUTES * 60_000);
  const encryptedPdf = encryptPayload(input.pdfBytes);
  let result: boolean;
  try {
    result = await withAnalysisTransaction(async (client) => {
      const active = await client.query(
        `SELECT count(*)::int AS count FROM analysis_jobs
         WHERE expires_at > now() AND status NOT IN ('completed', 'failed', 'expired', 'cancelled')`,
      );
      if (Number(active.rows[0].count) >= config.MAX_ACTIVE_JOBS) return false;
      await client.query(
        `INSERT INTO analysis_jobs(
           id, handle_hash, status, role_slug, seniority, catalog_version,
           pdf_payload, expires_at
         ) VALUES ($1, $2, 'queued', $3, $4, $5, $6, $7)`,
        [id, hashJobHandle(handle), input.roleSlug, input.seniority, input.catalogVersion, encryptedPdf, expiresAt],
      );
      await metric(client, 'analysis_started');
      return true;
    });
  } finally {
    encryptedPdf.fill(0);
  }
  if (!result) throw new JobServiceError('QUEUE_FULL', 'Analysis is temporarily busy. Please try again later.', 429);
  return { id, handle };
}

export async function statusForHandle(handle: string) {
  return withAnalysisTransaction(async (client) => {
    const result = await client.query(
      `SELECT id, status, expires_at, available_at FROM analysis_jobs WHERE handle_hash = $1`,
      [hashJobHandle(handle)],
    );
    if (!result.rowCount) return null;
    const row = result.rows[0] as { id: string; status: AnalysisJobStatus; expires_at: Date; available_at: Date };
    if (row.expires_at.getTime() <= Date.now()) {
      await purgeJob(client, row.id, 'analysis_expired');
      return {
        status: 'expired' as const,
        expiresAt: row.expires_at.toISOString(),
        pollAfterMs: 0,
        emailRequired: false,
      };
    }
    return {
      status: row.status,
      expiresAt: row.expires_at.toISOString(),
      pollAfterMs: row.status === 'queued' ? 1500 : 1000,
      emailRequired: row.status === 'awaiting_email',
    };
  });
}

export async function takeFastResult(handle: string) {
  return withAnalysisTransaction(async (client) => {
    const result = await client.query(
      `SELECT id, report_payload FROM analysis_jobs
       WHERE handle_hash = $1 AND status = 'awaiting_email' AND report_payload IS NOT NULL
       FOR UPDATE`,
      [hashJobHandle(handle)],
    );
    if (!result.rowCount) return null;
    const reportPayload = decryptPayload(result.rows[0].report_payload as Buffer);
    let report: QueuedAnalysisReport;
    try {
      report = JSON.parse(reportPayload.toString('utf8')) as QueuedAnalysisReport;
    } finally {
      reportPayload.fill(0);
    }
    await purgeJob(client, result.rows[0].id, 'analysis_fast_completed');
    return report;
  });
}

export async function attachEmail(handle: string, email: string) {
  const encryptedEmail = encryptPayload(email);
  try {
    return await withAnalysisTransaction(async (client) => {
      const result = await client.query(
        `UPDATE analysis_jobs
         SET email_payload = $1, status = 'email_pending', available_at = now(), updated_at = now()
         WHERE handle_hash = $2 AND status = 'awaiting_email' AND expires_at > now()
         RETURNING id`,
        [encryptedEmail, hashJobHandle(handle)],
      );
      return Boolean(result.rowCount);
    });
  } finally {
    encryptedEmail.fill(0);
  }
}

export async function cancelJob(handle: string) {
  return withAnalysisTransaction(async (client) => {
    const result = await client.query(
      `UPDATE analysis_jobs SET status = 'cancelled', updated_at = now()
       WHERE handle_hash = $1 AND status IN ('queued', 'processing', 'awaiting_email', 'email_pending')
       RETURNING id`,
      [hashJobHandle(handle)],
    );
    if (!result.rowCount) return false;
    await purgeJob(client, result.rows[0].id, 'analysis_cancelled');
    return true;
  });
}

export async function claimNextJob() {
  return withWorkerTransaction(async (client) => {
    for (const sourceStatus of ['queued', 'email_pending'] as const) {
      const result = await client.query(
        `SELECT * FROM analysis_jobs
         WHERE status = $1 AND available_at <= now() AND expires_at > now()
         ORDER BY created_at ASC
         FOR UPDATE SKIP LOCKED LIMIT 1`,
        [sourceStatus],
      );
      if (!result.rowCount) continue;
      const leaseToken = randomBytes(32).toString('base64url');
      const leaseHash = hashLeaseToken(leaseToken);
      const targetStatus = sourceStatus === 'queued' ? 'processing' : 'email_sending';
      const claimed = await client.query(
        `UPDATE analysis_jobs
         SET status = $1,
             lease_expires_at = now() + ($2::int * interval '1 second'),
             lease_token_hash = $3,
             attempt_count = attempt_count + CASE WHEN $1 = 'processing' THEN 1 ELSE 0 END,
             email_attempt_count = email_attempt_count + CASE WHEN $1 = 'email_sending' THEN 1 ELSE 0 END,
             processing_started_at = CASE WHEN $1 = 'processing' AND processing_started_at IS NULL THEN now() ELSE processing_started_at END,
             updated_at = now()
         WHERE id = $4
         RETURNING *`,
        [targetStatus, config.WORKER_LEASE_SECONDS, leaseHash, result.rows[0].id],
      );
      return { row: claimed.rows[0] as AnalysisJobRow, leaseHash };
    }
    return null;
  });
}

export async function loadCatalogForJob(row: AnalysisJobRow) {
  return withWorkerTransaction(async (client) => {
    const result = await client.query('SELECT snapshot FROM catalog_snapshots WHERE version = $1', [row.catalog_version]);
    const catalog = result.rows[0]?.snapshot as Record<string, unknown> | undefined;
    const roles = Array.isArray(catalog?.roles) ? catalog.roles as Array<Record<string, unknown>> : [];
    const role = roles.find((candidate) => candidate.slug === row.role_slug);
    if (!catalog || !role) throw new JobServiceError('CATALOG_UNAVAILABLE', 'The selected role is temporarily unavailable.', 500);
    return { catalog, role };
  });
}

export async function decryptPdf(row: AnalysisJobRow) {
  if (!row.pdf_payload) throw new JobServiceError('PAYLOAD_MISSING', 'The temporary analysis payload is unavailable.', 500);
  return decryptPayload(row.pdf_payload);
}

export async function decryptEmailAndReport(row: AnalysisJobRow) {
  if (!row.email_payload || !row.report_payload) throw new JobServiceError('PAYLOAD_MISSING', 'The temporary report is unavailable.', 500);
  const emailPayload = decryptPayload(row.email_payload);
  const reportPayload = decryptPayload(row.report_payload);
  try {
    return {
      email: emailPayload.toString('utf8'),
      report: JSON.parse(reportPayload.toString('utf8')) as QueuedAnalysisReport,
    };
  } finally {
    emailPayload.fill(0);
    reportPayload.fill(0);
  }
}

export async function heartbeat(id: string, leaseHash: string) {
  await withWorkerTransaction((client) => client.query(
    `UPDATE analysis_jobs SET lease_expires_at = now() + ($1::int * interval '1 second'), updated_at = now()
     WHERE id = $2 AND lease_token_hash = $3 AND status IN ('processing', 'email_sending')`,
    [config.WORKER_LEASE_SECONDS, id, leaseHash],
  ));
}

export async function finishProcessing(id: string, leaseHash: string, document: ParsedDocument, report: QueuedAnalysisReport) {
  const documentPayload = encryptPayload(JSON.stringify(document));
  const reportPayload = encryptPayload(JSON.stringify(report));
  try {
    return await withWorkerTransaction(async (client) => {
      const result = await client.query(
        `UPDATE analysis_jobs
         SET status = 'awaiting_email', pdf_payload = NULL, document_payload = $1,
             report_payload = $2, lease_expires_at = NULL, lease_token_hash = NULL,
             updated_at = now()
         WHERE id = $3 AND lease_token_hash = $4 AND status = 'processing' AND expires_at > now()
         RETURNING id`,
        [documentPayload, reportPayload, id, leaseHash],
      );
      if (!result.rowCount) return false;
      await metric(client, 'analysis_completed');
      return true;
    });
  } finally {
    documentPayload.fill(0);
    reportPayload.fill(0);
  }
}

export async function failProcessing(id: string, leaseHash: string, attemptCount: number) {
  return withWorkerTransaction(async (client) => {
    if (attemptCount >= config.PROCESSING_MAX_ATTEMPTS) {
      const owned = await client.query(
        `SELECT id FROM analysis_jobs WHERE id = $1 AND lease_token_hash = $2 AND status = 'processing' FOR UPDATE`,
        [id, leaseHash],
      );
      if (owned.rowCount) await purgeJob(client, id, 'analysis_failed');
      return 'purged' as const;
    }
    await client.query(
      `UPDATE analysis_jobs
       SET status = 'queued', available_at = now() + ($1::int * interval '1 second'),
           safe_error_code = 'PROCESSING_RETRY', lease_expires_at = NULL, lease_token_hash = NULL, updated_at = now()
       WHERE id = $2 AND lease_token_hash = $3 AND status = 'processing'`,
      [retryDelaySeconds(attemptCount), id, leaseHash],
    );
    return 'retry' as const;
  });
}

export async function finishEmail(id: string, leaseHash: string) {
  return withWorkerTransaction(async (client) => {
    const updated = await client.query(
      `UPDATE analysis_jobs SET status = 'completed', email_sent_at = now(), completed_at = now(), updated_at = now()
       WHERE id = $1 AND lease_token_hash = $2 AND status = 'email_sending' RETURNING id`,
      [id, leaseHash],
    );
    if (!updated.rowCount) return false;
    await purgeJob(client, id, 'email_sent');
    return true;
  });
}

export async function failEmail(id: string, leaseHash: string, attemptCount: number, retryable: boolean) {
  return withWorkerTransaction(async (client) => {
    if (!retryable || attemptCount >= config.EMAIL_MAX_ATTEMPTS) {
      const owned = await client.query(
        `SELECT id FROM analysis_jobs WHERE id = $1 AND lease_token_hash = $2 AND status = 'email_sending' FOR UPDATE`,
        [id, leaseHash],
      );
      if (owned.rowCount) await purgeJob(client, id, 'email_failed');
      return 'purged' as const;
    }
    await client.query(
      `UPDATE analysis_jobs
       SET status = 'email_pending', available_at = now() + ($1::int * interval '1 second'),
           safe_error_code = 'EMAIL_RETRY', lease_expires_at = NULL, lease_token_hash = NULL, updated_at = now()
       WHERE id = $2 AND lease_token_hash = $3 AND status = 'email_sending'`,
      [retryDelaySeconds(attemptCount), id, leaseHash],
    );
    return 'retry' as const;
  });
}

export async function recoverAndPurge() {
  return withWorkerTransaction(async (client) => {
    const recovered = await client.query(
      `UPDATE analysis_jobs
       SET status = 'queued', available_at = now(), lease_expires_at = NULL, lease_token_hash = NULL,
           safe_error_code = 'LEASE_RECOVERED', updated_at = now()
       WHERE status = 'processing' AND lease_expires_at <= now() AND expires_at > now()
         AND attempt_count < $1 RETURNING id`,
      [config.PROCESSING_MAX_ATTEMPTS],
    );
    const uncertainEmail = await client.query(
      `DELETE FROM analysis_jobs
       WHERE status = 'email_sending' AND lease_expires_at <= now() RETURNING id`,
    );
    const exhaustedProcessing = await client.query(
      `DELETE FROM analysis_jobs
       WHERE status = 'processing' AND lease_expires_at <= now()
         AND attempt_count >= $1 RETURNING id`,
      [config.PROCESSING_MAX_ATTEMPTS],
    );
    const expired = await client.query(
      `DELETE FROM analysis_jobs WHERE expires_at <= now() RETURNING status`,
    );
    for (let index = 0; index < (uncertainEmail.rowCount ?? 0); index += 1) await metric(client, 'email_failed');
    for (let index = 0; index < (exhaustedProcessing.rowCount ?? 0); index += 1) await metric(client, 'analysis_failed');
    for (let index = 0; index < (expired.rowCount ?? 0); index += 1) await metric(client, 'analysis_expired');
    return { recovered: recovered.rowCount ?? 0, purged: (uncertainEmail.rowCount ?? 0) + (exhaustedProcessing.rowCount ?? 0) + (expired.rowCount ?? 0) };
  });
}

function retryDelaySeconds(attempt: number) {
  return Math.min(300, config.EMAIL_RETRY_BASE_SECONDS * 2 ** Math.max(0, attempt - 1));
}

export class JobServiceError extends Error {
  constructor(public readonly code: string, message: string, public readonly statusCode: number) {
    super(message);
    this.name = 'JobServiceError';
  }
}
