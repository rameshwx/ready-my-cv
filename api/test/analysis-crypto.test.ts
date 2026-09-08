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

const crypto = await import('../src/modules/analysis/crypto.js');

test('analysis payload encryption is authenticated and handles are one-way', () => {
  const plaintext = Buffer.from('synthetic CV marker that must not be stored in plaintext');
  const encrypted = crypto.encryptPayload(plaintext);
  assert.notEqual(encrypted.toString('utf8').includes(plaintext.toString('utf8')), true);
  assert.deepEqual(crypto.decryptPayload(encrypted), plaintext);
  assert.notEqual(crypto.hashJobHandle('handle-a'), 'handle-a');
  assert.notEqual(crypto.hashJobHandle('handle-a'), crypto.hashJobHandle('handle-b'));
  encrypted.fill(0);
  plaintext.fill(0);
});
