# Modification Request: Backend PDF Processing, Queue Management, and Email Report Delivery

Modify the existing Ready My CV project described in `CV_Role_Readiness_Platform_Complete_Codex_Implementation_Prompt.md`.

Do not rebuild the project from scratch. Preserve the existing architecture and unrelated functionality, including:

* Ready My CV branding.
* One Flutter Web application.
* PostgreSQL database.
* Node.js/TypeScript backend.
* One administrator account.
* Username/password admin login at `/admin`.
* Default administrator credentials: `rameshwx` / `rameshwx`.
* Admin credential changes through `/admin/account`.
* `https://cv.uxi.asia`.
* One root `Dockerfile`.
* One Coolify project.
* No public or third-party API.
* Deterministic software agents without an LLM.

This modification supersedes the existing local-only PDF-processing and no-upload requirements.

## 1. Replace local-only PDF processing

The current browser-only PDF processing fails for many real-world PDF files. Change the system so PDF files can be securely uploaded to the backend for processing.

The browser may perform basic validation before upload, such as:

* File extension and MIME type.
* Maximum file size.
* Empty-file detection.
* User consent confirmation.

However, the browser must no longer be responsible for complete PDF extraction or analysis.

Add a clear consent message before upload:

> To support more PDF formats, your CV will be temporarily uploaded to our secure server for processing. The uploaded file, extracted text, analysis report, and any email address you provide will be deleted after processing and report delivery. We do not use your CV for training, advertising, or other purposes.

The visitor must explicitly accept this notice before uploading.

## 2. Backend upload route

Add a same-origin internal application route:

```text
POST /app/analysis-jobs
```

This is an internal route for the Ready My CV application. It is not a public API and must not be documented or exposed for third-party clients.

The route must:

* Accept exactly one PDF file.
* Allow multipart upload only for this specific route.
* Reject additional files and unknown multipart fields.
* Validate the PDF magic bytes, not only the file extension.
* Enforce strict file-size and request-size limits.
* Reject malformed, corrupt, encrypted, or unsafe files safely.
* Never store the original filename.
* Never log the uploaded file, filename, PDF hash, extracted text, or request body.
* Apply IP-based and request-based rate limiting without permanently storing the raw IP address.
* Require CAPTCHA or equivalent abuse prevention for public submissions.
* Return a high-entropy temporary job handle, never a sequential database ID.

Add these related internal routes:

```text
GET /app/analysis-jobs/:handle/status
POST /app/analysis-jobs/:handle/email
POST /app/analysis-jobs/:handle/cancel
```

The job handle must expire, be non-guessable, and be stored only as a one-way hash in PostgreSQL. It is a temporary job reference and must not be used as administrator authentication.

## 3. Server-side PDF processing

Move the complete PDF-processing pipeline to the backend.

The Node.js application must process uploaded files using a robust server-side pipeline that supports:

* Normal text-based PDFs.
* PDFs with unusual text encoding.
* Multi-column layouts.
* PDFs with embedded fonts.
* Image-only or scanned PDFs where technically feasible.
* OCR fallback for image-only documents if a suitable local OCR tool can be safely included.
* Corrupt, password-protected, encrypted, malformed, or unsupported PDFs.
* Page-level text and source-span mapping where available.
* Secure temporary processing files when required.

Use locally installed, well-maintained tools and verify dependency licenses. Do not send PDFs or extracted text to an external AI service, external OCR API, analytics provider, advertising provider, or unrelated third party.

The server must never process CVs by calling an LLM.

All temporary files must:

* Be stored only in a private application-controlled location.
* Have restrictive permissions.
* Use generated internal names rather than the original filename.
* Be removed after processing.
* Be removed during startup cleanup and scheduled cleanup if the process crashes.

## 4. Run the agents on the backend

The seven deterministic agents must execute on the backend after successful upload:

1. CV Parser Agent.
2. Requirement Analysis Agent.
3. Skill Normalization Agent.
4. Evidence Investigation Agent.
5. Scoring Agent.
6. Recommendation Agent.
7. Verification Agent.

The backend must become the authoritative execution location for uploaded-document analysis.

Do not create two separate scoring implementations that can produce different results. Reuse or migrate the current agent and scoring logic so the same rules, catalog version, engine version, evidence classifications, score formulas, and verification rules are used consistently.

If the existing Dart agent engine cannot run reliably inside the Node.js backend, port it to a strongly typed TypeScript implementation and update the Flutter and evaluation layers to consume the same contracts and expected outputs. Keep the implementation deterministic and thoroughly tested.

The backend must never accept a client-provided score, evidence classification, recommendation, trajectory, or catalog version.

## 5. Add fast-path and queued processing

Implement a two-mode processing workflow.

### Fast path

After upload:

1. Create a temporary analysis job.
2. Process the PDF on the backend.
3. Run all seven agents.
4. Verify the result.
5. Return the verified report to the browser if processing completes within a configurable threshold.
6. Display the report in memory only.
7. Immediately delete all job data from PostgreSQL and temporary storage.

The default threshold may be approximately 45–60 seconds but must be configurable.

