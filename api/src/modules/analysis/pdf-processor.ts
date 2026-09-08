import { execFile as execFileCallback } from 'node:child_process';
import { constants } from 'node:fs';
import { access, mkdir, readdir, rm } from 'node:fs/promises';
import { promisify } from 'node:util';
import { join } from 'node:path';

import { config } from '../../config.js';

const execFile = promisify(execFileCallback);

export type ParsedPdfPage = {
  number: number;
  text: string;
  spans: [];
};

export type ParsedPdfDocument = {
  pages: ParsedPdfPage[];
  sections: Array<{ name: string; page: number; start: number; end: number }>;
  normalizedText: string;
  warnings: string[];
};

export class PdfProcessingError extends Error {
  constructor(public readonly code: string, message: string) {
    super(message);
    this.name = 'PdfProcessingError';
  }
}

const sectionHeadings = [
  'summary',
  'skills',
  'experience',
  'projects',
  'education',
  'certifications',
];

export async function prepareAnalysisDirectory() {
  await mkdir(config.ANALYSIS_TMP_DIR, { recursive: true, mode: 0o700 });
  await access(config.ANALYSIS_TMP_DIR, constants.W_OK);
}

export async function cleanupAnalysisDirectory() {
  try {
    const names = await readdir(config.ANALYSIS_TMP_DIR);
    await Promise.all(
      names
        .filter((name) => name.startsWith('ready-my-cv-'))
        .map((name) => rm(join(config.ANALYSIS_TMP_DIR, name), { force: true, recursive: true })),
    );
  } catch {
    // Cleanup is best effort; the next startup will retry it.
  }
}

export async function inspectAndParsePdf(filePath: string): Promise<ParsedPdfDocument> {
  const info = await runTextCommand('pdfinfo', [filePath], config.PDF_PROCESS_TIMEOUT_MS, 32 * 1024);
  const pageMatch = info.match(/^Pages:\s+(\d+)\s*$/m);
  const pageCount = pageMatch ? Number(pageMatch[1]) : NaN;
  if (!Number.isSafeInteger(pageCount) || pageCount < 1) {
    throw new PdfProcessingError('MALFORMED_PDF', 'This PDF could not be read.');
  }
  if (pageCount > config.PDF_MAX_PAGES) {
    throw new PdfProcessingError('TOO_MANY_PAGES', `PDF must be ${config.PDF_MAX_PAGES} pages or fewer.`);
  }
  if (/^Encrypted:\s+yes\s*$/im.test(info)) {
    throw new PdfProcessingError('PROTECTED_PDF', 'Password-protected PDFs are not supported.');
  }

  const pages: ParsedPdfPage[] = [];
  const warnings: string[] = [];
  let textBytes = 0;
  for (let page = 1; page <= pageCount; page += 1) {
    await assertPagePixelBounds(filePath, page);
    let text = await runTextCommand(
      'pdftotext',
      ['-layout', '-enc', 'UTF-8', '-f', String(page), '-l', String(page), filePath, '-'],
      config.PDF_PROCESS_TIMEOUT_MS,
      config.PDF_MAX_TEXT_BYTES,
    );
    text = normalizePageText(text);
    if (!text && config.OCR_ENABLED) {
      const ocr = await ocrPage(filePath, page);
      if (ocr) {
        text = normalizePageText(ocr);
        warnings.push('ocr-fallback');
      }
    }
    textBytes += Buffer.byteLength(text, 'utf8');
    if (textBytes > config.PDF_MAX_TEXT_BYTES) {
      throw new PdfProcessingError('PDF_TEXT_TOO_LARGE', 'This PDF contains too much text to process safely.');
    }
    pages.push({ number: page, text, spans: [] });
  }

  const normalizedText = pages.map((page) => page.text).join('\n\n').trim();
  if (Buffer.byteLength(normalizedText, 'utf8') > config.PDF_MAX_TEXT_BYTES) {
    throw new PdfProcessingError('PDF_TEXT_TOO_LARGE', 'This PDF contains too much text to process safely.');
  }
  if (normalizedText.length < 30) {
    throw new PdfProcessingError('NO_READABLE_TEXT', 'This PDF does not contain enough readable text.');
  }
  const sections = sectionHeadings
    .map((name) => ({ name, start: normalizedText.toLowerCase().indexOf(name) }))
    .filter((item) => item.start >= 0)
    .map((item) => ({ name: item.name, page: pageForOffset(pages, item.start), start: item.start, end: normalizedText.length }));
  return { pages, sections, normalizedText, warnings: [...new Set(warnings)] };
}

