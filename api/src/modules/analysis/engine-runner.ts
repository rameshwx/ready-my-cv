import { spawn } from 'node:child_process';

import { config } from '../../config.js';
import { analysisResultSchema, type AnalysisResult, type ParsedDocument } from './analysis-types.js';

export type ServerWorkflowInput = {
  document: ParsedDocument;
  catalog: Record<string, unknown>;
  role: Record<string, unknown>;
  seniority: string | null;
  engineVersion: string;
};

export interface AnalysisEngineRunner {
  run(input: ServerWorkflowInput): Promise<AnalysisResult>;
}

export class DartAnalysisEngineRunner implements AnalysisEngineRunner {
  async run(input: ServerWorkflowInput): Promise<AnalysisResult> {
    const child = spawn(config.ANALYSIS_RUNNER_PATH, [], {
      stdio: ['pipe', 'pipe', 'ignore'],
      env: {
        PATH: process.env.PATH,
      },
    });
    let output = '';
    let outputBytes = 0;
    const outputLimit = 4 * 1024 * 1024;
    const timer = setTimeout(() => child.kill('SIGKILL'), config.PDF_PROCESS_TIMEOUT_MS);
    try {
      child.stdout.setEncoding('utf8');
      child.stdout.on('data', (chunk: string) => {
        outputBytes += Buffer.byteLength(chunk, 'utf8');
        if (outputBytes <= outputLimit) output += chunk;
        else child.kill('SIGKILL');
      });
      const exitCode = await new Promise<number>((resolve, reject) => {
        child.once('error', reject);
        child.once('close', (code) => resolve(code ?? 1));
        child.stdin.end(JSON.stringify(input));
      });
      if (exitCode !== 0 || outputBytes > outputLimit) {
        throw new Error('Analysis engine failed.');
      }
      let decoded: unknown;
      try {
        decoded = JSON.parse(output);
      } catch {
        throw new Error('Analysis engine returned invalid output.');
      }
      const result = analysisResultSchema.parse(decoded);
      if (!result.verification.valid) throw new Error('Analysis result did not verify.');
      return result;
    } finally {
      clearTimeout(timer);
      output = '';
      if (!child.killed) child.kill();
    }
  }
}
