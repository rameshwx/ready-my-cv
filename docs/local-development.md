# Local development

Copy `.env.example` to `.env`, provide a local PostgreSQL URL and a 32+ character session pepper, then run the migration and idempotent seed commands. The seed creates the singleton administrator only when absent; it does not overwrite a changed account.

Run the Flutter app with Chrome and the API with `npm --prefix api run dev`. For a same-origin production-style check, build the root image and run it with the database variables supplied at runtime. Never place production credentials, password hashes, or a PDF in the repository.

The browser uses local `web/pdf_parser.js` and PDF.js assets. The parser rejects oversized, protected, corrupt, empty, image-only, and over-page-limit input. Its adapter zeroes the input byte buffer in `finally`; reset and cancellation also clear the in-memory workflow state.