function normalizePageText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function pageForOffset(pages: ParsedPdfPage[], offset: number) {
  let running = 0;
  for (const page of pages) {
    running += page.text.length;
    if (offset <= running) return page.number;
    running += 2;
  }
  return pages.at(-1)?.number ?? 1;
}

async function ocrPage(pdfPath: string, page: number) {
  const token = `ready-my-cv-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const basePath = join(config.ANALYSIS_TMP_DIR, `${token}-page`);
  const imagePath = `${basePath}.png`;
  try {
    await runCommand(
      'pdftoppm',
      ['-f', String(page), '-l', String(page), '-r', String(config.OCR_DPI), '-scale-to', '2000', '-singlefile', '-png', pdfPath, basePath],
      config.OCR_PAGE_TIMEOUT_MS,
      8 * 1024,
    );
    const output = await runTextCommand(
      'tesseract',
      [imagePath, 'stdout', '-l', config.OCR_LANGS, '--psm', '3'],
      config.OCR_PAGE_TIMEOUT_MS,
      config.PDF_MAX_TEXT_BYTES,
    );
    return output;
  } catch (error) {
    if (error instanceof PdfProcessingError && error.code === 'COMMAND_TIMEOUT') {
      throw new PdfProcessingError('OCR_TIMEOUT', 'This PDF took too long to process.');
    }
    return '';
  } finally {
    await rm(imagePath, { force: true });
  }
}

async function assertPagePixelBounds(pdfPath: string, page: number) {
  const info = await runTextCommand(
    'pdfinfo',
    ['-f', String(page), '-l', String(page), pdfPath],
    config.PDF_PROCESS_TIMEOUT_MS,
    32 * 1024,
  );
  const match = info.match(/Page size:\s*([\d.]+)\s+x\s+([\d.]+)\s+pts/i);
  if (!match) return;
  const width = Number(match[1]);
  const height = Number(match[2]);
  const pixels = Math.ceil(width / 72 * config.OCR_DPI) * Math.ceil(height / 72 * config.OCR_DPI);
  if (!Number.isFinite(pixels) || pixels > config.OCR_MAX_PIXELS) {
    throw new PdfProcessingError('PDF_PAGE_TOO_LARGE', 'This PDF page is too large to process safely.');
  }
}

async function runTextCommand(command: string, args: string[], timeout: number, maxBuffer: number) {
  try {
    const result = await execFile(command, args, {
      encoding: 'utf8',
      timeout,
      maxBuffer,
      windowsHide: true,
    });
    return result.stdout;
  } catch (error) {
    if (isTimeout(error)) throw new PdfProcessingError('COMMAND_TIMEOUT', 'This PDF took too long to process.');
    throw new PdfProcessingError('MALFORMED_PDF', 'This PDF could not be read.');
  }
}

async function runCommand(command: string, args: string[], timeout: number, maxBuffer: number) {
  try {
    await execFile(command, args, {
      encoding: 'utf8',
      timeout,
      maxBuffer,
      windowsHide: true,
    });
  } catch (error) {
    if (isTimeout(error)) throw new PdfProcessingError('COMMAND_TIMEOUT', 'This PDF took too long to process.');
    throw new PdfProcessingError('OCR_UNAVAILABLE', 'This PDF could not be processed.');
  }
}

function isTimeout(error: unknown) {
  return Boolean(error && typeof error === 'object' && 'killed' in error && (error as { killed?: boolean }).killed);
}
