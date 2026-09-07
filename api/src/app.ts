import { join } from 'node:path';

import cookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import staticPlugin from '@fastify/static';
import Fastify, { type FastifyRequest } from 'fastify';

import { config } from './config.js';
import { pool } from './db/pool.js';
import { registerAuthRoutes } from './modules/auth/routes.js';
import { registerAdminRoutes } from './modules/admin/routes.js';
import { registerCatalogRoutes } from './modules/catalog/routes.js';
import { registerRoleRequestRoutes } from './modules/role-requests/routes.js';
import { errorEnvelope } from './shared/errors.js';

const mutatingMethods = new Set(['POST', 'PATCH', 'PUT', 'DELETE']);

function isAllowedOrigin(request: FastifyRequest) {
  const origin = request.headers.origin;
  const referer = request.headers.referer;
  const localDevelopment = config.NODE_ENV !== 'production' &&
      (origin?.startsWith('http://localhost') || referer?.startsWith('http://localhost'));
  const originMatches = origin === config.PUBLIC_ORIGIN;
  const refererMatches = referer?.startsWith(`${config.PUBLIC_ORIGIN}/`) || referer === config.PUBLIC_ORIGIN;
  return Boolean(originMatches || refererMatches || localDevelopment);
}

function sameOriginAndContentType(request: FastifyRequest, reply: any, done: () => void) {
  if (!mutatingMethods.has(request.method)) return done();
  if (!isAllowedOrigin(request)) {
    reply.code(403).send(errorEnvelope('ORIGIN_REJECTED', 'The request origin is not allowed.'));
    return;
  }
  const contentType = request.headers['content-type'] ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    reply.code(415).send(errorEnvelope('UNSUPPORTED_MEDIA_TYPE', 'Only JSON application requests are accepted.'));
    return;
  }
  done();
}

export async function buildApp() {
  const app = Fastify({
    bodyLimit: config.REQUEST_BODY_LIMIT,
    logger: {
      level: config.NODE_ENV === 'production' ? 'info' : 'warn',
      redact: ['req.headers.authorization', 'req.headers.cookie', 'req.body', 'res.headers.set-cookie'],
    },
  });

  await app.register(cookie);
  await app.register(rateLimit, { max: 100, timeWindow: '1 minute' });
  await app.register(helmet, {
    global: true,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        scriptSrc: [
          "'self'",
          "'wasm-unsafe-eval'",
          'https://static.cloudflareinsights.com',
          'https://www.gstatic.com',
        ],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", 'https://cloudflareinsights.com', 'https://www.gstatic.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        workerSrc: ["'self'", 'blob:'],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
  });
  app.addHook('preHandler', sameOriginAndContentType);

  app.get('/health/live', async () => ({ status: 'ok' }));
  app.get('/health/ready', async (_request, reply) => {
    try {
      await pool.query('SELECT 1');
      return { status: 'ready' };
    } catch {
      return reply.code(503).send({ status: 'unavailable' });
    }
  });

  await registerAuthRoutes(app);
  await registerCatalogRoutes(app);
  await registerRoleRequestRoutes(app);
  await registerAdminRoutes(app);

  await app.register(staticPlugin, { root: join(process.cwd(), 'public'), wildcard: false });
  app.setNotFoundHandler((request, reply) => {
    if (request.url.startsWith('/app/') || request.url.startsWith('/health/')) {
      return reply.code(404).send(errorEnvelope('NOT_FOUND', 'Not found.'));
    }
    return reply.sendFile('index.html');
  });
  return app;
}
