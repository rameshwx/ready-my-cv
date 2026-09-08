import { z } from 'zod';

export const analysisStatuses = [
  'queued',
  'processing',
  'awaiting_email',
  'email_pending',
  'email_sending',
  'completed',
  'failed',
  'expired',
  'cancelled',
] as const;

export type AnalysisJobStatus = (typeof analysisStatuses)[number];

export const analysisResultSchema = z.object({
  roleSlug: z.string().min(2).max(80),
  roleTitle: z.string().min(2).max(120),
  seniority: z.string().max(30).nullable(),
  catalogVersion: z.string().min(1).max(80),
  engineVersion: z.string().min(1).max(80),
  evidence: z.array(z.object({
    id: z.string().max(160),
    requirementId: z.string().max(160),
    canonicalTerm: z.string().max(160),
    matchedTerm: z.string().max(160).nullable(),
    classification: z.enum(['strong', 'weak', 'mentionOnly', 'missing', 'contradictory']),
    explanation: z.string().max(500),
    section: z.string().max(80).nullable(),
    page: z.number().int().positive().nullable(),
    start: z.number().int().nonnegative().nullable(),
    end: z.number().int().nonnegative().nullable(),
    matchingTool: z.string().max(120),
  }).strict()).max(500),
  score: z.object({
    roleSkills: z.number().finite(),
    experience: z.number().finite(),
    ats: z.number().finite(),
    completeness: z.number().finite(),
    impact: z.number().finite(),
  }).strict(),
  recommendations: z.array(z.object({
    id: z.string().max(120),
    text: z.string().max(1000),
    conditional: z.boolean(),
  }).strict()).max(100),
  trajectory: z.array(z.object({
    agent: z.string().max(120),
    step: z.number().int().nonnegative(),
    goal: z.string().max(300),
    tool: z.string().max(120),
    observation: z.string().max(500),
    decision: z.string().max(120),
    confidence: z.number().finite(),
    stateUpdate: z.string().max(500),
    nextAgent: z.string().max(120).nullable(),
    retry: z.boolean(),
  }).strict()).min(7).max(20),
  verification: z.object({
    valid: z.boolean(),
    failures: z.array(z.string().max(300)).max(20),
  }).strict(),
}).strict();

export type AnalysisResult = z.infer<typeof analysisResultSchema>;

export const emailInputSchema = z.object({
  email: z.string().trim().email().max(254),
  consent: z.literal(true),
  website: z.literal('').optional(),
}).strict();

export type ParsedDocument = {
  pages: Array<{ number: number; text: string; spans: [] }>;
  sections: Array<{ name: string; page: number; start: number; end: number }>;
  normalizedText: string;
  warnings: string[];
};

export type QueuedAnalysisReport = {
  result: AnalysisResult;
  html: string;
  text: string;
};
