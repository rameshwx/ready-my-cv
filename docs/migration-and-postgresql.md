# Migration and PostgreSQL notes

`api/migrations/001_initial.sql` creates the singleton administrator, hashed sessions, normalized catalog authoring tables, immutable catalog snapshots, role requests, aggregate metrics, audit logs, and settings. `002_analysis_jobs.sql` adds only temporary `analysis_jobs` rows with application-encrypted PDF/document/report/email payloads, a UUID job ID, one-way handle hash, queue lease/retry metadata, expiry, safe error code, and RLS policies. It does not add filenames, raw IPs, document hashes, plaintext CV text, permanent reports, visitor accounts, or visitor history.

The migration enables and forces RLS on every application table. The application sets the transaction-local admin authorization context only after validating a current session. Failed account changes run in a transaction and roll back both credential and audit changes.

The worker uses `FOR UPDATE SKIP LOCKED` to claim at most two jobs by default. Fast completion, successful email, cancellation, expiry, and permanent failure use the same purge operation. Queued/processing/email-pending states have a 15-minute default maximum; temporary retry backoff is bounded by that expiry. Backups may retain encrypted historical pages until the configured backup retention expires; the application cannot claim deletion from already-created backups.

Future migrations must be append-only, reviewed against the non-owner runtime role, and tested on a disposable PostgreSQL instance before release. Do not edit an applied migration in production.
