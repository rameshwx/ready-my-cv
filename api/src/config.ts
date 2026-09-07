import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65_535).default(8080),
  DATABASE_URL: z.string().min(1),
  SESSION_HASH_PEPPER: z.string().min(32),
  PUBLIC_ORIGIN: z.string().url().default('https://cv.uxi.asia'),
  ADMIN_INITIAL_USERNAME: z.string().regex(/^[a-z0-9._-]{3,64}$/).default('rameshwx'),
  ADMIN_INITIAL_PASSWORD: z.string().min(8),
  SESSION_COOKIE_NAME: z.string().default('ready_my_cv_admin'),
  SESSION_ABSOLUTE_HOURS: z.coerce.number().positive().default(12),
  SESSION_IDLE_MINUTES: z.coerce.number().positive().default(30),
  REQUEST_BODY_LIMIT: z.coerce.number().int().positive().default(131_072),
  DATABASE_APP_ROLE: z.string().regex(/^[a-z_][a-z0-9_]*$/).default(''),
  CAPTCHA_SECRET: z.string().optional(),
});

export type Config = z.infer<typeof schema>;
export const config = schema.parse(process.env);
