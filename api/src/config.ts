import { z } from 'zod';

const emailAddress = z.string().email().max(254);

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
  DATABASE_APP_ROLE: z.string().regex(/^(?:[a-z_][a-z0-9_]*)?$/).default(''),
  CAPTCHA_SECRET: z.string().optional(),
  CAPTCHA_VERIFY_URL: z.string().url().optional(),
  DATA_ENCRYPTION_KEY: z.string().optional(),
  JOB_HANDLE_PEPPER: z.string().optional(),
  UPLOAD_MAX_BYTES: z.coerce.number().int().positive().default(10 * 1024 * 1024),
  UPLOAD_REQUEST_LIMIT: z.coerce.number().int().positive().default(11 * 1024 * 1024),
  PDF_MAX_PAGES: z.coerce.number().int().positive().default(25),
  PDF_MAX_TEXT_BYTES: z.coerce.number().int().positive().default(1024 * 1024),
  PDF_PROCESS_TIMEOUT_MS: z.coerce.number().int().positive().default(30_000),
  OCR_ENABLED: z.coerce.boolean().default(true),
  OCR_LANGS: z.string().regex(/^[a-zA-Z0-9_+.-]{2,64}$/).default('eng'),
  OCR_DPI: z.coerce.number().int().min(72).max(300).default(150),
  OCR_MAX_PIXELS: z.coerce.number().int().positive().default(4_000_000),
  OCR_PAGE_TIMEOUT_MS: z.coerce.number().int().positive().default(15_000),
  FAST_PATH_TIMEOUT_MS: z.coerce.number().int().positive().default(45_000),
  JOB_TTL_MINUTES: z.coerce.number().positive().default(15),
  MAX_ACTIVE_JOBS: z.coerce.number().int().positive().max(1000).default(20),
  WORKER_CONCURRENCY: z.coerce.number().int().positive().max(8).default(2),
  WORKER_LEASE_SECONDS: z.coerce.number().int().positive().default(120),
  WORKER_HEARTBEAT_SECONDS: z.coerce.number().int().positive().default(30),
  PROCESSING_MAX_ATTEMPTS: z.coerce.number().int().positive().max(5).default(3),
  EMAIL_MAX_ATTEMPTS: z.coerce.number().int().positive().max(5).default(3),
  EMAIL_RETRY_BASE_SECONDS: z.coerce.number().int().positive().default(5),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().min(1).max(65_535).default(587),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
  EMAIL_REPLY_TO: z.string().optional(),
  ANALYSIS_RUNNER_PATH: z.string().min(1).default('/app/bin/server_analysis_runner'),
  ANALYSIS_TMP_DIR: z.string().min(1).default('/tmp/ready-my-cv'),
}).superRefine((value, context) => {
  const needsSecrets = value.NODE_ENV === 'production' || value.NODE_ENV === 'test';
  if (needsSecrets && !value.DATA_ENCRYPTION_KEY) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ['DATA_ENCRYPTION_KEY'], message: 'DATA_ENCRYPTION_KEY is required.' });
  }
  if (needsSecrets && !value.JOB_HANDLE_PEPPER) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ['JOB_HANDLE_PEPPER'], message: 'JOB_HANDLE_PEPPER is required.' });
  }
  const smtpValues = [value.SMTP_HOST, value.SMTP_USER, value.SMTP_PASSWORD, value.EMAIL_FROM];
  if (value.NODE_ENV === 'production' && smtpValues.some((item) => !item)) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ['SMTP_HOST'], message: 'SMTP configuration is required in production.' });
  }
  if (Boolean(value.CAPTCHA_SECRET) !== Boolean(value.CAPTCHA_VERIFY_URL)) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ['CAPTCHA_VERIFY_URL'], message: 'CAPTCHA_SECRET and CAPTCHA_VERIFY_URL must be supplied together.' });
  }
  for (const [key, address] of [['EMAIL_FROM', value.EMAIL_FROM], ['EMAIL_REPLY_TO', value.EMAIL_REPLY_TO]] as const) {
    if (address && !emailAddress.safeParse(address).success) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: `${key} must be a valid email address.` });
    }
  }
});

export type Config = z.infer<typeof schema>;
export const config = schema.parse(process.env);
