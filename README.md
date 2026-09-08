# Ready My CV

Ready My CV is a free, privacy-first Flutter Web application that compares a PDF CV with a selected job role. After explicit consent, a temporary same-origin backend job uses local Poppler/Tesseract parsing and the canonical deterministic seven-agent workflow to produce an explainable 0–100 readiness score. Job-specific PDF, extracted text, report, and email data are encrypted while active and purged after completion, cancellation, expiry, or permanent failure.

Production target: `https://cv.uxi.asia` · Admin: `https://cv.uxi.asia/admin`

## Architecture and implementation status

- One Flutter Web bundle for public and protected administrator experiences, with blue/white/green Material 3 styling and the supplied application logo.
- Pub workspace layout with `apps/web` plus pure-Dart `core_models`, `catalog_models`, `scoring_engine`, `agent_engine`, `pdf_parser_contract`, `validation`, `design_system`, and `test_fixtures` packages.
- Feature-first Clean Architecture: generated Riverpod providers form the composition root, view-models own immutable feature state, and widgets depend on repository/use-case contracts.
- Optional browser-side basic PDF validation plus server-side Poppler `pdfinfo`/`pdftotext` extraction, `pdftoppm`/local Tesseract OCR fallback, and the canonical deterministic parsing, rule analysis, approved aliases, contextual evidence classification, scoring, recommendations, verification, and in-memory result trajectory.
- PostgreSQL-backed temporary analysis jobs with encrypted payloads, high-entropy one-way handles, `FOR UPDATE SKIP LOCKED` worker leasing, bounded retries, cleanup, and provider-agnostic SMTP report delivery.
- Eleven seeded job-role definitions and 20 safe synthetic evaluation cases.
- Node.js 22, TypeScript, Fastify and PostgreSQL same-origin routes; no CORS or public API contract.
- Exactly one administrator, initialized from server-side settings, Argon2id hashing, hashed server sessions in PostgreSQL, Secure/HttpOnly/SameSite cookie, expiry, idle timeout, logout and all-session revocation on credential change.
- PostgreSQL migrations with singleton constraint, catalog snapshots, authoring/request/audit/settings schema and RLS enabled.
- One multi-stage root Dockerfile that builds Flutter and Node.js into a single non-root container, plus GHCR commit-SHA CI and health checks.

The implementation is complete for local code verification. GitHub pushes, Coolify configuration, SMTP secrets, backup-retention configuration, live deployment, and production-route verification remain intentionally external/manual actions for this checkout.

This is guidance, not an employer ATS score or a guarantee of an interview or offer.

## Local development

Requirements: Flutter 3.32 / Dart 3.8, Node.js 22, npm 11, and PostgreSQL 16.

```bash
cp .env.example .env
# Edit DATABASE_URL, SESSION_HASH_PEPPER, DATA_ENCRYPTION_KEY, and JOB_HANDLE_PEPPER.
set -a && . ./.env && set +a
npm --prefix api ci
npm --prefix api run db:migrate
npm --prefix api run db:seed
dart pub get
(for package in packages/core_models packages/catalog_models packages/pdf_parser_contract; do (cd "$package" && dart run build_runner build --delete-conflicting-outputs) || exit 1; done)
(dart compile exe packages/server_analysis_runner/bin/server_analysis_runner.dart -o /tmp/ready-my-cv-server_analysis_runner)
(cd apps/web && dart run build_runner build --delete-conflicting-outputs)
(cd apps/web && flutter run -d chrome)
```

Run the API separately with `npm --prefix api run dev`. The Flutter app uses same-origin `/app/*` routes when served by the Node process. For an integrated production-style build, use the root Dockerfile.

The empty-database seed uses the configured initial username and password only once. The password is required as a Coolify secret, stored as Argon2id, and the admin is forced to change it on first sign-in. Never commit the deployment `.env` file. The integrated image supplies Poppler and English Tesseract data; local API runs need those executables on `PATH`.

## Verification

```bash
npm --prefix api run typecheck
npm --prefix api test
(cd apps/web && flutter analyze)
(cd apps/web && flutter test)
(cd apps/web && flutter build web --release --no-source-maps)
dart format --set-exit-if-changed apps/web packages evaluation/bin
dart run evaluation/bin/run_baseline.dart
dart run evaluation/bin/run_agents.dart
dart run evaluation/bin/compare_results.dart
docker build -t ready-my-cv:local .
```

The generated evaluation output records 20 cases, 100 gold-labelled requirements, trajectories, repeat-run consistency, evidence traceability, runtime, failures, and a fair exact-term baseline. It is evidence for the deterministic engine only; it does not establish the truth of a CV claim.

The backend accepts one multipart PDF only at `/app/analysis-jobs`; all related routes are same-origin application routes and are not a public API. The fast path returns a verified in-memory result within `FAST_PATH_TIMEOUT_MS`. Slower jobs remain temporary for at most `JOB_TTL_MINUTES`, then request an email only after `awaiting_email`. Successful email delivery and terminal failures purge job data immediately. The recipient’s email provider may retain a delivered report.

## Deployment

Create one Coolify project containing the root-Dockerfile application and one private PostgreSQL resource. Configure `cv.uxi.asia`, HTTPS, all `.env.example` values as secrets, including SMTP and encryption/handle secrets, run the compiled migration and seed commands during initialization, and use `/health/ready` as the readiness check. PostgreSQL port 5432 must not be public. Coolify builds this repository directly from `main` after the GitHub push webhook is accepted; keep the same GitHub webhook secret in both Coolify and repository settings. The GHCR workflow is a CI artifact publisher, not a second deployment path. See [the deployment runbook](docs/coolify-deployment.md) and [the operations guide](docs/postgresql-node-operations.md).

The application is MIT licensed. Poppler utilities are GPL-2.0-or-later and Tesseract is Apache-2.0 with Leptonica under BSD-2-Clause; the runtime intentionally does not add Ghostscript because its official distribution is AGPL. Flutter/Dart packages and Node dependencies use compatible permissive licenses. Review the lockfiles and bundled dependency notices in automated license checks before each release.
