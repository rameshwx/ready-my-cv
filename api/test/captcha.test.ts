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

const { CaptchaError, verifyCaptcha } = await import('../src/shared/captcha.js');

test('CAPTCHA rejects missing and invalid tokens without leaking token data', async () => {
  await assert.rejects(
    verifyCaptcha(),
    (error: unknown) => error instanceof CaptchaError && error.code === 'CAPTCHA_REQUIRED',
  );
  await assert.rejects(
    verifyCaptcha('invalid-token', async () => new Response(JSON.stringify({ success: false }), { status: 200 })),
    (error: unknown) => error instanceof CaptchaError && error.code === 'CAPTCHA_INVALID' && !error.message.includes('invalid-token'),
  );
});

test('CAPTCHA accepts a verified response and uses a bounded server request', async () => {
  let requestUrl = '';
  let requestBody = '';
  await verifyCaptcha('verified-token', async (input, init) => {
    requestUrl = String(input);
    requestBody = String(init?.body);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  });
  assert.equal(requestUrl, 'https://captcha.test/siteverify');
  assert.match(requestBody, /response=verified-token/);
  assert.match(requestBody, /secret=test-captcha-secret/);
});

test('CAPTCHA verifier converts provider/network failures to a safe error', async () => {
  await assert.rejects(
    verifyCaptcha('timeout-token', async () => {
      throw new Error('provider timeout');
    }),
    (error: unknown) => error instanceof CaptchaError && error.code === 'CAPTCHA_INVALID' && !error.message.includes('timeout-token'),
  );
});

test('CAPTCHA classifies expired or duplicate provider responses safely', async () => {
  await assert.rejects(
    verifyCaptcha('expired-token', async () => new Response(JSON.stringify({
      success: false,
      'error-codes': ['timeout-or-duplicate'],
    }), { status: 200 })),
    (error: unknown) => error instanceof CaptchaError &&
      error.code === 'CAPTCHA_EXPIRED' &&
      error.providerCodes.includes('timeout-or-duplicate') &&
      !error.message.includes('expired-token'),
  );
});

test('CAPTCHA provider failures retain only safe diagnostic codes', async () => {
  await assert.rejects(
    verifyCaptcha('provider-token', async () => new Response(JSON.stringify({
      success: false,
      'error-codes': ['invalid-input-response'],
    }), { status: 200 })),
    (error: unknown) => error instanceof CaptchaError &&
      error.code === 'CAPTCHA_INVALID' &&
      error.providerCodes.includes('invalid-input-response') &&
      !error.message.includes('provider-token') &&
      !error.message.includes('test-captcha-secret'),
  );
});
