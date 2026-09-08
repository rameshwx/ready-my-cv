import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

import { analysisResultSchema } from '../src/modules/analysis/analysis-types.js';
import { buildReport } from '../src/modules/analysis/report.js';

function resultFixture() {
  return {
    roleSlug: 'backend-developer',
    roleTitle: 'Backend Developer <unsafe>',
    seniority: 'senior',
    catalogVersion: 'catalog-1',
    engineVersion: '1.0.0',
    evidence: [{
      id: 'rule-1', requirementId: 'rule-1', canonicalTerm: 'Node.js', matchedTerm: 'Node',
      classification: 'strong', explanation: 'Built <unsafe>', section: 'experience', page: 1, start: 0, end: 4,
      matchingTool: 'boundaryMatcher',
    }],
    score: { roleSkills: 20, experience: 20, ats: 15, completeness: 8, impact: 7 },
    recommendations: [{ id: 'rec-1', text: 'Add truthful evidence <unsafe>', conditional: true }],
    trajectory: Array.from({ length: 7 }, (_, step) => ({
      agent: `Agent-${step}`, step, goal: 'goal', tool: 'tool', observation: 'safe', decision: 'continue',
      confidence: 1, stateUpdate: 'state', nextAgent: null, retry: false,
    })),
    verification: { valid: true, failures: [] },
  };
}

test('server result contract is strict and sanitized report HTML escapes values', () => {
  const result = analysisResultSchema.parse(resultFixture());
  const report = buildReport(result);
  assert.equal(result.verification.valid, true);
  assert.match(report.html, /&lt;unsafe&gt;/);
  assert.doesNotMatch(report.html, /<unsafe>|<img|<script/i);
  assert.match(report.text, /<unsafe>/);
  assert.throws(() => analysisResultSchema.parse({ ...resultFixture(), unexpected: true }));
});

test('analysis boundary never logs payloads and redacts request URL handles', async () => {
  const [app, worker, routes, parser, runner] = await Promise.all([
    readFile(new URL('../src/app.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/modules/analysis/worker.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/modules/analysis/routes.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/modules/analysis/pdf-processor.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/modules/analysis/engine-runner.ts', import.meta.url), 'utf8'),
  ]);
  assert.match(app, /req\.body/);
  assert.match(app, /url\.replace/);
  assert.match(app, /:handle/);
  assert.doesNotMatch(`${app}\n${worker}\n${routes}`, /console\.(log|info|debug)\([^)]*(?:CV|text|pdf|email|payload)/i);
  assert.match(parser, /pdfinfo/);
  assert.match(parser, /pdftotext/);
  assert.match(parser, /pdftoppm/);
  assert.match(parser, /tesseract/);
  assert.match(parser, /execFile/);
  assert.match(parser, /finally/);
  assert.match(runner, /stdin\.end/);
  assert.match(runner, /analysisResultSchema/);
});
