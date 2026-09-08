# Privacy model

PDF bytes are uploaded only after the visitor accepts the exact temporary-processing notice. The browser performs basic validation, then sends one PDF to the same-origin `/app/analysis-jobs` route. The server uses generated filenames, private mode-0600 temporary files, encrypted temporary PostgreSQL payloads, Poppler, local English Tesseract OCR, and the canonical deterministic Dart engine. Job data is purged after fast completion, successful email, cancellation, expiry, or permanent failure; bounded retry data is retained only until the retry or expiry limit.

Raw filenames, IP addresses, document hashes, CV text, reports, and email addresses are absent from logs, analytics, URLs, cookies, browser persistence, and admin views. The browser never stores the handle, PDF, report, or email in localStorage, IndexedDB, or history. The recipient’s email provider may retain a delivered report, and PostgreSQL backups may retain encrypted historical pages until their configured retention expires.

Public role requests and PDF uploads require Google reCAPTCHA v2 verification. Only the public site key is sent to the browser; the server-only secret and short-lived verification token are not stored or logged. Identical normalized role requests are acknowledged without a second row for 15 minutes.

The server rejects undefined routes, unknown multipart fields, extra files, spoofed MIME types, malformed/encrypted PDFs, oversized files/pages, and bodies over the configured upload request limit. There is no CORS plugin or public API documentation.

Administrator cookies contain only random session material and are HttpOnly, SameSite Strict and Secure in production. Database session rows contain only peppered SHA-256 hashes.
