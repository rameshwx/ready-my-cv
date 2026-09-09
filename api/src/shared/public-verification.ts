import { createHash, randomBytes, randomInt } from 'node:crypto';

import type { FastifyReply, FastifyRequest } from 'fastify';
import type { PoolClient } from 'pg';

import { config } from '../config.js';
import { withVerificationTransaction } from './db-context.js';

const cookieName = 'ready_my_cv_verification';
const challengeTtlSeconds = 300;

export class PublicVerificationError extends Error {
  constructor() {
    super('Verification is required. Please answer the new question and try again.');
    this.name = 'PublicVerificationError';
  }
}

export async function issuePublicVerificationChallenge(reply: FastifyReply) {
  const left = randomInt(10, 100);
  const right = randomInt(10, 100);
  const token = randomBytes(32).toString('base64url');
  await withVerificationTransaction(async (client) => {
    await client.query('DELETE FROM public_verification_challenges WHERE expires_at <= now()');
    await client.query(
      `INSERT INTO public_verification_challenges(token_hash, expected_answer, expires_at)
       VALUES ($1, $2, now() + interval '5 minutes')`,
      [tokenHash(token), left + right],
    );
  });
  reply.setCookie(cookieName, token, cookieOptions());
  return { question: formatPublicVerificationQuestion(left, right) };
}

export async function consumePublicVerificationChallenge(
  client: PoolClient,
  request: FastifyRequest,
  reply: FastifyReply,
  answer: number,
) {
  const token = request.cookies[cookieName];
  reply.clearCookie(cookieName, { path: '/app' });
  if (!token) {
    throw new PublicVerificationError();
  }
  const result = await client.query<{ expected_answer: number }>(
    `DELETE FROM public_verification_challenges
     WHERE token_hash = $1 AND expires_at > now()
     RETURNING expected_answer`,
    [tokenHash(token)],
  );
  if (!Number.isSafeInteger(answer) || result.rows[0]?.expected_answer !== answer) {
    throw new PublicVerificationError();
  }
}

export async function purgeExpiredPublicVerificationChallenges() {
  await withVerificationTransaction((client) =>
    client.query('DELETE FROM public_verification_challenges WHERE expires_at <= now()'),
  );
}

function tokenHash(token: string) {
  return createHash('sha256').update(token).update(config.SESSION_HASH_PEPPER).digest('hex');
}

function cookieOptions() {
  return { path: '/app', httpOnly: true, sameSite: 'strict' as const, secure: config.NODE_ENV === 'production', maxAge: challengeTtlSeconds };
}

export function formatPublicVerificationQuestion(left: number, right: number): string {
  if (!Number.isInteger(left) || !Number.isInteger(right) || left < 10 || left > 99 || right < 10 || right > 99) {
    throw new RangeError('Verification operands must be two-digit integers.');
  }
  return `What is ${numberToWords(left)} plus ${numberToWords(right)}?`;
}

function numberToWords(value: number): string {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (value < 20) return teens[value - 10]!;
  return value % 10 === 0
    ? tens[Math.floor(value / 10)]!
    : `${tens[Math.floor(value / 10)]!}-${ones[value % 10]!}`;
}
