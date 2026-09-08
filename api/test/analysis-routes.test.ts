import assert from 'node:assert/strict';
import { test } from 'node:test';

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL ??= 'postgresql://test:test@localhost/test';
process.env.SESSION_HASH_PEPPER ??= 'test-session-pepper-value-at-least-32-characters';
process.env.ADMIN_INITIAL_PASSWORD ??= 'test-initial-password';
process.env.DATA_ENCRYPTION_KEY ??= '0000000000000000000000000000000000000000000000000000000000000000';
process.env.JOB_HANDLE_PEPPER ??= 'test-job-handle-pepper-value-at-least-32-characters';
process.env.CAPTCHA_SITE_KEY ??= 'test-site-key';
process.env.CAPTCHA_SECRET ??= 'test-captcha-secret';
process.env.CAPTCHA_VERIFY_URL ??= 'https://captcha.test/siteverify';

const { buildApp } = await import('../src/app.js');

function multipart(fields: Record<string, string>, file: Buffer, mime = 'application/pdf') {
  const boundary = 'ready-my-cv-test-boundary';
  const parts: Buffer[] = [];
  for (const [name, value] of Object.entries(fields)) {
    parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`));
  }
  parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="private.pdf"\r\nContent-Type: ${mime}\r\n\r\n`));
  parts.push(file);
  parts.push(Buffer.from(`\r\n--${boundary}--\r\n`));
  return { boundary, payload: Buffer.concat(parts) };
}

test('analysis upload requires consent before any catalog or queue access', async () => {
  const app = await buildApp();
  const body = multipart({ roleSlug: 'backend-developer', consent: 'false' }, Buffer.from('%PDF-1.7 synthetic'));
  const response = await app.inject({
    method: 'POST',
    url: '/app/analysis-jobs',
    headers: { origin: 'http://localhost:8080', 'content-type': `multipart/form-data; boundary=${body.boundary}` },
    payload: body.payload,
  });
  assert.equal(response.statusCode, 400);
  assert.equal(JSON.parse(response.body).error.code, 'CONSENT_REQUIRED');
  await app.close();
});

test('analysis upload rejects a MIME spoof before database access', async () => {
  const app = await buildApp();
  const body = multipart({ roleSlug: 'backend-developer', consent: 'true' }, Buffer.from('%PDF-1.7 synthetic'), 'application/octet-stream');
  const response = await app.inject({
    method: 'POST',
    url: '/app/analysis-jobs',
    headers: { origin: 'http://localhost:8080', 'content-type': `multipart/form-data; boundary=${body.boundary}` },
    payload: body.payload,
  });
  assert.equal(response.statusCode, 415);
  assert.equal(JSON.parse(response.body).error.code, 'MIME_MISMATCH');
  await app.close();
});