### Queued path

If processing exceeds the configured threshold, the application must move the job to a PostgreSQL-backed processing queue.

Do not add Redis or another required infrastructure service unless there is a strong technical reason. The default queue implementation should use PostgreSQL row locking, leasing, retries, and `FOR UPDATE SKIP LOCKED`.

The Node.js application should run a controlled background worker in the same application container. The worker must support:

* `queued`.
* `processing`.
* `awaiting_email`.
* `email_pending`.
* `email_sending`.
* `completed`.
* `failed`.
* `expired`.
* `cancelled`.

The worker must include:

* Bounded concurrency.
* Lease expiration.
* Crash recovery.
* Maximum retry attempts.
* Exponential backoff.
* Graceful shutdown.
* Startup recovery of abandoned jobs.
* Queue age and failure monitoring.
* Automatic expiry and cleanup.

The administrator dashboard may show aggregate queue health, counts, processing time, and failure totals, but must never show CV files, extracted text, reports, email addresses, or visitor-level job details.

## 6. Ask for email only when needed

Do not request an email address for fast processing unless the user voluntarily provides one.

When the analysis is taking longer than the configured threshold, update the Flutter UI with a message such as:

> This analysis is taking longer than usual. Enter your email address and we will send your completed report when it is ready.

Add an email field with:

* Syntax validation.
* Reasonable length limits.
* Clear consent that the report will be sent by email.
* No marketing opt-in by default.
* No account creation.
* No email address stored in browser persistence.

The email route must accept only the validated email address for the matching temporary job handle. Store the email encrypted at the application layer while the job is active.

If the user declines to provide an email address, allow them to cancel the job and immediately delete all related data. If they take no action, automatically expire and purge the job after a short configurable period.

## 7. Email the completed report

Configure the Node.js application to send reports through provider-agnostic SMTP using secrets stored only in Coolify.

Add documented environment variables such as:

```text
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
EMAIL_FROM
EMAIL_REPLY_TO
PUBLIC_ORIGIN
```

Use a maintained Node.js mail library such as Nodemailer or an equivalent.

When a queued analysis is complete:

1. Run final verification.
2. Generate a sanitized HTML and plain-text report.
3. Send the report to the user-provided email address.
4. Do not include the original CV as an attachment.
5. Do not include raw server logs, internal IDs, database details, or secrets.
6. Do not create a permanent report URL.
7. Delete the report, extracted text, PDF, email address, queue record, temporary files, and all other job-specific data after successful delivery.

The email must clearly state that the report was generated by Ready My CV and is guidance rather than an employer ATS score.

Implement bounded email retries for temporary SMTP failures. Do not send duplicate reports after a successful delivery. If delivery permanently fails, delete the job data after the retry policy and expose only a safe generic failure message.

Document that once an email is delivered, the recipient’s email provider may retain the message outside the control of Ready My CV.

## 8. Temporary PostgreSQL storage

Add a temporary analysis-job schema. It may contain a table such as:

```text
analysis_jobs
```

The table may temporarily hold encrypted versions of:

* PDF bytes.
* Extracted text.
* Generated report data.
* User email address.
* Queue state and retry metadata.

Do not store any of these fields in plaintext.

The table must include:

* Non-sequential job ID.
* One-way job-handle hash.
* Status.
* Encrypted payload fields.
* Created timestamp.
* Updated timestamp.
* Expiry timestamp.
* Processing lease timestamp.
* Attempt count.
* Email delivery attempt count.
* Safe non-sensitive error code.

Do not store:

* Original filename.
* Raw IP address.
* Document hash or fingerprint.
* CV text in logs.
* CV text in audit records.
* Individual reports in permanent history.
* Visitor accounts.
* Visitor analysis history.

Use PostgreSQL Row-Level Security and ensure only the backend worker and authorized application code can access active job records.

Implement application-level encryption using a secret such as `DATA_ENCRYPTION_KEY`, stored only in Coolify. Never place encryption keys in Flutter, GitHub, the Docker image, or the repository.

## 9. Secure deletion

Create a single, tested purge operation that deletes:

* Encrypted PDF bytes.
* Extracted text.
* Generated report.
* Email address.
* Job handle hash.
* Queue metadata.
* Retry metadata.
* Temporary processing files.
* In-memory document and agent state where possible.

Run the purge:

* Immediately after a fast-path result is delivered.
* Immediately after an email is successfully sent.
* When the user cancels.
* When a job expires.
* After permanent processing or email failure.
* During scheduled cleanup.
* During application startup recovery.

Do not retain individual job records merely for analytics or debugging.

Use only anonymous aggregate metrics that cannot be linked to a visitor, CV, email address, or job.

Review PostgreSQL backup and retention settings. Do not claim that data has been erased from historical backups unless that is technically verified. Configure the shortest practical backup retention for transient analysis data and document the deletion and backup limitations accurately.

## 10. Flutter UI changes

Update the single Flutter application:

