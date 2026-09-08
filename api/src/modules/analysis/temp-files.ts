import { randomBytes } from 'node:crypto';
import { chmod, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { config } from '../../config.js';
import { prepareAnalysisDirectory } from './pdf-processor.js';

export async function writeTemporaryPdf(bytes: Buffer) {
  await prepareAnalysisDirectory();
  const name = `ready-my-cv-${process.pid}-${Date.now()}-${randomBytes(12).toString('hex')}.pdf`;
  const filePath = join(config.ANALYSIS_TMP_DIR, name);
  await writeFile(filePath, bytes, { mode: 0o600, flag: 'wx' });
  await chmod(filePath, 0o600);
  return filePath;
}

export async function removeTemporaryFile(filePath: string | undefined) {
  if (filePath) await rm(filePath, { force: true });
}

export function zeroBuffer(value: Buffer | undefined) {
  if (value) value.fill(0);
}
