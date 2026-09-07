# Coolify deployment

1. Create one project, one Dockerfile application and one PostgreSQL 16 resource.
2. Connect this repository and build the root `Dockerfile`; expose only internal port 8080.
3. Add all `.env.example` values as Coolify environment values/secrets. Use a generated pepper and database password.
4. Run migrations before traffic. Run the idempotent seed only for initialization; it never overwrites the singleton account.
5. Attach `cv.uxi.asia`, enable managed HTTPS and HTTP→HTTPS redirect, and configure `/health/ready`.
6. Keep PostgreSQL private and enable Coolify backups. Smoke-test `/`, `/admin`, `/app/catalog`, `/health/live`, and `/health/ready`.

The GitHub build publishes `ghcr.io/rameshwx/ready-my-cv:<commit-sha>`. Deploy immutable SHA tags, not `latest`.
