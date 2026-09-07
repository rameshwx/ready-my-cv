import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

import { initialCatalog } from '../src/catalog.js';

test('catalog includes eleven roles with unique rule IDs and seniority coverage', () => {
  assert.equal(initialCatalog.roles.length, 11);
  assert.ok(initialCatalog.roles.every((role) => role.seniorities.length >= 4));
  const ids = initialCatalog.roles.flatMap((role) => role.requirements.map((rule) => rule.id));
  assert.equal(ids.length, new Set(ids).size);
});

test('migration enforces singleton administrator, RLS, and contains no CV storage', async () => {
  const sql = await readFile(new URL('../migrations/001_initial.sql', import.meta.url), 'utf8');
  assert.match(sql, /CHECK\s*\(\s*id\s*=\s*1\s*\)/);
  assert.match(sql, /ENABLE ROW LEVEL SECURITY/);
  assert.match(sql, /FORCE ROW LEVEL SECURITY/);
  assert.match(sql, /CREATE POLICY/);
  assert.match(sql, /lookup_admin_credentials/);
  assert.doesNotMatch(sql, /CREATE TABLE\s+(cv|visitor_result|uploaded)/i);
});

test('server contains no JWT or CV upload endpoints and uses session cookies', async () => {
  const app = await readFile(new URL('../src/app.ts', import.meta.url), 'utf8');
  const auth = await readFile(new URL('../src/modules/auth/routes.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(`${app}\n${auth}`, /\/upload|\/score-cv|jsonwebtoken|bearer|refresh.?token/i);
  assert.match(auth, /httpOnly:\s*true/);
  assert.match(auth, /sameSite:\s*'strict'/);
});

test('CSP allows only the trusted Flutter and Cloudflare runtime origins', async () => {
  const app = await readFile(new URL('../src/app.ts', import.meta.url), 'utf8');
  const directive = (name: string) => {
    const match = app.match(new RegExp(`${name}:\\s*\\[(.*?)\\]`, 's'));
    assert.ok(match, `Missing CSP directive: ${name}`);
    return match[1];
  };

  const scriptSrc = directive('scriptSrc');
  const connectSrc = directive('connectSrc');
  const fontSrc = directive('fontSrc');
  assert.match(scriptSrc, /https:\/\/static\.cloudflareinsights\.com/);
  assert.match(scriptSrc, /https:\/\/www\.gstatic\.com/);
  assert.doesNotMatch(scriptSrc, /unsafe-inline|https:\/\/\*/);
  assert.match(connectSrc, /https:\/\/cloudflareinsights\.com/);
  assert.match(connectSrc, /https:\/\/www\.gstatic\.com/);
  assert.match(connectSrc, /https:\/\/fonts\.gstatic\.com/);
  assert.doesNotMatch(connectSrc, /https:\/\/\*/);
  assert.match(fontSrc, /https:\/\/fonts\.gstatic\.com/);
});
