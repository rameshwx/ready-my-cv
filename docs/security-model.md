# Security model

The singleton database constraint is `id = 1`; there is no registration or account list. Passwords use Argon2id. Sessions have absolute and idle expiry, are checked on every protected request, and are revoked on logout or any credential change. State-changing requests enforce strict production Origin checks. Fastify applies CSP and standard security headers, redacts cookie/authorization headers, limits bodies and rate-limits login and public requests.

Production requires a unique 32+ character `SESSION_HASH_PEPPER`, private PostgreSQL credentials and HTTPS. Rotate the default credentials immediately through `/admin`.
