# Local development

Copy `.env.example` to `.env`, provide a local PostgreSQL URL, a 32+ character session pepper, a 32-byte `DATA_ENCRYPTION_KEY`, and a separate 32+ character `JOB_HANDLE_PEPPER`, then run the migration and idempotent seed commands. The seed creates the singleton administrator only when absent; it does not overwrite a changed account. For queued email tests, provide the SMTP variables; CAPTCHA is disabled unless both CAPTCHA settings are present.

Run the Flutter app with Chrome and the API with `npm --prefix api run dev`. For a same-origin production-style check, build the root image and run it with the database variables supplied at runtime. Never place production credentials, password hashes, or a PDF in the repository.

The browser checks extension, MIME hint, size, emptiness, and `%PDF-` magic bytes, then uploads only after consent. Complete extraction and scoring run on the backend. Local API runs require `pdfinfo`, `pdftotext`, `pdftoppm`, and Tesseract with English data on `PATH`; the integrated Docker image installs them. The adapter and cancellation path zero the active byte buffer; reset/route disposal clears the ephemeral handle and result state.
