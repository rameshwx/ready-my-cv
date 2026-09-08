# PostgreSQL and Node operations

The Node application is the only database client. It uses parameterized `pg` queries, a versioned migration runner, transactions for account/catalog/analysis mutations, and request-local `app.admin_authenticated`, `app.analysis_request`, and `app.analysis_worker` settings. Every application table has RLS enabled and forced; public policies are limited to catalog/settings reads and role-request/aggregate inserts. Analysis payloads are encrypted with `DATA_ENCRYPTION_KEY` and handles are peppered with the separate server-only `JOB_HANDLE_PEPPER`.

Use a dedicated non-owner runtime database role in deployment. Keep the migration owner separate, grant the runtime role only the required schema/table/sequence/function privileges, and do not publish port 5432. The `lookup_admin_credentials` and `create_admin_session` functions are server-side authentication helpers; no browser route exposes database access.

Operational checks:

- `/health/live` checks process liveness.
- `/health/ready` checks the database connection, worker heartbeat/cleanup state, and production SMTP configuration without returning details.
- Run migrations before the application receives traffic.
- Run the idempotent seed only for first initialization or after an explicitly reviewed catalog migration.
- Back up PostgreSQL through the hosting platform and test restoration separately.
- Inspect Docker bindings as well as firewall rules; a private database must have no public listener.
- Monitor only aggregate analysis queue counts, oldest queued age, active processing age, and failure totals. Never query or expose job payloads, handles, emails, CV-derived fields, or visitor-level records from the admin dashboard.

For a managed deployment, create the runtime role separately from the migration owner, for example `CREATE ROLE ready_my_cv_app NOLOGIN;`, grant it `CONNECT` and `USAGE` plus only the application table/sequence privileges required by the route modules, and grant execute on the two security-definer authentication helpers. Set `DATABASE_APP_ROLE` only after the role exists and test the role against a disposable database. Keep the migration owner credentials out of the application runtime environment.
