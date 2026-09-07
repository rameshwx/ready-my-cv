import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    admin?: {
      forcePasswordChange: boolean;
    };
  }
}
