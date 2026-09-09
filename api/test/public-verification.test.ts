import assert from 'node:assert/strict';
import { test } from 'node:test';

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL ??= 'postgresql://test:test@localhost/test';
process.env.SESSION_HASH_PEPPER ??= 'test-session-pepper-value-at-least-32-characters';
process.env.ADMIN_INITIAL_PASSWORD ??= 'test-initial-password';
process.env.DATA_ENCRYPTION_KEY ??= '0000000000000000000000000000000000000000000000000000000000000000';
process.env.JOB_HANDLE_PEPPER ??= 'test-job-handle-pepper-value-at-least-32-characters';

const verification = await import('../src/shared/public-verification.js');

test('word-math prompts use only English two-digit addition operands', () => {
  assert.equal(
    verification.formatPublicVerificationQuestion(11, 12),
    'What is eleven plus twelve?',
  );
  assert.equal(
    verification.formatPublicVerificationQuestion(99, 20),
    'What is ninety-nine plus twenty?',
  );
  assert.throws(() => verification.formatPublicVerificationQuestion(9, 12), RangeError);
});

test('a verification answer consumes the challenge even when it is wrong', async () => {
  let deletes = 0;
  const client = {
    query: async () => {
      deletes += 1;
      return { rows: [{ expected_answer: 23 }] };
    },
  };
  const cleared: Array<Record<string, unknown> | undefined> = [];
  const reply = { clearCookie: (_name: string, options?: Record<string, unknown>) => cleared.push(options) };
  const request = { cookies: { ready_my_cv_verification: 'opaque-test-token' } };

  await assert.rejects(
    verification.consumePublicVerificationChallenge(client as never, request as never, reply as never, 19),
    verification.PublicVerificationError,
  );
  assert.equal(deletes, 1);
  assert.deepEqual(cleared, [{ path: '/app' }]);
});

test('missing cookie rejects without querying verification storage', async () => {
  let queries = 0;
  const client = { query: async () => { queries += 1; return { rows: [] }; } };
  const cleared: string[] = [];
  const reply = { clearCookie: (name: string) => cleared.push(name) };
  const request = { cookies: {} };

  await assert.rejects(
    verification.consumePublicVerificationChallenge(client as never, request as never, reply as never, 19),
    verification.PublicVerificationError,
  );
  assert.equal(queries, 0);
  assert.deepEqual(cleared, ['ready_my_cv_verification']);
});

test('a malformed answer with a challenge still consumes that challenge', async () => {
  let queries = 0;
  const client = {
    query: async () => {
      queries += 1;
      return { rows: [{ expected_answer: 23 }] };
    },
  };
  const reply = { clearCookie: () => undefined };
  const request = { cookies: { ready_my_cv_verification: 'opaque-test-token' } };

  await assert.rejects(
    verification.consumePublicVerificationChallenge(client as never, request as never, reply as never, Number.NaN),
    verification.PublicVerificationError,
  );
  assert.equal(queries, 1);
});
