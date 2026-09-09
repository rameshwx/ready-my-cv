import { randomUUID } from 'node:crypto';
import type { FastifyReply } from 'fastify';

export const errorEnvelope = (
  code: string,
  message: string,
  fieldErrors?: Record<string, string>,
) => ({
  error: {
    code,
    message,
    ...(fieldErrors ? { fieldErrors } : {}),
    correlationId: randomUUID(),
  },
});

export function sendError(
  reply: FastifyReply,
  statusCode: number,
  code: string,
  message: string,
) {
  return reply.code(statusCode).send(errorEnvelope(code, message));
}