* Replace “your CV is never uploaded” messaging.
* Add upload consent before submission.
* Add “Uploading securely” progress.
* Add “Queued”, “Processing”, “Preparing report”, “Sending email”, “Complete”, “Expired”, and “Failed” states.
* Add polling with cancellation and timeout handling.
* Add the delayed-email form.
* Never persist the job handle, CV, report, or email in `localStorage`, IndexedDB, URL parameters, or browser history.
* Display fast-path results only in memory.
* Do not expose queued reports through a permanent URL.
* Clear all client-side state after completion, cancellation, expiry, logout, or route exit.
* Keep the existing score, evidence, recommendations, trajectory, and disclaimer UI.
* Clearly tell the user when their report has been emailed and temporary processing data has been deleted.

The existing local PDF.js adapter may be retained only for optional basic client-side validation. It must not be required for complete extraction or scoring.

## 11. Privacy and security updates

Update the privacy policy, security model, architecture diagram, README, and reproduction guide to reflect temporary backend processing.

The new privacy promise must accurately state:

* PDFs are uploaded only after user consent.
* Processing is temporary.
* PDFs, extracted text, reports, and queued email addresses are deleted after completion or expiry.
* CV content is not used for training, advertising, analytics, or unrelated purposes.
* The email provider may retain the delivered report.
* No visitor account or permanent analysis history exists.
* No public API is provided.

Add protections for:

* MIME spoofing.
* Malformed PDFs.
* Zip bombs or decompression attacks.
* Path traversal.
* Oversized pages or excessive PDF complexity.
* OCR resource exhaustion.
* Request flooding.
* Queue flooding.
* Email abuse.
* SMTP header injection.
* HTML email injection.
* Sensitive error messages.
* Duplicate email delivery.
* Worker crashes and abandoned jobs.

Continue redacting passwords, cookies, authorization headers, emails, PDF content, extracted text, reports, and job payloads from logs.

## 12. Docker and Coolify changes

Preserve the single root `Dockerfile` and one Coolify project.

Update the Dockerfile so the one application image contains:

* Flutter Web assets.
* Node.js/TypeScript backend.
* Backend analysis dependencies.
* Required local PDF parsing tools.
* Required OCR dependencies, if OCR is implemented.
* Queue worker code.
* Email delivery code.

Do not create separate public, admin, API, worker, queue, OCR, or mail containers.

The same Node.js process may serve the Flutter application, same-origin routes, health endpoints, and background queue worker.

Add health checks for:

* Application liveness.
* PostgreSQL readiness.
* Queue-worker availability.
* SMTP configuration availability without exposing credentials.
* Cleanup-worker status.

## 13. Required tests

Add and pass tests for:

* Consent-required upload.
* Valid PDF upload.
* MIME spoofing.
* Oversized and malformed files.
* Text-based PDF extraction.
* Scanned/image-only PDF OCR fallback.
* Password-protected PDF handling.
* Server-side agent execution.
* Deterministic repeat runs.
* Fast-path completion and immediate deletion.
* Queued processing.
* Queue retry and lease recovery.
* Worker restart recovery.
* Delayed email collection.
* Invalid email handling.
* Successful email delivery.
* SMTP retry behavior.
* Duplicate-email prevention.
* Permanent email failure cleanup.
* Job cancellation.
* Job expiration.
* Complete PostgreSQL deletion.
* Temporary-file deletion.
* No sensitive data in logs.
* No CV data in URLs, analytics, cookies, or third-party requests.
* No visitor-level data in the admin dashboard.
* No permanent report URL.
* No public API documentation or CORS API.
* Existing administrator login and credential-change behavior.
* One root Dockerfile and one Coolify application deployment.

Update the evaluation harness so the agents can be tested against server-side processing without using private CVs. Include synthetic cases for text PDFs, scanned PDFs, malformed PDFs, slow jobs, queue retries, email delivery, and cleanup.

## 14. Completion criteria

Do not mark this modification complete until:

* Real PDFs can be uploaded with explicit consent.
* The backend can process PDFs that previously failed in the browser.
* The seven deterministic agents execute server-side.
* Fast jobs return verified results in the browser.
* Slow jobs enter the PostgreSQL-backed queue.
* The application asks for an email only when delayed delivery is required.
* Completed queued reports are emailed successfully.
* Job-specific PDF, text, report, email, queue, and temporary-file data is deleted after completion.
* Cleanup also works after cancellation, expiry, failure, and worker restart.
* The administrator sees only aggregate queue health.
* No CV content appears in logs, analytics, browser persistence, permanent URLs, or unrelated services.
* The existing single Flutter app, PostgreSQL database, Node.js backend, one Dockerfile, one Coolify project, domain, and single-admin authentication remain intact.
* Documentation accurately describes temporary backend processing and email-provider retention.
* All relevant unit, integration, privacy, security, queue, email, deletion, and end-to-end tests pass.

At the end, report precisely:

1. Which local-only requirements were replaced.
2. Which backend PDF and OCR tools were selected.
3. How the queue works.
4. How long temporary data is retained in every state.
5. How email delivery and retries work.
6. How deletion was verified.
7. Which tests passed.
8. Any remaining deployment, SMTP, OCR, or privacy limitations.
