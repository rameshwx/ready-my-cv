import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('admin role and role-request mutation routes are authenticated and audited', async () => {
  const [catalog, admin] = await Promise.all([
    readFile(new URL('../src/modules/catalog/routes.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/modules/admin/routes.ts', import.meta.url), 'utf8'),
  ]);
  assert.match(catalog, /scope\.post\('\/app\/admin\/roles'/);
  assert.match(catalog, /scope\.patch\('\/app\/admin\/roles\/:id'/);
  assert.match(catalog, /scope\.delete\('\/app\/admin\/roles\/:id'/);
  assert.match(catalog, /scope\.post\('\/app\/admin\/roles\/:id\/restore'/);
  assert.match(catalog, /role_created/);
  assert.match(catalog, /role_archived/);
  assert.match(catalog, /role_restored/);
  assert.match(admin, /scope\.delete\('\/app\/admin\/role-requests\/:id'/);
  assert.match(admin, /role_request_deleted/);
  assert.match(admin, /scope\.addHook\('preHandler', authenticate\)/);
});

test('public role requests require one-time verification and use a bounded dedupe window', async () => {
  const source = await readFile(new URL('../src/modules/role-requests/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /verificationAnswer: z\.unknown\(\)/);
  assert.match(source, /await consumePublicVerificationChallenge\(client, request, reply, verificationAnswer\)/);
  assert.match(source, /pg_advisory_xact_lock/);
  assert.match(source, /ROLE_REQUEST_DEDUPE_MINUTES/);
  assert.doesNotMatch(source, /console\.(log|info|debug)/);
});
