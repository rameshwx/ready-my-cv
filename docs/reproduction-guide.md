# Reproduction guide

The checked-in implementation targets Flutter 3.32 / Dart 3.8, Node.js 22, npm 11, PostgreSQL 16, and Docker BuildKit. Pin the exact tool versions in CI or the deployment builder before a release.

## Local checks

```bash
dart pub get
(for package in packages/core_models packages/catalog_models packages/pdf_parser_contract; do (cd "$package" && dart run build_runner build --delete-conflicting-outputs) || exit 1; done)
(dart compile exe packages/server_analysis_runner/bin/server_analysis_runner.dart -o /tmp/ready-my-cv-server_analysis_runner)
(cd apps/web && dart run build_runner build --delete-conflicting-outputs)
dart format --set-exit-if-changed apps/web packages evaluation/bin
(cd apps/web && flutter analyze)
(cd apps/web && flutter test)
npm --prefix api ci
npm --prefix api run typecheck
npm --prefix api test
dart run evaluation/bin/run_baseline.dart
dart run evaluation/bin/run_agents.dart
dart run evaluation/bin/compare_results.dart
docker build -t ready-my-cv:local .
```

Database checks require a private PostgreSQL 16 instance and the variables in `.env.example`; run migrations and seed only against a disposable local database first. Verify `002_analysis_jobs.sql` RLS, encrypted bytea payloads, handle hashing, queue leases, terminal purge, expiry, and aggregate-only admin queries. Browser checks require Chrome and exercise consent, basic PDF validation, same-origin multipart upload, polling transitions, delayed email, cancellation, route exit cleanup, accessibility semantics, and absence of browser persistence/third-party CV requests.

Generated Freezed/Riverpod files are produced by `build_runner`; they are not hand-edited. The root Dockerfile repeats generation, compiles the private Dart runner, installs Poppler/Tesseract, and builds the single image so a clean checkout is reproducible.
