import type { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { config } from '../../config.js';
import { errorEnvelope } from '../../shared/errors.js';
import { authenticate, changeAccount, login, logout, normalizeUsername } from './service.js';

const credentials = z.object({
  username: z.string().min(3).max(64),
  password: z.string().min(8).max(256),
}).strict();

const accountUpdate = z.object({
  currentPassword: z.string().min(8).max(256),
  newUsername: z.string().regex(/^[a-zA-Z0-9._-]{3,64}$/).optional(),
  newPassword: z.string().min(12).max(256).optional(),
  confirmPassword: z.string().optional(),
}).strict()
  .refine((value) => Boolean(value.newUsername || value.newPassword), { message: 'No change requested' })
  .refine((value) => !value.newPassword || value.newPassword === value.confirmPassword, { message: 'Passwords do not match' });

export async function registerAuthRoutes(app: FastifyInstance) {
  await app.register(async (scope) => {
    scope.post('/app/admin/login', {
      config: {
        rateLimit: {
          max: 8,
          timeWindow: '15 minutes',
          keyGenerator: (request) => `${request.ip}:${normalizeUsername((request.body as { username?: string })?.username ?? '')}`,
        },
      },
    }, async (request, reply) => {
      const parsed = credentials.safeParse(request.body);
      if (!parsed.success) return reply.code(401).send(errorEnvelope('INVALID_CREDENTIALS', 'Invalid username or password.'));
      const session = await login(parsed.data.username, parsed.data.password);
      if (!session) return reply.code(401).send(errorEnvelope('INVALID_CREDENTIALS', 'Invalid username or password.'));
      reply.setCookie(config.SESSION_COOKIE_NAME, session.token, {
        path: '/',
        httpOnly: true,
        secure: config.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: session.expires,
      });
      return { signedIn: true, forcePasswordChange: session.forcePasswordChange };
    });

    scope.get('/app/admin/session', { preHandler: authenticate }, async (request) => ({
      signedIn: true,
      forcePasswordChange: request.admin!.forcePasswordChange,
    }));

    scope.post('/app/admin/logout', { preHandler: authenticate }, async (request, reply) => {
      await logout(request.cookies[config.SESSION_COOKIE_NAME]);
      reply.clearCookie(config.SESSION_COOKIE_NAME, { path: '/' });
      return { signedIn: false };
    });

    scope.patch('/app/admin/account', { preHandler: authenticate }, async (request, reply) => {
      const parsed = accountUpdate.safeParse(request.body);
      if (!parsed.success) return reply.code(400).send(errorEnvelope('VALIDATION_ERROR', 'One or more fields are invalid.'));
      const changed = await changeAccount(parsed.data.currentPassword, parsed.data.newUsername, parsed.data.newPassword);
      if (!changed) return reply.code(401).send(errorEnvelope('INVALID_CREDENTIALS', 'Current password is incorrect.'));
      reply.clearCookie(config.SESSION_COOKIE_NAME, { path: '/' });
      return { signedIn: false, sessionsRevoked: true };
    });
  });
}
