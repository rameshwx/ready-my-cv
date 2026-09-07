# Privacy and security checklist

- CV bytes, file names, extracted text, evidence spans, scores, recommendations, and visitor trajectories never leave browser memory.
- No CV upload, parse, extraction, score, result persistence, analytics payload, or download route exists.
- PDF.js is served locally and uses `dart:js_interop`; there is no dependency on remote parser code.
- Administrator authentication uses one Argon2id hash and a server-side session cookie. There are no JWTs, bearer tokens, refresh tokens, registration, or multi-admin routes.
- Mutating requests require same-origin Origin/Referer and JSON content type. Schemas are strict and reject unknown/file-like fields.
- Rate limits cover login by IP plus normalized username, role requests, aggregate events, and the general application boundary.
- Session expiry, logout, credential rotation, and credential-change all-session revocation are server enforced.

Manual release checks still required: inspect the deployed browser network panel for synthetic markers, verify public `/` and `/admin` routes, inspect response headers, confirm no public PostgreSQL binding, and confirm the configured Coolify secrets are not exposed in logs.
