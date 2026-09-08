import type { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { config } from '../../config.js';
import { pool } from '../../db/pool.js';
import { errorEnvelope, sendError } from '../../shared/errors.js';
import {
  attachEmail,
  cancelJob,
  createAnalysisJob,
  recordAnalysisMetric,
  statusForHandle,
  takeFastResult,
  JobServiceError,
} from './job-service.js';

const roleSlugSchema = z.string().regex(/^[a-z0-9-]{2,80}$/);
const handleSchema = z.string().regex(/^[A-Za-z0-9_-]{32,128}$/);
const allowedFields = new Set(['roleSlug', 'seniority', 'consent', 'captchaToken']);

type UploadFields = {
  roleSlug?: string;
  seniority?: string;
  consent?: string;
  captchaToken?: string;
};

export async function registerAnalysisRoutes(app: FastifyInstance) {
  app.post('/app/analysis-jobs', {
    config: { rateLimit: { max: 5, timeWindow: '1 minute' } },
  }, async (request, reply) => {
    let pdfBytes: Buffer | undefined;
    try {
      const upload = await readUpload(request);
      pdfBytes = upload.pdfBytes;
      if (!pdfBytes || pdfBytes.length === 0) return sendError(reply, 400, 'EMPTY_FILE', 'Choose a non-empty PDF.');
      if (pdfBytes.length > config.UPLOAD_MAX_BYTES) return sendError(reply, 413, 'FILE_TOO_LARGE', 'PDF files must be 10 MB or smaller.');
      if (!isPdf(pdfBytes)) return sendError(reply, 400, 'INVALID_PDF', 'The selected file is not a valid PDF.');
      if (upload.mimeType && upload.mimeType !== 'application/pdf') {
        return sendError(reply, 415, 'MIME_MISMATCH', 'The selected file type does not match a PDF.');
      }

      const roleSlug = roleSlugSchema.safeParse(upload.fields.roleSlug);
      if (!roleSlug.success) return sendError(reply, 400, 'VALIDATION_ERROR', 'A valid role is required.');
      if (upload.fields.consent !== 'true') return sendError(reply, 400, 'CONSENT_REQUIRED', 'Consent is required before temporary processing.');
      const seniority = upload.fields.seniority?.trim() || null;
      if (seniority && seniority.length > 30) return sendError(reply, 400, 'VALIDATION_ERROR', 'Seniority is invalid.');
      await verifyCaptcha(upload.fields.captchaToken);

      const catalogResult = await pool.query('SELECT snapshot FROM catalog_snapshots ORDER BY published_at DESC LIMIT 1');
      const catalog = catalogResult.rows[0]?.snapshot as { version?: string; roles?: Array<Record<string, unknown>> } | undefined;
      const role = catalog?.roles?.find((candidate) => candidate.slug === roleSlug.data && candidate.active !== false);
      if (!catalog?.version || !role) return sendError(reply, 400, 'ROLE_UNAVAILABLE', 'The selected role is temporarily unavailable.');
      const seniorities = Array.isArray(role.seniorities) ? role.seniorities : [];
      if (seniority && seniority !== 'all' && seniorities.length > 0 && !seniorities.includes(seniority)) {
        return sendError(reply, 400, 'SENIORITY_UNAVAILABLE', 'The selected seniority is not available for this role.');
      }

      const job = await createAnalysisJob({
        pdfBytes,
        roleSlug: roleSlug.data,
        seniority,
        catalogVersion: catalog.version,
      });
      const outcome = await waitForFastResult(job.handle);
      if (outcome?.kind === 'report') {
        return reply.send({ handle: job.handle, status: 'completed', mode: 'fast', report: outcome.report, deleted: true });
      }
      if (outcome?.kind === 'terminal') {
        return reply.send({ handle: job.handle, status: outcome.status, mode: 'terminal' });
      }
      await recordAnalysisMetric('analysis_queued').catch(() => undefined);
      return reply.code(202).send({
        handle: job.handle,
        status: 'queued',
        mode: 'queued',
        pollAfterMs: 1500,
      });
    } catch (error) {
      if (error instanceof JobServiceError) return sendError(reply, error.statusCode, error.code, error.message);
      if (isMultipartLimitError(error)) return sendError(reply, 413, 'FILE_TOO_LARGE', 'PDF files must be 10 MB or smaller.');
      return sendError(reply, 400, 'INVALID_UPLOAD', 'The upload could not be accepted.');
    } finally {
      pdfBytes?.fill(0);
    }
  });

  app.get('/app/analysis-jobs/:handle/status', {
    config: { rateLimit: { max: 60, timeWindow: '1 minute' } },
  }, async (request, reply) => {
    const handle = handleSchema.safeParse((request.params as { handle?: string }).handle);
    if (!handle.success) return sendError(reply, 404, 'NOT_FOUND', 'Analysis job not found.');
    const status = await statusForHandle(handle.data);
    if (!status) return sendError(reply, 404, 'NOT_FOUND', 'Analysis job not found.');
    return reply.send(status);
  });

  app.post('/app/analysis-jobs/:handle/email', async (request, reply) => {
    const handle = handleSchema.safeParse((request.params as { handle?: string }).handle);
    const body = z.object({ email: z.string().trim().email().max(254), consent: z.literal(true) }).strict().safeParse(request.body);
    if (!handle.success || !body.success) return sendError(reply, 400, 'VALIDATION_ERROR', 'A valid email and consent are required.');
    const attached = await attachEmail(handle.data, body.data.email);
    if (!attached) return sendError(reply, 404, 'NOT_FOUND', 'Analysis job not found.');
    return reply.code(202).send({ status: 'email_pending', message: 'Your report is being delivered by email.' });
  });

  app.post('/app/analysis-jobs/:handle/cancel', async (request, reply) => {
    const handle = handleSchema.safeParse((request.params as { handle?: string }).handle);
    if (!handle.success || request.body && typeof request.body === 'object' && Object.keys(request.body as object).length > 0) {
      return sendError(reply, 400, 'VALIDATION_ERROR', 'The cancellation request is invalid.');
    }
    const cancelled = await cancelJob(handle.data);
    if (!cancelled) return sendError(reply, 404, 'NOT_FOUND', 'Analysis job not found.');
    return reply.send({ cancelled: true });
  });
}

async function readUpload(request: FastifyRequest) {
  const fields: UploadFields = {};
  let pdfBytes: Buffer | undefined;
  let mimeType: string | undefined;
  let fileCount = 0;
  for await (const part of request.parts()) {
    if (part.type === 'file') {
      fileCount += 1;
      if (fileCount > 1 || part.fieldname !== 'file') throw new JobServiceError('INVALID_MULTIPART', 'Exactly one PDF file is required.', 400);
      mimeType = part.mimetype?.toLowerCase();
      const chunks: Buffer[] = [];
      let size = 0;
      try {
        for await (const chunk of part.file) {
          const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
          size += buffer.length;
          if (size > config.UPLOAD_MAX_BYTES) {
            buffer.fill(0);
            throw new JobServiceError('FILE_TOO_LARGE', 'PDF files must be 10 MB or smaller.', 413);
          }
          chunks.push(buffer);
        }
        pdfBytes = Buffer.concat(chunks, size);
      } finally {
        for (const chunk of chunks) chunk.fill(0);
      }
      continue;
    }
    if (!allowedFields.has(part.fieldname) || part.fieldname in fields) {
      throw new JobServiceError('INVALID_MULTIPART', 'The upload fields are invalid.', 400);
    }
    if (typeof part.value !== 'string' || part.value.length > 256) {
      throw new JobServiceError('INVALID_MULTIPART', 'The upload fields are invalid.', 400);
    }
    fields[part.fieldname as keyof UploadFields] = part.value;
  }
  if (fileCount !== 1) throw new JobServiceError('INVALID_MULTIPART', 'Exactly one PDF file is required.', 400);
  return { fields, pdfBytes, mimeType };
}

function isPdf(value: Buffer) {
  return value.length >= 5 && value.subarray(0, 5).toString('ascii') === '%PDF-';
}

async function verifyCaptcha(token?: string) {
  const enabled = Boolean(config.CAPTCHA_SECRET || config.CAPTCHA_VERIFY_URL);
  if (!enabled) {
    if (token) throw new JobServiceError('CAPTCHA_INVALID', 'CAPTCHA verification is unavailable.', 400);
    return;
  }
  if (!config.CAPTCHA_SECRET || !config.CAPTCHA_VERIFY_URL || !token || token.length > 4096) {
    throw new JobServiceError('CAPTCHA_REQUIRED', 'CAPTCHA verification is required.', 400);
  }
  try {
    const response = await fetch(config.CAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: config.CAPTCHA_SECRET, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    const payload = await response.json() as { success?: boolean };
    if (!response.ok || payload.success !== true) throw new Error('CAPTCHA rejected.');
  } catch {
    throw new JobServiceError('CAPTCHA_INVALID', 'CAPTCHA verification failed.', 400);
  }
}

async function waitForFastResult(handle: string) {
  const deadline = Date.now() + config.FAST_PATH_TIMEOUT_MS;
  while (Date.now() < deadline) {
    const report = await takeFastResult(handle);
    if (report) return { kind: 'report' as const, report };
    const status = await statusForHandle(handle);
    if (!status) return null;
    if (status.status === 'expired' || status.status === 'failed' || status.status === 'cancelled') {
      return { kind: 'terminal' as const, status: status.status };
    }
    await new Promise((resolve) => setTimeout(resolve, Math.min(status.pollAfterMs, Math.max(25, deadline - Date.now()))));
  }
  const report = await takeFastResult(handle);
  return report ? { kind: 'report' as const, report } : null;
}

function isMultipartLimitError(error: unknown) {
  return Boolean(error && typeof error === 'object' && 'code' in error && String((error as { code?: unknown }).code).includes('FILE_TOO_LARGE'));
}
