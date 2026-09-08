import nodemailer from 'nodemailer';

import { config } from '../../config.js';
import type { QueuedAnalysisReport } from './analysis-types.js';

export class EmailDeliveryError extends Error {
  constructor(message: string, public readonly uncertain: boolean, public readonly retryable: boolean) {
    super(message);
    this.name = 'EmailDeliveryError';
  }
}

export interface ReportMailer {
  send(jobId: string, recipient: string, report: QueuedAnalysisReport): Promise<void>;
}

export function smtpIsConfigured() {
  return Boolean(config.SMTP_HOST && config.SMTP_USER && config.SMTP_PASSWORD && config.EMAIL_FROM);
}

export class SmtpReportMailer implements ReportMailer {
  async send(jobId: string, recipient: string, report: QueuedAnalysisReport) {
    if (!smtpIsConfigured()) throw new EmailDeliveryError('Email delivery is unavailable.', false, false);
    const host = config.SMTP_HOST as string;
    const user = config.SMTP_USER as string;
    const password = config.SMTP_PASSWORD as string;
    const from = config.EMAIL_FROM as string;
    const transport = nodemailer.createTransport({
      host,
      port: config.SMTP_PORT,
      secure: config.SMTP_PORT === 465,
      auth: { user, pass: password },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    try {
      await transport.sendMail({
        from,
        to: recipient,
        ...(config.EMAIL_REPLY_TO ? { replyTo: config.EMAIL_REPLY_TO } : {}),
        subject: 'Your Ready My CV report',
        messageId: `<ready-my-cv-${jobId}@${new URL(config.PUBLIC_ORIGIN).hostname}>`,
        text: report.text,
        html: report.html,
      });
    } catch (error) {
      const responseCode = error && typeof error === 'object' && 'responseCode' in error
        ? Number((error as { responseCode?: unknown }).responseCode)
        : undefined;
      const retryable = responseCode === undefined || responseCode >= 400 && responseCode < 500;
      const uncertain = Boolean(error && typeof error === 'object' && 'command' in error && (error as { command?: string }).command === 'DATA');
      throw new EmailDeliveryError('Email delivery failed.', uncertain, retryable && !uncertain);
    } finally {
      transport.close();
    }
  }
}
