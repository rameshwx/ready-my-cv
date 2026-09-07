# Migration and PostgreSQL notes

`api/migrations/001_initial.sql` creates the singleton administrator, hashed sessions, normalized catalog authoring tables, immutable catalog snapshots, role requests, aggregate metrics, audit logs, and settings. It intentionally has no CV, visitor-result, file, or visitor-history table.

The migration enables and forces RLS on every application table. The application sets the transaction-local admin authorization context only after validating a current session. Failed account changes run in a transaction and roll back both credential and audit changes.

Future migrations must be append-only, reviewed against the non-owner runtime role, and tested on a disposable PostgreSQL instance before release. Do not edit an applied migration in production.
