import { config } from '../config.js';

export class CaptchaError extends Error {
  constructor(
    readonly code: 'CAPTCHA_REQUIRED' | 'CAPTCHA_INVALID' | 'CAPTCHA_EXPIRED' | 'CAPTCHA_UNAVAILABLE',
    message: string,
    readonly providerCodes: string[] = [],
  ) {
    super(message);
    this.name = 'CaptchaError';
  }
}

export function isCaptchaConfigured() {
  return Boolean(config.CAPTCHA_SITE_KEY && config.CAPTCHA_SECRET && config.CAPTCHA_VERIFY_URL);
}

export async function verifyCaptcha(token?: string, fetcher: typeof fetch = fetch) {
  if (!isCaptchaConfigured()) {
    throw new CaptchaError('CAPTCHA_UNAVAILABLE', 'CAPTCHA verification is not configured.');
  }
  if (!token || token.length > 4096) {
    throw new CaptchaError('CAPTCHA_REQUIRED', 'CAPTCHA verification is required.');
  }
  try {
    const response = await fetcher(config.CAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: config.CAPTCHA_SECRET!, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    const payload = await response.json() as { success?: boolean; 'error-codes'?: unknown };
    const providerCodes = Array.isArray(payload['error-codes'])
      ? payload['error-codes'].filter((code): code is string => typeof code === 'string')
      : [];
    if (!response.ok || payload.success !== true) {
      if (providerCodes.includes('timeout-or-duplicate')) {
        throw new CaptchaError(
          'CAPTCHA_EXPIRED',
          'CAPTCHA verification expired or was already used. Please complete it again.',
          providerCodes,
        );
      }
      throw new CaptchaError('CAPTCHA_INVALID', 'CAPTCHA verification failed.', providerCodes);
    }
  } catch (error) {
    if (error instanceof CaptchaError) throw error;
    throw new CaptchaError('CAPTCHA_INVALID', 'CAPTCHA verification failed.');
  }
}
