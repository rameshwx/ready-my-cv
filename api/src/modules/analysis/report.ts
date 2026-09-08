import type { AnalysisResult, QueuedAnalysisReport } from './analysis-types.js';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character);
}

function scoreBand(total: number) {
  return total < 50 ? 'Needs work' : total < 70 ? 'Developing' : total < 85 ? 'Strong' : 'Very strong';
}

export function buildReport(result: AnalysisResult): QueuedAnalysisReport {
  const total = Math.max(0, Math.min(100, Math.round(
    result.score.roleSkills + result.score.experience + result.score.ats + result.score.completeness + result.score.impact,
  )));
  const band = scoreBand(total);
  const evidenceRows = result.evidence.map((item) =>
    `<li><strong>${escapeHtml(item.canonicalTerm)}</strong>: ${escapeHtml(item.classification)} — ${escapeHtml(item.explanation)}${item.page ? ` (page ${item.page})` : ''}</li>`,
  ).join('');
  const recommendations = result.recommendations.map((item) => `<li>${escapeHtml(item.text)}</li>`).join('');
  const html = `<!doctype html><html><body><main style="font-family:Arial,sans-serif;line-height:1.5">
    <h1>Ready My CV report</h1>
    <p><strong>${escapeHtml(result.roleTitle)}</strong> — ${total}/100 (${escapeHtml(band)})</p>
    <p>This deterministic report is guidance based on the selected role rules. It is not an employer ATS score, hiring decision, or guarantee of an interview or offer.</p>
    <h2>Score components</h2>
    <p>Role skills ${result.score.roleSkills.toFixed(1)}/35 · Experience ${result.score.experience.toFixed(1)}/25 · ATS ${result.score.ats.toFixed(1)}/20 · Completeness ${result.score.completeness.toFixed(1)}/10 · Impact ${result.score.impact.toFixed(1)}/10</p>
    <h2>Evidence map</h2><ul>${evidenceRows}</ul>
    <h2>Truthful improvements</h2><ul>${recommendations}</ul>
    <p>Ready My CV does not use CV content for training, advertising, analytics, or unrelated purposes. The temporary processing data has been deleted. Your email provider may retain this delivered message.</p>
  </main></body></html>`;
  const text = [
    'Ready My CV report',
    `${result.roleTitle} — ${total}/100 (${band})`,
    'This is deterministic guidance based on the selected role rules. It is not an employer ATS score, hiring decision, or guarantee of an interview or offer.',
    '',
    'Score components',
    `Role skills ${result.score.roleSkills.toFixed(1)}/35 | Experience ${result.score.experience.toFixed(1)}/25 | ATS ${result.score.ats.toFixed(1)}/20 | Completeness ${result.score.completeness.toFixed(1)}/10 | Impact ${result.score.impact.toFixed(1)}/10`,
    '',
    'Evidence map',
    ...result.evidence.map((item) => `- ${item.canonicalTerm}: ${item.classification} — ${item.explanation}${item.page ? ` (page ${item.page})` : ''}`),
    '',
    'Truthful improvements',
    ...result.recommendations.map((item) => `- ${item.text}`),
    '',
    'Temporary processing data has been deleted after delivery. Your email provider may retain this message.',
  ].join('\n');
  return { result, html, text };
}
