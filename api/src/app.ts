import { existsSync } from 'node:fs';
import { join } from 'node:path';

import cookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import multipart from '@fastify/multipart';
import rateLimit from '@fastify/rate-limit';
import staticPlugin from '@fastify/static';
import Fastify, { type FastifyRequest } from 'fastify';

import { config } from './config.js';
import { pool } from './db/pool.js';
import { registerAuthRoutes } from './modules/auth/routes.js';
import { registerAdminRoutes } from './modules/admin/routes.js';
import { registerCatalogRoutes } from './modules/catalog/routes.js';
import { registerRoleRequestRoutes } from './modules/role-requests/routes.js';
import { registerAnalysisRoutes } from './modules/analysis/routes.js';
import type { AnalysisWorker } from './modules/analysis/worker.js';
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
  const path = request.url.split('?')[0];
  const isAnalysisUpload = request.method === 'POST' && path === '/app/analysis-jobs';
  const accepted = isAnalysisUpload
    ? contentType.toLowerCase().startsWith('multipart/form-data')
    : contentType.toLowerCase().startsWith('application/json');
  if (!accepted) {
    reply.code(415).send(errorEnvelope('UNSUPPORTED_MEDIA_TYPE', 'Only JSON application requests are accepted.'));
    return;
  }
  done();
}

function analysisRequestSizeLimit(request: FastifyRequest, reply: any, done: () => void) {
  const contentLength = Number(request.headers['content-length']);
  const isUpload = request.method === 'POST' && request.url.split('?')[0] === '/app/analysis-jobs';
  const requestLimit = isUpload ? config.UPLOAD_REQUEST_LIMIT : config.REQUEST_BODY_LIMIT;
  if (Number.isFinite(contentLength) && contentLength > requestLimit) {
    reply.code(413).send(errorEnvelope('REQUEST_TOO_LARGE', 'The request is too large.'));
    return;
  }
  done();
}

export async function buildApp(options: { analysisWorker?: AnalysisWorker } = {}) {
  const app = Fastify({
    bodyLimit: Math.max(config.REQUEST_BODY_LIMIT, config.UPLOAD_REQUEST_LIMIT),
    logger: {
      level: config.NODE_ENV === 'production' ? 'info' : 'warn',
      redact: ['req.headers.authorization', 'req.headers.cookie', 'req.body', 'res.headers.set-cookie'],
      serializers: {
        req: (request) => ({
          method: request.method,
          url: request.url.replace(/\/app\/analysis-jobs\/[^/?]+/g, '/app/analysis-jobs/:handle'),
        }),
      },
    },
  });

  await app.register(cookie);
  await app.register(multipart, {
    limits: {
      files: 1,
      fields: 4,
      parts: 5,
      fileSize: config.UPLOAD_MAX_BYTES,
      fieldNameSize: 64,
      fieldSize: 256,
      headerPairs: 100,
    },
  });
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
        connectSrc: [
          "'self'",
          'https://cloudflareinsights.com',
          'https://www.gstatic.com',
          'https://fonts.gstatic.com',
        ],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        workerSrc: ["'self'", 'blob:'],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
  });
  app.addHook('onRequest', analysisRequestSizeLimit);
  app.addHook('preHandler', sameOriginAndContentType);

  app.get('/health/live', async () => ({ status: 'ok' }));
  app.get('/health/ready', async (_request, reply) => {
    try {
      await pool.query('SELECT 1');
      const worker = options.analysisWorker?.health();
      const workerReady = !worker || worker.worker === 'healthy' && worker.cleanup === 'healthy';
      const smtpReady = !worker || config.NODE_ENV !== 'production' || worker.smtpConfigured;
      if (!workerReady || !smtpReady) return reply.code(503).send({ status: 'unavailable' });
      return { status: 'ready' };
    } catch {
      return reply.code(503).send({ status: 'unavailable' });
    }
  });

  await registerAuthRoutes(app);
  await registerCatalogRoutes(app);
  await registerRoleRequestRoutes(app);
  await registerAdminRoutes(app);
  await registerAnalysisRoutes(app);

  const publicRoot = [
    join(process.cwd(), 'public'),
    join(process.cwd(), '../apps/web/build/web'),
    join(process.cwd(), 'apps/web/build/web'),
  ].find((candidate) => existsSync(candidate)) ?? join(process.cwd(), 'public');
  await app.register(staticPlugin, { root: publicRoot, wildcard: false });
  app.setNotFoundHandler((request, reply) => {
    if (request.url.startsWith('/app/') || request.url.startsWith('/health/')) {
      return reply.code(404).send(errorEnvelope('NOT_FOUND', 'Not found.'));
    }
    return reply.sendFile('index.html');
  });
  if (options.analysisWorker) {
    app.addHook('onClose', async () => options.analysisWorker?.stop());
  }
  return app;
}
