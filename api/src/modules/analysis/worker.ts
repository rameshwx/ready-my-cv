import { buildReport } from './report.js';
import { DartAnalysisEngineRunner, type AnalysisEngineRunner } from './engine-runner.js';
import { EmailDeliveryError, SmtpReportMailer, type ReportMailer } from './mailer.js';
import { cleanupAnalysisDirectory, inspectAndParsePdf } from './pdf-processor.js';
import {
  claimNextJob,
  decryptEmailAndReport,
  decryptPdf,
  failEmail,
  failProcessing,
  finishEmail,
  finishProcessing,
  heartbeat,
  loadCatalogForJob,
  recoverAndPurge,
  type AnalysisJobRow,
} from './job-service.js';
import { config } from '../../config.js';
import { removeTemporaryFile, writeTemporaryPdf, zeroBuffer } from './temp-files.js';

export type WorkerHealth = {
  worker: 'healthy' | 'starting' | 'stopped';
  cleanup: 'healthy' | 'unknown';
  smtpConfigured: boolean;
  activeJobs: number;
};

export class AnalysisWorker {
  private readonly active = new Set<Promise<void>>();
  private claimTimer?: NodeJS.Timeout;
  private cleanupTimer?: NodeJS.Timeout;
  private startedAt?: number;
  private lastCleanupAt?: number;
  private stopping = false;

  constructor(
    private readonly engine: AnalysisEngineRunner = new DartAnalysisEngineRunner(),
    private readonly mailer: ReportMailer = new SmtpReportMailer(),
  ) {}

  async start() {
    await cleanupAnalysisDirectory();
    await recoverAndPurge();
    this.startedAt = Date.now();
    this.lastCleanupAt = Date.now();
    this.stopping = false;
    this.claimTimer = setInterval(() => void this.fillSlots(), 250);
    this.cleanupTimer = setInterval(() => void this.cleanup(), 60_000);
    this.claimTimer.unref();
    this.cleanupTimer.unref();
    await this.fillSlots();
  }

  async stop() {
    this.stopping = true;
    if (this.claimTimer) clearInterval(this.claimTimer);
    if (this.cleanupTimer) clearInterval(this.cleanupTimer);
    await Promise.allSettled([...this.active]);
  }

  health(): WorkerHealth {
    const workerHealthy = this.startedAt !== undefined && !this.stopping;
    const cleanupHealthy = this.lastCleanupAt === undefined || Date.now() - this.lastCleanupAt < 180_000;
    return {
      worker: workerHealthy ? 'healthy' : this.stopping ? 'stopped' : 'starting',
      cleanup: cleanupHealthy ? 'healthy' : 'unknown',
      smtpConfigured: Boolean(config.SMTP_HOST && config.SMTP_USER && config.SMTP_PASSWORD && config.EMAIL_FROM),
      activeJobs: this.active.size,
    };
  }

  private async fillSlots() {
    try {
      if (this.stopping) return;
      while (this.active.size < config.WORKER_CONCURRENCY) {
        const claimed = await claimNextJob();
        if (!claimed) return;
        const task = this.process(claimed.row, claimed.leaseHash);
        this.active.add(task);
        void task.then(
          () => this.active.delete(task),
          () => this.active.delete(task),
        );
      }
    } catch {
      // A later tick retries a transient database or startup failure.
    }
  }

  private async process(row: AnalysisJobRow, leaseHash: string) {
    if (row.status === 'processing') return this.processPdf(row, leaseHash);
    if (row.status === 'email_sending') return this.processEmail(row, leaseHash);
  }

  private async processPdf(row: AnalysisJobRow, leaseHash: string) {
    let filePath: string | undefined;
    let bytes: Buffer | undefined;
    const heartbeatTimer = setInterval(() => void heartbeat(row.id, leaseHash), config.WORKER_HEARTBEAT_SECONDS * 1000);
    heartbeatTimer.unref();
    try {
      bytes = await decryptPdf(row);
      filePath = await writeTemporaryPdf(bytes);
      zeroBuffer(bytes);
      bytes = undefined;
      const document = await inspectAndParsePdf(filePath);
      const { catalog, role } = await loadCatalogForJob(row);
      const result = await this.engine.run({
        document,
        catalog,
        role,
        seniority: row.seniority,
        engineVersion: String(catalog.engineVersion ?? 'unknown'),
      });
      if (result.roleSlug !== row.role_slug || result.catalogVersion !== row.catalog_version) {
        throw new Error('Analysis result identity mismatch.');
      }
      await finishProcessing(row.id, leaseHash, document, buildReport(result));
    } catch (error) {
      const retryable = !(error instanceof Error && 'code' in error && [
        'MALFORMED_PDF',
        'PROTECTED_PDF',
        'TOO_MANY_PAGES',
        'NO_READABLE_TEXT',
        'PDF_TEXT_TOO_LARGE',
        'PDF_PAGE_TOO_LARGE',
        'OCR_UNAVAILABLE',
      ].includes(String((error as { code?: unknown }).code)));
      await failProcessing(row.id, leaseHash, retryable ? row.attempt_count : config.PROCESSING_MAX_ATTEMPTS);
    } finally {
      clearInterval(heartbeatTimer);
      zeroBuffer(bytes);
      await removeTemporaryFile(filePath);
    }
  }

  private async processEmail(row: AnalysisJobRow, leaseHash: string) {
    try {
      const payload = await decryptEmailAndReport(row);
      await this.mailer.send(row.id, payload.email, payload.report);
      await finishEmail(row.id, leaseHash);
    } catch (error) {
      const delivery = error instanceof EmailDeliveryError ? error : undefined;
      await failEmail(row.id, leaseHash, row.email_attempt_count, Boolean(delivery?.retryable && !delivery.uncertain));
    }
  }

  private async cleanup() {
    if (this.stopping) return;
    try {
      await recoverAndPurge();
      this.lastCleanupAt = Date.now();
    } catch {
      // The next scheduled cleanup retries without exposing database details.
    }
  }
}
