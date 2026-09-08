import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';

test('configuration rejects escaped CAPTCHA site keys', () => {
  const result = spawnSync(
    process.execPath,
    ['--import', 'tsx', '--eval', "import('./src/config.ts')"],
    {
      cwd: new URL('..', import.meta.url),
      encoding: 'utf8',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        DATABASE_URL: 'postgresql://test:test@localhost/test',
        SESSION_HASH_PEPPER: 'test-session-pepper-value-at-least-32-characters',
        ADMIN_INITIAL_PASSWORD: 'test-initial-password',
        DATA_ENCRYPTION_KEY: '0000000000000000000000000000000000000000000000000000000000000000',
        JOB_HANDLE_PEPPER: 'test-job-handle-pepper-value-at-least-32-characters',
        CAPTCHA_SITE_KEY: '6Le8v7AtAAAAAD6RuyDhHEa90ZtV4rc\\\\_8riguGSO',
        CAPTCHA_SECRET: 'test-captcha-secret',
        CAPTCHA_VERIFY_URL: 'https://captcha.test/siteverify',
        SMTP_HOST: 'smtp.test',
        SMTP_USER: 'test-user',
        SMTP_PASSWORD: 'test-password',
        EMAIL_FROM: 'ci@example.com',
      },
    },
  );

  assert.notEqual(result.status, 0);
  assert.match(
    `${result.stdout}\n${result.stderr}`,
    /CAPTCHA_SITE_KEY must not contain backslash escape characters/,
  );
});
