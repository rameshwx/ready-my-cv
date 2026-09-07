# Ready My CV

Ready My CV is a free, privacy-first Flutter Web application that compares a text-based PDF CV with a selected job role. A deterministic seven-agent workflow classifies traceable evidence and produces an explainable 0–100 readiness score. No CV bytes, text, filename, score, recommendation, or visitor result leaves browser memory.

Production target: `https://cv.uxi.asia` · Admin: `https://cv.uxi.asia/admin`

## What is implemented

- One Flutter Web bundle for public and protected administrator experiences, with blue/white/green Material 3 styling and the supplied application logo.
- Local PDF.js extraction (10 MB / 25-page limits) and deterministic parsing, rule analysis, approved aliases, contextual evidence classification, scoring, recommendations, verification, and in-memory trajectory.
- Eleven seeded job-role definitions and 20 safe synthetic evaluation cases.
- Node.js 22, TypeScript, Fastify and PostgreSQL same-origin routes; no CORS or public API contract.
- Exactly one administrator, initialized from server-side settings, Argon2id hashing, hashed server sessions in PostgreSQL, Secure/HttpOnly/SameSite cookie, expiry, idle timeout, logout and all-session revocation on credential change.
- PostgreSQL migrations with singleton constraint, catalog snapshots, authoring/request/audit/settings schema and RLS enabled.
- One multi-stage root Dockerfile, GHCR commit-SHA build, Coolify deployment workflow, and health checks.

This is guidance, not an employer ATS score or a guarantee of an interview or offer.

## Local development

Requirements: Flutter 3.32 / Dart 3.8, Node.js 22, npm 11, and PostgreSQL 16.

```bash
cp .env.example .env
# Edit DATABASE_URL and SESSION_HASH_PEPPER.
set -a && . ./.env && set +a
npm --prefix api ci
npm --prefix api run db:migrate
npm --prefix api run db:seed
flutter pub get
flutter run -d chrome
```

Run the API separately with `npm --prefix api run dev`. For an integrated production-style build, use the root Dockerfile.

The empty-database seed uses the configured initial username and password only once. The password is required as a Coolify secret, stored as Argon2id, and the admin is forced to change it on first sign-in. Never commit the deployment `.env` file.

## Verification

```bash
npm --prefix api run typecheck
npm --prefix api test
flutter analyze
flutter test
dart run evaluation/bin/run_baseline.dart
dart run evaluation/bin/run_agents.dart
dart run evaluation/bin/compare_results.dart
```

## Deployment

Create one Coolify project containing the root-Dockerfile application and one private PostgreSQL resource. Configure `cv.uxi.asia`, HTTPS, `.env.example` values as secrets, pre-deploy commands `node dist/db/migrate.js` and `node dist/db/seed.js` for first initialization, and `/health/ready` as the readiness check. PostgreSQL port 5432 must not be public.

The application is MIT licensed. PDF.js is Apache-2.0; Flutter/Dart packages and Node dependencies use compatible permissive licenses. Review the lockfiles in automated dependency/license checks before each release.
