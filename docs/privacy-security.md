# Privacy and security checklist

- CV upload requires the exact consent notice and is limited to the same-origin multipart route. PDF, parsed document, report, and email are temporary encrypted job payloads and are purged by the shared terminal cleanup operation.
- No permanent result, visitor account, history, raw filename, IP, document hash, CV text, or public report URL exists. Only anonymous aggregate queue events are retained.
- Poppler `pdfinfo`/`pdftotext` and local English Tesseract OCR are used in the image; the browser PDF.js adapter is compatibility-only and is not used for production extraction or scoring.
- Administrator authentication uses one Argon2id hash and a server-side session cookie. There are no JWTs, bearer tokens, refresh tokens, registration, or multi-admin routes.
- Mutating requests require same-origin Origin/Referer; JSON is required except for multipart on the exact upload route. Schemas and multipart shape are strict and reject unknown fields/files.
- Rate limits cover login by IP plus normalized username, role requests, aggregate events, and the general application boundary.
- Public role requests and PDF uploads require a server-issued English word-math answer. The browser receives only the question; the server stores a peppered hash of a short-lived HttpOnly cookie token and the expected integer answer. The answer and cookie token are not logged, and every attempted answer consumes the prompt.
- Session expiry, logout, credential rotation, and credential-change all-session revocation are server enforced.

Manual release checks still required: inspect the deployed browser network panel for synthetic markers and confirm no persistence, verify public `/`, `/admin`, upload/status/email/cancel and health routes, inspect response headers, confirm no public PostgreSQL binding, run a disposable migration/cleanup test, and confirm configured Coolify secrets are not exposed in logs. Email-provider retention and historical backup retention remain outside the application’s deletion boundary.
