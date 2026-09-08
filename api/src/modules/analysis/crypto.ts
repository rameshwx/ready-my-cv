import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto';

import { config } from '../../config.js';

const algorithm = 'aes-256-gcm';
const version = 1;

function encryptionKey() {
  const value = config.DATA_ENCRYPTION_KEY;
  if (!value) throw new Error('DATA_ENCRYPTION_KEY is not configured.');
  const hex = /^[0-9a-f]{64}$/i.test(value) ? Buffer.from(value, 'hex') : Buffer.from(value, 'base64');
  if (hex.length !== 32) throw new Error('DATA_ENCRYPTION_KEY must encode 32 bytes.');
  return hex;
}

export function encryptPayload(value: Buffer | string): Buffer {
  const iv = randomBytes(12);
  const key = encryptionKey();
  try {
    const cipher = createCipheriv(algorithm, key, iv);
    const ciphertext = Buffer.concat([cipher.update(typeof value === 'string' ? Buffer.from(value, 'utf8') : value), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([Buffer.from([version]), iv, tag, ciphertext]);
  } finally {
    key.fill(0);
  }
}

export function decryptPayload(value: Buffer): Buffer {
  if (value.length < 1 + 12 + 16 || value[0] !== version) throw new Error('Encrypted payload is invalid.');
  const iv = value.subarray(1, 13);
  const tag = value.subarray(13, 29);
  const ciphertext = value.subarray(29);
  const key = encryptionKey();
  try {
    const decipher = createDecipheriv(algorithm, key, iv);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  } finally {
    key.fill(0);
  }
}

export function hashJobHandle(handle: string) {
  const pepper = config.JOB_HANDLE_PEPPER ?? config.SESSION_HASH_PEPPER;
  return createHash('sha256').update(handle).update(pepper).digest('hex');
}

export function hashLeaseToken(token: string) {
  return createHash('sha256').update(token).update(config.SESSION_HASH_PEPPER).digest('hex');
}
