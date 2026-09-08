# Coolify deployment

1. Create one project, one Dockerfile application and one PostgreSQL 16 resource.
2. Connect this repository and build the root `Dockerfile`; expose only internal port 8080.
3. Add all `.env.example` values as Coolify environment values/secrets. Generate separate `SESSION_HASH_PEPPER`, `JOB_HANDLE_PEPPER`, and `DATA_ENCRYPTION_KEY`; configure the supplied Google reCAPTCHA v2 site key as `CAPTCHA_SITE_KEY` and the secret as the server-only `CAPTCHA_SECRET`; keep `CAPTCHA_VERIFY_URL` set to Google’s `siteverify` endpoint; add SMTP values for production report delivery. Do not commit the CAPTCHA secret or place it in the Flutter bundle.
4. Run migrations before traffic with a separate migration-owner database credential, then run the idempotent seed only for initialization; it never overwrites the singleton account. The application runtime must use a non-owner role and `DATABASE_APP_ROLE` only after that role is provisioned.
5. Attach `cv.uxi.asia`, enable managed HTTPS and HTTP→HTTPS redirect, and configure `/health/ready`.
6. Keep PostgreSQL private and enable Coolify backups. Smoke-test `/`, `/admin`, `/app/catalog`, `/health/live`, `/health/ready`, and the consent-gated upload/status/email/cancel flow with a synthetic PDF. Confirm Poppler/Tesseract are present and no report URL, CV data, or secret appears in logs.

The GitHub build publishes `ghcr.io/rameshwx/ready-my-cv:<commit-sha>`. Deploy immutable SHA tags, not `latest`, only if Coolify is explicitly switched to image deployment; the current source-based Coolify path remains the deployment model. This checkout does not perform or claim a live Coolify deployment. Configure backup retention separately and do not claim that data is removed from historical backups.
