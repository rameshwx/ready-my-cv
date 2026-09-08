
# Codex Implementation Prompt: Ready My CV

Copy this entire prompt into Codex to implement the product.

> Update: `Modification_Request_1.md` supersedes the historical local-only/no-upload requirements in this prompt. Use those statements only to understand the prior baseline; implement the consent-gated temporary backend processing, queue, email, and purge behavior in the modification request.

---

## Role

Act as the lead product engineer, Flutter architect, Node.js API engineer, PostgreSQL engineer, DevOps engineer, security reviewer, and QA engineer for this project. Build the complete product described below. Do not stop at a visual prototype or a scaffold. Implement the working single Flutter Web application, shared domain engine, PostgreSQL database, Node.js backend application, tests, evaluation harness, one-container Docker deployment, CI/CD, documentation, and GitHub repository setup.

Work in small, verifiable increments. After each major phase, run the relevant checks and fix failures before continuing. Do not claim that a feature is complete unless it is implemented, tested, and documented.

If an external credential, PostgreSQL instance, VPS, Coolify project, or GitHub permission is unavailable, continue implementing everything that can be completed locally, leave an explicit configuration placeholder, and report the exact remaining manual action. Never fabricate a successful deployment, repository, migration, or test result.

## Product

Build **Ready My CV**, a free and privacy-first web application that helps a job seeker compare a text-based PDF CV with a selected job role. It produces a deterministic Role Readiness Score from 0 to 100, explains the score through traceable evidence, and provides truthful improvement guidance.

The production site is:

~~~text
https://cv.uxi.asia
~~~

The administrator area is:

~~~text
https://cv.uxi.asia/admin
~~~

The central product insight is:

> A CV should not receive full credit because a keyword appears. It should receive credit only when the CV contains credible, traceable evidence that the applicant used that skill.

This is an applicant guidance tool. It is not an employer applicant-tracking system, does not predict an employer's actual ATS score, does not rank candidates, and does not guarantee an interview or job offer.

The product must work without an LLM, an AI API, or a model server. Optional local server OCR is allowed for scanned pages; no external OCR service is allowed. The agentic behavior must be implemented as a coordinated, deterministic software-agent workflow with explicit state, tools, decisions, verification, retries, and trajectories.

## Non-negotiable requirements

1. Build one Flutter Web application and one web bundle. It contains both the public experience and the protected administrator experience as feature modules in the same application.
2. Use one monorepo with the single Flutter Web application, a Node.js/TypeScript backend application, pure Dart packages, PostgreSQL migrations, tests, evaluation assets, and deployment documentation.
3. Use Clean Architecture with feature-first organization, immutable state, clear domain boundaries, dependency injection, and testable interfaces.
4. Use Riverpod for state management and dependency injection. Use generated providers where appropriate. Do not mix Riverpod with BLoC, GetX, or a second service-locator framework.
5. Use GoRouter for the single route tree, including the protected administrator routes under <code>/admin</code>.
6. Use PostgreSQL as the authoritative database and Node.js LTS with TypeScript as the only backend application boundary. Flutter must never connect directly to PostgreSQL.
7. The browser client and backend communicate only through same-origin application routes used by this product. Do not publish, document, or support a general public API, external API base URL, CORS API, API keys for callers, or public developer contract.
8. Perform only basic extension, MIME, size, empty-file, and magic-byte checks in the browser; complete PDF extraction and analysis run server-side with local tools and the canonical deterministic Dart engine after explicit consent.
9. Temporarily store only encrypted job payloads on the backend, never raw filename/IP/document hash/CV text in logs or analytics, and purge PDF, document, report, email, and queue metadata after terminal processing. Do not expose permanent reports, visitor accounts, or history.
10. Do not create any upload-CV, parse-CV, extract-PDF, score-CV, save-result, or download-CV backend route.
11. Do not create public accounts, visitor registration, public login, subscriptions, pricing, paywalls, premium features, or feature limits.
12. The only authenticated product area is the administrator portal at <code>https://cv.uxi.asia/admin</code>.
13. There is exactly one administrator account. Do not build administrator registration, administrator invitations, administrator deletion, administrator lists, multi-tenant identity, or administrator roles.
14. The initial administrator username is <code>rameshwx</code> and the initial administrator password is <code>rameshwx</code>. Store only an Argon2id password hash. After login, the administrator must be able to change both username and password from the admin panel.
15. Use a normal username-and-password login form. Do not use JWT login, bearer access tokens, refresh tokens, personal access tokens, bootstrap tokens, magic links, or token-based administrator login. Use a server-side session with a Secure, HttpOnly, SameSite cookie after successful password authentication.
16. Invalidate active administrator sessions after logout, password change, username change, administrator deactivation, or explicit session revocation.
17. Use Docker with one root <code>Dockerfile</code> for the complete web application and one Coolify project. The Dockerfile must build the Flutter Web bundle and Node.js application and run them together as one deployable application container.
18. Use the PostgreSQL resource provided by the same Coolify project for persistent data. Do not embed PostgreSQL in the application container, expose its port publicly, or create a second Coolify project.
19. Use GitHub Actions for CI/CD and GitHub Container Registry for one immutable application image tagged with the commit SHA.
20. Include at least 20 safe synthetic evaluation cases with gold labels, a fair keyword baseline, final-agent results, trajectories, metrics, and an improvement changelog.
21. All final results must pass deterministic verification before the UI displays them as complete.

## Repository requirement

Create and maintain this public repository:

~~~text
https://github.com/rameshwx/cv-role-readiness
~~~

Repository rules:

- First check whether <code>rameshwx/cv-role-readiness</code> already exists.
- If it does not exist, create it as a public repository with the GitHub CLI or the available GitHub integration.
- If it already exists, use it and preserve unrelated existing work. Do not delete or force-reset the repository.
- Set the local repository remote to the exact repository URL.
- Commit the implementation in logical commits and push the default branch.
- Confirm that the repository is public and that the pushed commit is visible remotely.
- Do not commit secrets, <code>.env</code> files, database passwords, session secrets, password hashes generated for production, SSH keys, or production credentials.
- If GitHub authentication is unavailable, finish the local implementation and report the exact authentication action required. Do not claim the repository was created.

Suggested initial repository metadata:

- Name: <code>cv-role-readiness</code>
- Visibility: public
- Description: <code>Ready My CV: privacy-first deterministic CV role-readiness analysis with auditable software agents</code>
- Default branch: <code>main</code>
- License: choose a permissive license only after checking the licenses of all included dependencies; document the choice in <code>LICENSE</code> and <code>README.md</code>.

## Approved technology stack

| Layer | Technology |
| --- | --- |
| Web application | One Flutter Web and Dart application containing public and administrator features |
| Architecture | Clean Architecture, feature-first, immutable state |
| State and DI | Riverpod, preferably with <code>riverpod_generator</code> where stable |
| Navigation | GoRouter with one protected route tree |
| Immutable models | Freezed and JSON serialization, or an equally strongly typed approach |
| Design system | Shared Flutter package using Material 3 and custom theme tokens |
| PDF extraction | Poppler utilities and local Tesseract in the application image; PDF.js remains a compatibility-only client contract |
| Shared business logic | Pure Dart packages with no Flutter or browser dependency where possible |
| Agent workflow | Deterministic typed Dart workflow engine |
| Backend application | Node.js LTS, TypeScript, Fastify, and typed same-origin application route modules |
| Database | PostgreSQL |
| Database access | <code>pg</code>/node-postgres with parameterized SQL, transactions, and a versioned migration runner |
| Administrator authentication | Username/password authentication with Argon2id password hashes and server-side sessions in PostgreSQL |
| Browser session transport | Secure, HttpOnly, SameSite administrator session cookie; no JWT, bearer token, or refresh-token flow |
| Backend boundary | Internal same-origin application routes only; no public or third-party API |
| Authorization | Valid current server-side administrator session plus PostgreSQL Row-Level Security defense in depth |
| Migrations | Versioned SQL migrations executed by a Node.js migration command |
| Local development | Docker, PostgreSQL, Node.js, Flutter, and the project package manager |
| Production deployment | One application container built from the root <code>Dockerfile</code> in one Coolify project |
| Container registry | GitHub Container Registry with one commit-SHA image |
| CI/CD | GitHub Actions and one Coolify deployment webhook or image deployment |
| HTTPS/DNS | Coolify-managed HTTPS for <code>cv.uxi.asia</code>, with Cloudflare DNS |
| Monitoring | Existing VPS monitoring such as Uptime Kuma plus application health endpoints |
| LLM | None |

Use current stable versions that are mutually compatible at implementation time. Record the selected Flutter, Dart, Node.js, npm/pnpm, PostgreSQL, Docker, Coolify, and browser versions in the reproduction guide. Do not introduce a dependency merely because it is popular. Every dependency must have a clear purpose, a compatible license, and automated checks where practical.

## Architecture

~~~mermaid
flowchart TD
    Browser[Browser at cv.uxi.asia] --> Flutter[Single Flutter Web application]
    Flutter --> Consent[Exact consent and basic PDF validation]
    Consent --> Node[Node.js upload and queue worker]
    Node --> Parser[Poppler and local Tesseract]
    Parser --> Runner[Private compiled Dart agent runner]
    Runner --> Memory[In-memory fast result or sanitized email report]
    Flutter --> Internal[Same-origin internal application routes]
    Internal --> Node
    Node --> PostgreSQL[(PostgreSQL in the same Coolify project)]
    Admin[/admin route/] --> Session[Server-side administrator session cookie]
    Session --> Node
~~~

The public and administrator experiences are features of the same Flutter Web bundle. The Node.js application serves that bundle and handles only the internal same-origin application routes needed for the catalog, role requests, aggregate events, temporary analysis jobs, administrator session, catalog management, settings, and health checks.

After consent, the PDF may flow to the Node.js application and private PostgreSQL only as encrypted temporary job data; Poppler/Tesseract and the compiled Dart runner never send content to external services. CV data must never flow to logs, analytics, ad providers, PayPal, browser storage, service-worker caches, URLs, or unrelated third parties. Backup retention limitations must be documented accurately.

There is no separately exposed public API. A browser route such as <code>/app/catalog</code> is an implementation detail of the same-origin application and must not be treated as an external API, accept cross-origin access, or expose a reusable API contract.

## Monorepo structure

Create a maintainable monorepo similar to this. Adjust names only when there is a strong technical reason, and document any change.

~~~text
cv-role-readiness/
├── apps/
│   └── web/
│       ├── lib/
│       │   ├── app/
│       │   │   ├── bootstrap/
│       │   │   ├── router/
│       │   │   ├── theme/
│       │   │   └── app.dart
│       │   ├── core/
│       │   │   ├── config/
│       │   │   ├── errors/
│       │   │   ├── localization/
│       │   │   ├── logging/
│       │   │   ├── network/
│       │   │   └── providers/
│       │   └── features/
│       │       ├── landing/
│       │       ├── scan/
│       │       ├── results/
│       │       ├── role_request/
│       │       ├── privacy/
│       │       ├── terms/
│       │       └── admin/
│       │           ├── authentication/
│       │           ├── dashboard/
│       │           ├── roles/
│       │           ├── rule_versions/
│       │           ├── catalog_publication/
│       │           ├── role_requests/
│       │           ├── audit_logs/
│       │           ├── account/
│       │           └── settings/
│       ├── test/
│       └── web/
├── packages/
│   ├── core_models/
│   ├── catalog_models/
│   ├── scoring_engine/
│   ├── agent_engine/
│   ├── pdf_parser_contract/
│   ├── validation/
│   ├── design_system/
│   └── test_fixtures/
├── evaluation/
│   ├── bin/
│   ├── lib/
│   ├── datasets/
│   ├── baseline_runner/
│   ├── agent_runner/
│   ├── compare_results/
│   └── output/
├── api/
│   ├── src/
│   │   ├── config/
│   │   ├── db/
│   │   │   ├── pool.ts
│   │   │   ├── queries/
│   │   │   └── transactions.ts
│   │   ├── modules/
│   │   │   ├── authentication/
│   │   │   ├── catalog/
│   │   │   ├── roles/
│   │   │   ├── role_requests/
│   │   │   ├── metrics/
│   │   │   ├── audit/
│   │   │   ├── account/
│   │   │   └── settings/
│   │   ├── plugins/
│   │   ├── routes/
│   │   ├── shared/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── migrations/
│   ├── seeds/
│   ├── test/
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── infrastructure/
│   ├── scripts/
│   │   ├── health-check.sh
│   │   └── rollback-notes.sh
│   └── coolify/
│       └── deployment.md
├── docs/
│   ├── architecture.md
│   ├── local-development.md
│   ├── reproduction-guide.md
│   ├── privacy-model.md
│   ├── security-model.md
│   ├── postgresql-node-operations.md
│   ├── coolify-deployment.md
│   ├── evaluation-methodology.md
│   ├── improvement-changelog.md
│   ├── agent-trajectories/
│   └── decisions/
├── .github/
│   └── workflows/
│       ├── pull-request.yml
│       ├── build.yml
│       └── deploy.yml
├── Dockerfile
├── .dockerignore
├── README.md
├── LICENSE
├── melos.yaml or pub workspace configuration
└── analysis_options.yaml
~~~

Do not create <code>public_web</code> and <code>admin_web</code> applications, separate frontend Dockerfiles, an API Dockerfile, a reverse-proxy container, Docker Compose files, or a second Coolify application for this project.


## Flutter architecture rules

Apply these rules to the single Flutter application and every shared package.

### Layers

- Presentation: widgets, screens, routing, UI state rendering, accessibility, and user interaction only.
- Application: Riverpod notifiers/controllers, workflow coordination, commands, and use cases.
- Domain: entities, value objects, repository contracts, policies, scoring, agents, and domain errors.
- Data: Node.js same-origin application data sources, DTOs, mappers, PDF.js adapter, configuration, and repository implementations.

Widgets must not contain scoring logic, direct Node.js route calls, raw HTTP calls, PDF parsing, or catalog validation. Providers must depend on abstractions and compose concrete implementations in one bootstrap/DI location.

### Dependency injection

- Use Riverpod providers as the dependency graph.
- Define abstract repository and service interfaces in the domain layer.
- Provide concrete implementations in the data layer.
- Keep local scanner dependencies separate from catalog/config and administrator-session dependencies.
- Use <code>ProviderScope</code> overrides in tests and previews.
- Make every external dependency replaceable with a fake or in-memory implementation.
- Do not instantiate repositories or clients inside widgets.
- Do not use global mutable singletons.

### State management

- Use immutable state models.
- Use <code>AsyncValue</code> or explicit sealed states for loading, success, failure, and cancellation.
- Represent the scanner as an explicit state machine: idle, loadingCatalog, selectingFile, validatingFile, extracting, analyzing, verifying, completed, failed, cancelled.
- Represent the administrator session as: unknown, signedOut, signingIn, signedIn, changingCredentials, signingOut, expired, and failure.
- Disable duplicate actions while a run is active.
- Support cancellation and clear all volatile CV state when the user starts another scan or leaves the result flow.
- Keep UI state separate from domain workflow state.
- Do not store the selected PDF, CV text, or result in <code>localStorage</code>, IndexedDB, URL parameters, cookies, or service-worker storage. The administrator session cookie is server-managed and must not contain CV data.

### Package boundaries

The scoring engine, agent engine, catalog models, validation package, and test fixtures must be usable by the evaluation CLI without importing Flutter. Shared packages must not depend on application widgets.

## Web application routes

Build one Flutter Web bundle with one GoRouter configuration.

| Route | Screen |
| --- | --- |
| <code>/</code> | Landing page and product introduction |
| <code>/scan</code> | Role selection, consent-gated temporary backend upload and analysis workflow |
| <code>/results</code> | In-memory result view, never a server-backed result URL |
| <code>/request-role</code> | Missing-role request form without attachments |
| <code>/privacy</code> | Privacy policy and third-party provider disclosures |
| <code>/terms</code> | Terms, limitations, and non-hiring disclaimer |
| <code>/admin</code> | Administrator username/password login |
| <code>/admin/dashboard</code> | Aggregate dashboard |
| <code>/admin/roles</code> | Job-role catalog management |
| <code>/admin/rule-versions</code> | Draft and published rule-version management |
| <code>/admin/publication</code> | Validation, diff, publish, and rollback |
| <code>/admin/role-requests</code> | Missing-role request triage |
| <code>/admin/audit-logs</code> | Safe administrator audit log |
| <code>/admin/account</code> | Change the single administrator username and password |
| <code>/admin/settings</code> | Public settings such as donation URL and ad flags |

All routes are served by the same Node.js application and the same Flutter bundle. The <code>/admin</code> route is protected in both the Flutter router and the backend session middleware. Refreshing an administrator route must preserve the route while requiring a valid server session.

## Public experience

### Landing page content

Before the visitor selects a file, clearly show:

- 100% free service.
- No account or sign-in required.
- CV is processed privately after explicit consent through a temporary same-origin backend job.
- CV, extracted text, report, and any delayed-delivery email are encrypted while active and purged after completion, delivery, cancellation, expiry, or permanent failure.
- The score is role-specific guidance, not an employer's ATS score.
- The visitor selects a target role before scanning.

Display this consent message near the file picker:

> To support more PDF formats, your CV will be temporarily uploaded to our secure server for processing. The uploaded file, extracted text, analysis report, and any email address you provide will be deleted after processing and report delivery. We do not use your CV for training, advertising, or other purposes.

Display this disclaimer on the result view:

> This is guidance based on the role rules selected here. It is not an employer's ATS score and does not guarantee interviews or job offers.

### Scan flow

1. Fetch the current published catalog through a same-origin application route.
2. Search and select a supported role.
3. Select an optional seniority level.
4. Accept the exact temporary-processing consent notice.
5. Pick a PDF and perform only extension, MIME, size, empty-file, and magic-byte validation in the browser.
6. Upload one PDF to the same-origin backend job route.
7. Parse and analyze on the backend with Poppler/local Tesseract and the canonical deterministic Dart agent workflow.
8. Show Uploading securely, Queued, Processing, Preparing report, Awaiting email, Sending email, Complete, Expired, Failed, and Cancelled states.
9. Show a verified fast result only after server-side verification; delayed results are email-only and have no permanent URL.
10. Provide <code>Analyze another CV</code>, which clears the handle, email, bytes, result, and route-local state from memory.

Initial limits:

- PDF only.
- Maximum 10 MB.
- Maximum 25 pages.
- Selectable text required.
- Local English OCR fallback is supported server-side for scanned pages; there is no password bypass or cloud document processing.

Handle invalid, corrupt, protected, image-only, oversized, and wrong-format documents with clear recoverable local errors.

### Results

Show:

- Role Readiness Score from 0 to 100.
- Score band.
- Selected role and seniority.
- Published catalog version.
- Scoring-engine version.
- Five component scores.
- Strong, weak, mention-only, missing, and contradictory evidence.
- Evidence source section, page, and source span where available.
- Important missing skills ranked by rule weight.
- Recommended and detected CV sections.
- ATS-readiness observations based only on available local PDF/text facts.
- Impact and clarity observations such as vague bullets, repetition, and missing measurable outcomes.
- Truthful recommendations selected from the recommendation catalog.
- A collapsible evidence map.
- A collapsible <code>How this result was produced</code> trajectory view for the current in-memory session.
- Privacy reminder and disclaimer.

Do not provide cloud save, shareable result URLs, result history, or automatic CV rewriting. Delayed reports are delivered by SMTP only after explicit email consent.

### Role request form

Accept only:

- Requested role title: required, length-limited.
- Seniority: optional.
- Industry/context: optional, length-limited.
- Desired skills or requirements: optional, length-limited.
- Reply email: optional and validated.
- Anti-spam proof: honeypot plus server-side rate limiting and CAPTCHA/equivalent if configured.

Do not accept attachments, CV text, PDFs, job-description files, or visitor accounts. Submit the small, validated form only to the same-origin application route. Return a neutral success response that does not expose internal workflow details.

### Donations and advertising

Support an optional PayPal tip link and optional advertisements only outside the scan flow.

- Tipping never unlocks features or changes a score.
- Store no payment or donor data.
- Ads must never appear inside the file picker, during extraction, during scoring, or over the result.
- Disable ads on result routes if the provider cannot be isolated from CV-related content.
- Never pass CV text, file name, score details, or recommendations to PayPal or an ad provider.
- Make both integrations feature-flagged and easy to disable.

## Administrator experience

The administrator experience is not a second web application. It is the protected <code>/admin</code> feature area in the same Flutter Web application and the same Node.js application container.

Canonical entry point:

~~~text
https://cv.uxi.asia/admin
~~~

Unauthenticated visitors see only the administrator login screen. Authenticated visitors with the current administrator session can access the administrator portal. There is exactly one administrator identity and no administrator role hierarchy.

### Normal username-and-password authentication

Implement the login screen with:

- Username field.
- Password field.
- Sign-in button.
- Clear invalid-credentials and rate-limit messages that do not reveal which field was wrong.
- No registration, invitation, email login, magic link, token input, or password-reset link.

Initial default credentials:

~~~text
Username: rameshwx
Password: rameshwx
~~~

These values are used only to initialize an empty database. The application must store only an Argon2id hash of the password. The default password must never be written to logs, returned by a route, embedded in the Flutter bundle, or displayed after initialization. Show a prominent first-login reminder and set a server-side <code>force_password_change</code> flag until the administrator changes the credentials.

Use a server-side session after successful login:

- Generate a cryptographically random session identifier on the server.
- Store only a one-way hash of the session identifier in <code>admin_sessions</code>.
- Send the identifier only in a Secure, HttpOnly, SameSite cookie named for this application.
- Keep administrator session state out of <code>localStorage</code>, IndexedDB, URL parameters, and Flutter-managed persistent storage.
- Resolve the current administrator from the session record on every protected request.
- Rotate the session identifier at login and after credential changes.
- Apply an absolute session lifetime and an idle timeout.
- Revoke the session on logout and revoke all sessions after a username or password change.
- Do not return a bearer token, JWT, access token, refresh token, bootstrap token, or session secret to Flutter or to any caller.

Use HTTPS in production, CSRF protection for state-changing cookie-authenticated routes, protected providers, and GoRouter redirects. Handle expiry, revocation, and refresh failures gracefully. “Refresh” means checking or renewing a server-side cookie session; it is not a refresh-token API.

Rate-limit failed logins by client network address and normalized username without logging raw credentials. Do not expose database credentials, session-hashing secrets, or initial credential environment variables in the Flutter bundle.

### Credential-management screen

Implement <code>/admin/account</code> with:

- Current password required for every credential change.
- Optional new username field, validated for length and allowed characters.
- Optional new password and confirmation fields.
- Minimum password length and strength checks.
- A clear indication that submitting the form logs out all active sessions.
- A success state that returns the administrator to the login screen.
- An audit event that records the credential-change action without recording usernames, passwords, password hashes, or session values.
- A forced first-login flow that cannot be dismissed until the default password is changed.

The update must be atomic. It may change the username, password, or both, but it must reject a request that changes neither. It must never reveal whether another username exists because no second administrator may be created. A private server-side maintenance command may reinitialize the singleton account only with direct deployment access; do not build a public reset endpoint.

### Administrator screens

Implement:

- Login, logout, and current-session state.
- Dashboard with aggregate metrics only.
- Role list, search, filter, create, edit, deactivate, and archive.
- Rule-version list and detail editor.
- Skill, alias, phrase, exclusion, weight, category, and section-rule editor.
- Draft validation with actionable errors.
- Draft preview against bundled synthetic CV text only.
- Diff against the currently published catalog.
- Publish immutable catalog version.
- Publication history and safe rollback by republishing a valid previous snapshot.
- Role-request triage with statuses: new, reviewing, planned, added, rejected, duplicate.
- Safe audit-log viewer.
- Single-administrator account screen for changing username and password.
- Public settings such as donation URL and ad flags.

Do not implement an administrators list, administrator CRUD, user management, role-based admin permissions, invitations, or multi-tenant access.

The administrator portal must never show visitor CV files, extracted CV text, file names, document hashes, individual scores, detailed visitor results, or visitor-level analysis history.


## PDF parser compatibility contract

Create a dedicated abstraction such as:

~~~dart
abstract interface class LocalPdfParser {
  Future<PdfParseResult> parse(Uint8List bytes);
}
~~~

Keep the contract and fake parser for pure-Dart compatibility tests. Production uses the Node server parser with Poppler and local Tesseract, then passes the structured document to the private compiled Dart runner. The optional web adapter must:

- Accept bytes from the browser file picker.
- Pass them to PDF.js as an in-memory <code>Uint8Array</code>.
- Read page count and text content page by page.
- Preserve page references and text spans where practical.
- Detect empty/selectable-text failures.
- Return typed domain errors for invalid, protected, corrupt, or unsupported PDFs.
- Avoid logging the input bytes, file name, or extracted text.
- Release PDF.js document resources and clear byte buffers after the workflow finishes.

Provide a fake parser for unit and widget tests. Add browser tests that prove the parser uses local bytes and does not trigger a network request containing document content.

## Domain model requirements

Create strongly typed immutable models for at least:

- <code>SeniorityLevel</code>
- <code>JobRole</code>
- <code>RoleRequirement</code>
- <code>RuleCategory</code>
- <code>CvDocument</code>
- <code>CvPage</code>
- <code>CvSection</code>
- <code>CvTextSpan</code>
- <code>NormalizedTerm</code>
- <code>Evidence</code>
- <code>EvidenceClassification</code>
- <code>ScoreBreakdown</code>
- <code>ScoreBand</code>
- <code>Recommendation</code>
- <code>CatalogSnapshot</code>
- <code>WorkflowState</code>
- <code>AgentState</code>
- <code>TrajectoryEntry</code>
- <code>VerificationResult</code>
- <code>DomainFailure</code>
- <code>AdminSessionState</code>
- <code>AdminAccountUpdate</code>

Every evidence item should be able to reference, where available:

- Requirement/rule ID.
- Canonical term.
- Matched alias or phrase.
- Classification.
- Deterministic confidence or strength explanation.
- CV section.
- Page number.
- Source span offsets.
- Matching rule/tool used.

Administrator domain models must contain no password, password hash, session identifier, cookie value, or other secret. Credentials are accepted only by the authentication data source and never placed in persistent Flutter state.

## Deterministic agent system

Implement the following seven bounded software agents. They are logical software components, not LLM prompts and not separate microservices.

### 1. CV Parser Agent

Goal: convert the server-parsed PDF into a structured CV representation.

Tools:

- Poppler `pdfinfo`/`pdftotext`, bounded `pdftoppm`/Tesseract OCR, and the structured-document runner adapter.
- Text cleanup and Unicode normalization.
- Heading and section detector.
- Date-range parser.
- Bullet and sentence detector.
- Page/source-span mapper.

Output:

- Parsed pages, sections, text spans, detected headings, date signals, bullets, parse warnings, and document facts.

### 2. Requirement Analysis Agent

Goal: build the weighted requirement plan for the selected role and seniority.

Tools:

- Immutable published catalog snapshot.
- Rule validator.
- Seniority selector.
- Required/preferred grouping.

Output:

- Deterministically ordered requirements with weights, categories, aliases, exclusions, expected sections, and recommendation IDs.

### 3. Skill Normalization Agent

Goal: resolve approved aliases and alternate terminology without over-matching.

Tools:

- Canonical skill catalog.
- Alias lookup.
- Phrase matcher.
- Word and phrase boundary matcher.
- Ambiguity/exclusion rules.

Output:

- Normalized terms, exact source matches, aliases used, ambiguity flags, and confidence/strength metadata.

Never invent a synonym that is not in the published catalog.

### 4. Evidence Investigation Agent

Goal: determine whether every requirement is supported by credible CV evidence.

Tools:

- Section-aware matcher.
- Phrase and word-boundary matcher.
- Context and proximity matcher.
- Repetition limiter.
- Date and role-context checker.
- Contradiction detector.

Output classifications:

- <code>strong</code>
- <code>weak</code>
- <code>mention_only</code>
- <code>missing</code>
- <code>contradictory</code>

Default evidence policy:

| CV location/condition | Classification |
| --- | --- |
| Skill appears in an experience or project statement with relevant action/context | Strong |
| Skill appears in a relevant section with limited context | Weak |
| Skill appears only in a skills list or isolated keyword list | Mention only |
| No canonical term or approved alias matches | Missing |
| Conflicting dates, roles, or statements reduce confidence | Contradictory |

Repeated terms must not improve a classification or score beyond the configured maximum.

### 5. Scoring Agent

Goal: calculate the Role Readiness Score using only versioned deterministic rules.

Use these initial component limits:

| Component | Maximum |
| --- | ---: |
| Role skills | 35 |
| Experience evidence | 25 |
| ATS readiness | 20 |
| Completeness | 10 |
| Impact and clarity | 10 |

Use these initial evidence multipliers for weighted requirement credit:

| Classification | Multiplier |
| --- | ---: |
| Strong | 1.00 |
| Weak | 0.50 |
| Mention only | 0.20 |
| Missing | 0.00 |
| Contradictory | 0.00, with a bounded warning/deduction only when configured |

Document the exact formulas in code and tests. Clamp each component to its configured range, clamp the total to 0–100, and round the final result to a whole number. Repeated occurrences must not inflate a rule. Expose all contributing rule IDs and evidence IDs.

Initial score bands:

| Score | Band |
| ---: | --- |
| 0–49 | Needs work |
| 50–69 | Developing |
| 70–84 | Strong |
| 85–100 | Very strong |

### 6. Recommendation Agent

Goal: select truthful, predefined recommendations based on evidence and deterministic CV observations.

Examples:

- Add evidence for a weighted missing skill only if the applicant genuinely has that experience.
- Move relevant tools and accomplishments into clearly labeled sections.
- Replace vague responsibility statements with outcomes and measurable impact where possible.
- Use conventional headings such as Summary, Skills, Experience, Projects, Education, and Certifications.
- Export a selectable-text PDF rather than an image-only PDF.

Never recommend fabricating skills, years of experience, employers, degrees, certifications, or measurements.

### 7. Verification Agent

Goal: prevent unsupported or inconsistent results from reaching the visitor.

Checks:

- Every matched requirement has a valid rule ID.
- Every evidence item points to a real parsed source span or an explicitly documented document-level fact.
- Every source span belongs to the current run's local document.
- Every recommendation ID exists in the catalog.
- Every score contribution can be recomputed from evidence and rules.
- Component totals and final total are in bounds.
- No duplicate rule credit exists.
- The catalog version and engine version are present.
- The trajectory is complete and ordered.
- No forbidden CV data was passed to any remote route or client-side persistence layer.

If verification fails, do not display a completed result. Allow one bounded corrective retry for the relevant stage, record the failure and correction in the trajectory, then fail safely if verification still fails.


## Agent contracts and orchestration

Use typed interfaces similar to:

~~~dart
abstract interface class WorkflowAgent<I, O> {
  String get id;
  Future<AgentExecution<O>> execute(
    I input,
    WorkflowContext context,
  );
}
~~~

The orchestrator must:

- Pass typed state between agents.
- Use explicit stage transitions.
- Register tools by stable IDs.
- Record observations, tool selections, decisions, confidence/strength metadata, state updates, and next steps.
- Support cancellation.
- Use bounded retries.
- Stop on invalid catalog, parse failure, or verification failure.
- Produce the same result for the same document text, role, catalog version, and engine version.
- Never silently alter the role catalog or scoring policy.
- Keep all CV bytes, extracted text, evidence, scores, and trajectories in scoped memory during the visitor run.

The workflow sequence is:

~~~text
Parse
  -> Analyze requirements
  -> Normalize terms
  -> Investigate evidence
  -> Score
  -> Select recommendations
  -> Verify
  -> Display
~~~

### Trajectory entry

Capture an in-memory trajectory entry for every agent step:

~~~json
{
  "agent": "EvidenceInvestigationAgent",
  "step": 3,
  "goal": "Classify evidence for Jetpack Compose",
  "tool": "sectionAwareMatcher",
  "observation": "Term appears in Skills but not Experience or Projects",
  "decision": "mention_only",
  "confidence": 0.92,
  "stateUpdate": "evidence[compose].classification = mention_only",
  "nextAgent": "ScoringAgent",
  "retry": false
}
~~~

The public experience may display this trajectory during the current session for a fast result, but never persists it in browser storage or a permanent URL. A delayed email contains only the sanitized report. Evaluation trajectories may be exported because they use synthetic CVs only. The administrator must never receive visitor trajectories.

## Rule catalog and seed data

Use PostgreSQL as the authoritative authoring store. A published catalog must be an immutable, versioned JSON snapshot downloaded by the Flutter browser through a same-origin application route.

Seed at least these roles:

1. Android Developer
2. Flutter Developer
3. Kotlin Multiplatform Developer
4. iOS Developer
5. Frontend Developer
6. Backend Developer
7. Full Stack Developer
8. QA Engineer
9. DevOps Engineer
10. UI/UX Designer
11. Project Manager

Each role should include realistic, documented initial rules for required and preferred skills, tools, experience signals, expected sections, aliases, exclusions, weights, and truthful recommendations. Prioritize high-quality Android, Flutter, and Kotlin Multiplatform rules for the demonstration.

Rule features:

- Role title, slug, description, category, and active flag.
- Optional seniority.
- Required/preferred classification.
- Canonical term and approved aliases.
- Optional phrases and phrase boundaries.
- Excluded or ambiguous phrases.
- Weight and category.
- Evidence policy override where justified and documented.
- Expected CV section.
- Recommendation template IDs.
- Draft, published, archived, and version metadata.

Validate catalogs for duplicate terms, invalid weights, empty mandatory fields, conflicting aliases, broken references, invalid section policies, and impossible score totals before publication.

## PostgreSQL database

Create versioned SQL migrations, indexes, constraints, Row-Level Security policies, seed data, and tests for at least these tables. Run migrations through the Node.js migration command and use a non-owner, non-superuser application database role at runtime:

| Table | Purpose |
| --- | --- |
| <code>admin_account</code> | The single administrator identity, username, Argon2id password hash, first-login flag, active status, and timestamps; enforce exactly one row |
| <code>admin_sessions</code> | One-way hashes of server-side session identifiers, expiry, idle timeout, last-used time, and revocation state; never store raw cookie values |
| <code>job_roles</code> | Stable identity and metadata for supported job roles |
| <code>role_rule_versions</code> | Draft, published, and archived versions for a role and seniority |
| <code>role_rules</code> | Weighted required/preferred skill and evidence rules |
| <code>rule_aliases</code> | Approved aliases and matching behavior |
| <code>rule_exclusions</code> | Ambiguous or excluded phrases |
| <code>section_requirements</code> | Expected CV sections and role-specific section guidance |
| <code>recommendation_templates</code> | Versioned truthful recommendation copy |
| <code>catalog_versions</code> | Published immutable catalog metadata |
| <code>catalog_snapshots</code> | Public JSON snapshot associated with a catalog version |
| <code>role_requests</code> | Public missing-role requests without attachments or CV content |
| <code>aggregate_events</code> | Allowlisted coarse non-CV metrics only |
| <code>audit_logs</code> | Safe administrator actions and change summaries |
| <code>site_settings</code> | Non-secret public/admin settings such as donation URL and ad flags |

Database rules:

- The <code>admin_account</code> table must enforce a singleton key, such as <code>id = 1</code>. No second administrator row may ever be inserted.
- The Node.js application owns administrator authentication. Store only an Argon2id password hash and never plaintext passwords.
- Never create a visitor/user table for public scanning.
- Enable RLS on every application table. The API must connect with a non-owner, non-superuser role and set transaction-local request identity, such as <code>app.admin_authenticated</code>, only after validating the current server-side session.
- Use a narrowly scoped, locked-down database function or query for pre-authentication lookup of the singleton password hash. It must expose no unrelated administrator data and must not disable RLS broadly.
- Flutter must never connect directly to PostgreSQL. Public catalog/config reads and role-request submission are allowlisted same-origin application routes, not a public API.
- Drafts, unpublished rules, role requests, audit logs, metrics, administrator records, and session records are private and protected by both backend authorization and RLS.
- Use foreign keys, unique constraints, check constraints, indexes, and transactions.
- Published snapshots are immutable.
- Catalog publication must atomically validate, snapshot, mark the version published, and create an audit event.
- A username/password change must atomically update the singleton account, set or clear the first-login flag as appropriate, revoke all sessions, and create a redacted audit event.
- PostgreSQL must not be exposed on a public port in production.
- Create only the temporary encrypted `analysis_jobs` table required by `Modification_Request_1.md`; never create permanent CV, individual-result, visitor-account, or visitor-history storage.


## Node.js application server

The Node.js/TypeScript process is the backend boundary for this single application. It serves the compiled Flutter Web files and implements only the same-origin application routes required by the product. It is not a standalone public API. Do not publish API documentation, support third-party clients, enable cross-origin API access, or expose a public API base URL.

Use Fastify or an equally typed HTTP framework, a PostgreSQL client such as <code>pg</code>, explicit request/response schemas, parameterized SQL, transactions, and structured redacted logging. Flutter applications must call the backend through repository abstractions; they must never call PostgreSQL directly.

### Same-origin application routes

These routes are internal browser-application routes. They must accept only the defined request shapes and must not be presented as a public API.

Public-facing application routes:

- <code>GET /app/catalog</code>: current published catalog JSON, version, roles, and rules required for role selection and server analysis.
- <code>POST /app/analysis-jobs</code>: exact one-file, consent-gated temporary PDF job; internal same-origin route only.
- <code>GET /app/analysis-jobs/:handle/status</code>: safe aggregate job state for the matching ephemeral handle.
- <code>POST /app/analysis-jobs/:handle/email</code>: validated delayed-report email consent.
- <code>POST /app/analysis-jobs/:handle/cancel</code>: terminal purge request.
- <code>GET /app/config</code>: safe public configuration such as donation URL and ad flags.
- <code>POST /app/role-requests</code>: validated role request with no attachments or CV data.
- <code>POST /app/metrics</code>: optional allowlisted aggregate event with no CV content.

Administrator application routes:

- <code>POST /app/admin/login</code>: username/password form login that sets the server-side session cookie.
- <code>GET /app/admin/session</code>: return only safe current-session state and the first-login/password-change requirement.
- <code>POST /app/admin/logout</code>: revoke the current server-side session and clear the cookie.
- <code>PATCH /app/admin/account</code>: atomically change the single administrator username, password, or both after verifying the current password.
- Dashboard aggregate metrics and service health.
- Job-role CRUD and activation/archive operations.
- Draft rule-version CRUD.
- Draft validation.
- Catalog diff.
- Catalog publication.
- Safe rollback by republishing an earlier valid snapshot.
- Role-request triage.
- Audit-log viewing.
- Public settings management.

Use same-origin relative URLs in Flutter. Do not compile an API base URL, API key, database credential, signing secret, or administrator credential into the browser bundle.

### Recommended route modules

Organize the Node.js application into modules such as:

- <code>catalog</code> and <code>config</code>
- <code>role-requests</code> and <code>metrics</code>
- <code>authentication</code> and <code>session</code>
- <code>roles</code>, <code>rule-versions</code>, and <code>catalog-publication</code>
- <code>dashboard</code>, <code>audit-logs</code>, <code>account</code>, and <code>settings</code>

Do not create an administrators module, user-management module, role-authorization module, or public API module.

### Authentication and authorization requirements

- Accept a username and password only on <code>POST /app/admin/login</code>.
- Compare the submitted password with the Argon2id hash for the singleton <code>admin_account</code> row.
- On success, create a cryptographically random server-side session and send it only as a Secure, HttpOnly, SameSite cookie.
- Store only a one-way session hash in <code>admin_sessions</code>.
- Check the session record and active singleton account on every protected request.
- Set transaction-local PostgreSQL administrator context only after the session is validated.
- Rotate the session identifier after login and after credential changes.
- Revoke the current session on logout and all sessions on username/password change.
- Enforce an absolute session lifetime and idle timeout.
- Use CSRF protection and strict Origin/Referer validation for state-changing cookie-authenticated routes.
- Do not issue or accept JWTs, bearer access tokens, refresh tokens, personal access tokens, bootstrap tokens, magic links, or token-login credentials.
- Do not implement administrator roles or role claims. A valid current session is the only administrator authorization level.
- Do not implement registration, invitations, password reset, email verification, or a second administrator.
- Rate-limit failed logins by client network address and normalized username without logging raw credentials.
- Treat the default credentials as initialization input only; do not return them from a route or store them in the Flutter app.

The account update route must:

- Require the current password.
- Accept an optional new username and optional new password.
- Reject a request that changes neither.
- Validate username syntax and password strength.
- Update the singleton row in one transaction.
- Revoke all administrator sessions.
- Record only a redacted audit event.
- Return a response that tells the browser to show the login screen again, never a password or session value.

### General Node.js requirements

- Validate every request with explicit schemas and reject unknown fields.
- Use parameterized SQL only.
- Use transaction boundaries for publication, role changes, settings changes, credential changes, and audit events.
- Never use a superuser or <code>BYPASSRLS</code> database connection in request handlers.
- Never accept a PDF, extracted text, document name, score, recommendation, or trajectory.
- Accept JSON for normal routes and strictly bounded multipart only on `POST /app/analysis-jobs`; reject octet-stream, unknown file-like fields, and oversized request bodies.
- Do not log request bodies containing free text, raw passwords, session cookies, authorization headers, email addresses, or database errors.
- Rate-limit public role requests and metric events.
- Normalize and length-limit public free-text fields.
- Avoid returning internal database details.
- Return typed JSON error envelopes with safe correlation IDs.
- Provide only the health routes <code>/health/live</code> and <code>/health/ready</code> for deployment checks; health responses must not reveal secrets or database internals.
- Do not expose an OpenAPI document or public route index.

Keep these values server-side and document them in <code>.env.example</code>:

- <code>DATABASE_URL</code>
- <code>SESSION_HASH_PEPPER</code>
- <code>PUBLIC_ORIGIN=https://cv.uxi.asia</code>
- <code>ADMIN_INITIAL_USERNAME</code>
- <code>ADMIN_INITIAL_PASSWORD</code>
- session lifetime, idle timeout, cookie name, and rate-limit settings
- optional CAPTCHA verification secrets

The initial seed defaults are <code>ADMIN_INITIAL_USERNAME=rameshwx</code> and <code>ADMIN_INITIAL_PASSWORD=rameshwx</code> when the database is empty and no override is supplied. These values are never sent to the client. The seed must be idempotent and must never overwrite an existing username, password hash, or credential-change state.

Provide working commands similar to:

~~~bash
npm --prefix api ci
npm --prefix api run db:migrate
npm --prefix api run db:seed
npm --prefix api run dev
npm --prefix api test
~~~

The migration and seed commands must target an explicitly configured PostgreSQL instance and must never run against production accidentally. Document the first-login flow and the admin-panel credential-change flow. Do not require an API token to bootstrap the administrator.

Example error envelope:

~~~json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields are invalid.",
    "fieldErrors": {
      "roleTitle": "Role title is required."
    },
    "correlationId": "01J..."
  }
}
~~~

## Privacy and security implementation

Implement privacy as code, not only as a written promise.

### Browser privacy

- Keep the PDF bytes, temporary job handle, email, and fast result in scoped in-memory objects only.
- Do not put CV data in URLs, query strings, fragments, cookies, local storage, IndexedDB, service-worker cache, analytics payloads, error reports, or third-party requests.
- The administrator session cookie is HttpOnly and contains only a server-generated session identifier; it must never contain CV data.
- Use redacted logs only. In production, do not log document metadata that can identify the visitor's file.
- Clear buffers, parsed pages, trajectory, and result state when a scan is reset.
- Disable or isolate ads on scan and result routes.
- Send the PDF only after the exact consent notice is accepted, only to the same-origin analysis-job route, and never to analytics, ads, LLMs, or unrelated services.

### Server privacy

- Define only temporary encrypted `analysis_jobs` storage and the internal same-origin analysis-job routes from `Modification_Request_1.md`; do not expose a public API or documentation.
- Reject unexpected file uploads, additional multipart files/fields, spoofed MIME types, malformed/encrypted PDFs, excessive pages/pixels, and oversized requests at the Node.js application layer.
- Redact secrets, passwords, session cookies, authorization headers, request bodies, email addresses where possible, and all CV-like content from logs.
- Use CSP, HTTPS, secure headers, strict same-origin handling, and appropriate frame/referrer policies.
- Keep PostgreSQL private to the Coolify project network.
- Store production secrets only in Coolify/GitHub secret configuration.
- Use a restrictive Content Security Policy that permits only the application assets, PDF.js local assets, and explicitly approved donation/ad origins outside scan and result routes.

### Privacy tests

Add automated tests that:

- Intercept browser network calls during a scan.
- Assert that no request body, URL, header, cookie, or third-party request contains known synthetic CV markers.
- Assert that the only file upload request is the consent-gated same-origin `/app/analysis-jobs` request and that no synthetic CV marker appears in URLs, cookies, analytics, or unrelated third-party requests.
- Assert that reset clears the in-memory result and trajectory.
- Search source code and Node.js route definitions for forbidden CV endpoint names.
- Verify no database migration creates CV storage or visitor result tables.
- Verify that the administrator account and session tables contain no CV or visitor-result fields.
- Verify that the credential-change audit event contains no password, password hash, username value, or session value.


## Design and accessibility

Create a polished, calm, trustworthy Material 3 interface. Prioritize clarity and privacy over visual effects.

Shared design system requirements:

- Responsive layouts for phone, tablet, and desktop widths.
- Consistent colors, typography, spacing, cards, buttons, input fields, badges, tables, dialogs, and error states.
- Consistent Ready My CV branding in the single public and administrator experience.
- Visible progress and cancellation states.
- Strong visual distinction between strong evidence, weak evidence, mention-only evidence, missing evidence, and contradictory evidence.
- Do not use color alone to communicate a classification.
- Keyboard navigation and visible focus states.
- Semantic labels for file pickers, charts, tables, and status changes.
- Screen-reader-friendly result summaries.
- WCAG 2.1 AA intent for contrast, touch targets, focus order, and understandable errors.
- No deceptive “guaranteed interview” or “official ATS” language.
- Do not display the default administrator password anywhere except the protected setup documentation and first-run operational instructions.

## Evaluation harness

Build a Dart CLI evaluation runner using the same <code>agent_engine</code> and <code>scoring_engine</code> packages used by the public application.

### Dataset

Include at least 20 safe synthetic CV/role cases covering:

- Android/Kotlin.
- Flutter.
- Kotlin Multiplatform.
- At least two additional initial roles.
- Junior, mid, senior, and lead contexts.
- Strong evidence.
- Weak evidence.
- Skills-list-only keyword mentions.
- Approved aliases.
- Misleading partial matches.
- Missing requirements.
- Conflicting dates or statements.
- A deliberately difficult keyword-stuffing case.

Each requirement must have a gold label:

~~~text
strong | weak | mention_only | missing | contradictory
~~~

Store the labels separately from system output. Do not give hidden gold labels to the final agent during evaluation.

### Fair baseline

Implement a simple baseline that:

- Performs exact normalized term matching.
- Uses the same role weights as the final system.
- Has no section weighting.
- Has no aliases beyond case normalization.
- Treats any term occurrence as a match.
- Produces a score and matched-term list.

The final system and baseline must use the same input cases and role requirements.

### Commands

Provide working commands similar to:

~~~bash
dart run evaluation/bin/run_baseline.dart
dart run evaluation/bin/run_agents.dart
dart run evaluation/bin/compare_results.dart
~~~

Generate:

~~~text
evaluation/output/baseline-results.json
evaluation/output/agent-results.json
evaluation/output/comparison-report.md
evaluation/output/metrics.json
evaluation/output/trajectories/
~~~

### Metrics

Report:

- Requirement evidence classification macro-F1.
- Per-class precision and recall where practical.
- False-positive strong matches.
- Evidence traceability rate.
- Human review time per case if measured.
- Repeat-run consistency.
- Runtime per case.
- Cost per case.
- Failed cases and reasons.

Report every case, including failures. Do not select only favorable results.

## Improvement changelog

Create <code>docs/improvement-changelog.md</code> and include actual generated evidence for this sequence:

| Stage | Experiment |
| --- | --- |
| Baseline | Exact keyword matching |
| Iteration 1 | Canonical terms and approved aliases |
| Iteration 2 | Section-aware matching |
| Iteration 3 | Evidence-strength and context/proximity rules |
| Iteration 4 | Contradiction and ambiguity detection |
| Iteration 5 | Verification Agent and bounded retries |
| Removed experiment | A rule or matcher that increased false positives or reduced usability |
| Final | Combined surviving improvements |

For each stage, record the hypothesis, changed code/rules, metrics, representative cases, decision, and remaining limitation.

## Testing requirements

### Dart and Flutter

- <code>dart format --set-exit-if-changed</code>.
- <code>flutter analyze</code> for the single web application.
- Unit tests for all domain models, normalizers, matchers, scoring, recommendations, verification, and failures.
- Widget tests for public and administrator screens.
- Browser integration tests for PDF selection, scan states, results, reset, routing, credential login, credential change, and accessibility.
- Golden tests for important responsive states where stable.
- Test cancellation and duplicate-action prevention.
- Test that Flutter uses same-origin relative routes and never attempts a direct PostgreSQL connection.

### PostgreSQL and Node.js application

- Migration and seed checks.
- Singleton administrator constraint tests proving a second account cannot be inserted.
- Default seed test proving the first empty database initializes username <code>rameshwx</code> and password <code>rameshwx</code> without storing plaintext.
- Normal username/password login tests.
- Invalid-credential and login-rate-limit tests.
- Secure session-cookie, session-expiry, logout, and revocation tests.
- Credential-change tests for username only, password only, both together, current-password failure, atomicity, and all-session revocation.
- RLS policy tests.
- Application session authorization tests.
- Catalog validation and publication transaction tests.
- Immutable snapshot tests.
- Role-request validation/rate-limit tests.
- Audit-log tests proving secrets and CV data are excluded.
- Node.js/TypeScript unit and integration tests against an ephemeral PostgreSQL database.

### Privacy and security

- Network interception tests proving CV markers never leave the browser.
- Forbidden-route/static scan tests.
- Secret scanning and dependency audit in CI.
- CSP and security-header verification.
- Admin route guard tests.
- Database credential and server-secret exclusion tests.
- Tests proving there is no JWT, bearer-token, refresh-token, bootstrap-token, administrator-registration, or public-API implementation.
- Tests proving only one root <code>Dockerfile</code> is used for the application.

### End-to-end

Cover:

1. Public role selection, consent, backend PDF scan, and fast/queued delivery.
2. Strong/weak/mention-only/missing/contradictory evidence rendering.
3. Invalid and unsupported PDF errors.
4. Role request submission without attachment.
5. Administrator login at <code>/admin</code> with username <code>rameshwx</code> and password <code>rameshwx</code> on a newly initialized database.
6. Forced first-login credential change.
7. Username/password change from <code>/admin/account</code> and revocation of prior sessions.
8. Draft rule editing and validation.
9. Catalog publication and public catalog refresh through the same-origin application route.
10. Role-request triage.
11. Aggregate dashboard without visitor-level data.


## Docker and Coolify deployment

Deploy the complete product as one Coolify project for the domain <code>cv.uxi.asia</code>.

### Coolify topology

The Coolify project must contain:

1. One application resource built from the repository root <code>Dockerfile</code>.
2. One PostgreSQL resource attached to the same Coolify project/network.
3. One custom domain: <code>cv.uxi.asia</code>.
4. Coolify-managed HTTPS and reverse-proxy routing to the application resource.

The root Dockerfile is the only application Dockerfile. It must use a multi-stage build to:

- Resolve and build the single Flutter Web application.
- Install and compile the Node.js/TypeScript application.
- Copy the compiled Flutter assets into the Node.js runtime image.
- Run one Node.js process that serves the Flutter assets, same-origin application routes, and health routes.
- Run as a non-root user.
- Exclude source maps, tests, development tools, secrets, local PDFs, and environment files from the runtime image unless explicitly required for a safe production diagnostic.

Do not create separate public-web, administrator-web, API, Nginx, Caddy, reverse-proxy, migration, or frontend Dockerfiles. Do not create Docker Compose files for production or local development. Do not create separate public, admin, or API containers.

PostgreSQL is a persistent Coolify resource in the same project, not a process inside the application image. Do not embed PostgreSQL in the Dockerfile. This keeps the requested deployment to one Coolify project and one application Dockerfile while preserving database persistence, backups, upgrades, and least-privilege networking.

### Required runtime behavior

- Serve the public Flutter experience at <code>https://cv.uxi.asia/</code>.
- Serve the administrator experience from the same Flutter bundle at <code>https://cv.uxi.asia/admin</code>.
- Use Flutter base href <code>/</code> and SPA fallback so direct navigation to every supported route works.
- Serve same-origin application routes from the Node.js process.
- Do not expose a public API host, subdomain, port, API key, or cross-origin route.
- Allow the Coolify proxy to forward only HTTPS traffic to the application container.
- Keep PostgreSQL private to the Coolify project network and do not expose port <code>5432</code> publicly.
- Configure request-size limits, strict same-origin checks, security headers, CSP, compression, and safe health responses; JSON is required except for multipart on the exact analysis upload route.
- Permit one consent-gated PDF upload only at `/app/analysis-jobs`; enforce magic bytes, generated names, MIME matching, page/pixel/OCR bounds, and queue limits at the Node.js application.
- Provide <code>/health/live</code> and <code>/health/ready</code>. The ready check may verify database, worker cleanup, and production SMTP readiness but must not reveal connection strings, schema details, credentials, or query errors.
- Use only the private generated temporary directory required by the analysis worker; do not mount a persistent upload volume.
- Configure PostgreSQL backups through Coolify or the approved VPS backup process. Analysis payloads are encrypted but backups may retain historical pages until their configured retention expires; do not claim application purge removes them retroactively.

### Root Dockerfile expectations

Use a reproducible multi-stage Dockerfile similar in behavior to:

~~~text
Flutter build stage
  -> build the single apps/web Flutter Web bundle

Node build stage
  -> install api dependencies
  -> compile api TypeScript
  -> copy only production dependencies and compiled files

Runtime stage
  -> copy Flutter build/web into the Node.js static asset directory
  -> copy Node.js production output
  -> expose only the internal application port
  -> run the Node.js server
~~~

Choose mutually compatible base-image versions and record them in the reproduction guide. Pin major versions and preferably immutable image digests where operationally practical. Do not place <code>ADMIN_INITIAL_PASSWORD</code>, <code>DATABASE_URL</code>, <code>SESSION_HASH_PEPPER</code>, or any other secret in the image.

### Environment configuration

Provide a root <code>.env.example</code> and document the following production variables in Coolify:

- <code>NODE_ENV</code>
- <code>PORT</code>
- <code>DATABASE_URL</code>
- <code>SESSION_HASH_PEPPER</code>
- <code>PUBLIC_ORIGIN=https://cv.uxi.asia</code>
- <code>ADMIN_INITIAL_USERNAME</code>
- <code>ADMIN_INITIAL_PASSWORD</code>
- administrator session lifetime and idle timeout
- cookie name and secure-cookie flags
- rate-limit settings
- optional CAPTCHA verification secret

The default first initialization values are <code>rameshwx</code>/<code>rameshwx</code>. Treat them as sensitive even though they are specified by this product requirement. Never commit them as a password hash or expose them in the browser. After the first login, change them from <code>/admin/account</code>.

### Database migration and release process

- Run checked-in PostgreSQL migrations with a Coolify pre-deploy/release command using the same image, or an equivalent one-time command supported by the single Coolify application resource.
- Run migrations before the new application version receives traffic.
- Run the idempotent seed only when initializing an empty database.
- Do not run seed logic on every request or overwrite the changed administrator credentials.
- Keep the previous application version available for rollback.
- Verify <code>/health/live</code>, <code>/health/ready</code>, <code>/</code>, <code>/admin</code>, and the catalog route after deployment.
- Verify that PostgreSQL remains private and that only one Coolify application resource is deployed.

### Domain and DNS

Configure:

- DNS record for <code>cv.uxi.asia</code> to the VPS/Coolify endpoint in Cloudflare.
- Coolify custom domain <code>cv.uxi.asia</code>.
- Automatic HTTPS certificate and redirect from HTTP to HTTPS.
- No separate <code>admin.cv.uxi.asia</code>, <code>api.cv.uxi.asia</code>, or public API hostname.
- Canonical links and security policies for <code>https://cv.uxi.asia</code>.


## GitHub Actions CI/CD

### Pull request workflow

Run:

- Formatting checks.
- Flutter analysis for the single web application.
- Dart unit tests.
- Flutter widget/integration tests where available.
- Node.js lint, type checks, and unit/integration tests.
- PostgreSQL migration and seed checks against an ephemeral database.
- Singleton administrator, session-cookie, credential-change, RLS, and application authorization tests.
- Privacy/static forbidden-route checks.
- Evaluation baseline/final tests.
- Dependency and secret scans.
- Dockerfile build validation.

### Build workflow

On merge to <code>main</code>:

1. Run the complete test suite.
2. Build the single Flutter Web application.
3. Build the Node.js/TypeScript application.
4. Build one production image from the repository root <code>Dockerfile</code>.
5. Tag the image with the Git commit SHA.
6. Push the image to GHCR.
7. Publish release metadata containing the image tag and migration version.

Suggested image name:

~~~text
ghcr.io/rameshwx/cv-role-readiness:<commit-sha>
~~~

Do not build or publish separate public-web, administrator-web, API, or proxy images.

### Deployment workflow

On an approved merge or manual dispatch:

1. Connect to the single Coolify project using a protected Coolify webhook or approved deployment integration.
2. Deploy the exact commit-SHA image, or ask Coolify to build that exact commit with the root <code>Dockerfile</code>.
3. Apply checked-in PostgreSQL migrations through the configured release command before serving the new version.
4. Keep the Coolify PostgreSQL resource attached to the same project and private network.
5. Run public page, administrator route, login/session, catalog, consent-gated analysis, health, HTTPS, database-privacy, cleanup, and no-public-API smoke checks.
6. Preserve the previous deployment if verification fails.
7. Record the deployed commit, single image tag, migration status, catalog version, and backup status.

Never deploy only a mutable <code>latest</code> tag. Never print passwords, session values, database URLs, or other secrets in workflow logs. The deployment must remain one Coolify project with one application resource and one PostgreSQL resource.

Required workflow files:

~~~text
.github/workflows/pull-request.yml
.github/workflows/build.yml
.github/workflows/deploy.yml
~~~

## Documentation

Create a README that includes:

- Product purpose and intended user.
- Ready My CV branding and production URLs.
- The privacy promise and its technical enforcement.
- Why the system is agentic without an LLM.
- Architecture diagram.
- Repository structure.
- Local setup.
- PostgreSQL and Node.js application setup, migrations, seed data, and health checks.
- The single-admin default initialization and first-login credential-change flow.
- The fact that the administrator logs in with username <code>rameshwx</code> and password <code>rameshwx</code> on a newly initialized database.
- How to change the username and password from <code>/admin/account</code>.
- How server-side session cookies work and why no JWT/bearer/refresh/bootstrap token is used.
- Public-facing application routes versus internal same-origin routes.
- The explicit statement that no public or third-party API is provided.
- Local development commands.
- Test commands.
- Evaluation commands and interpretation.
- The root Dockerfile build and runtime model.
- One Coolify project deployment at <code>cv.uxi.asia</code>.
- PostgreSQL backups, rollback, and migration guidance.
- GitHub Actions secrets.
- Limitations and future work.
- Dependency licenses.

Create a reproduction guide that starts from a clean environment and includes exact versions, commands, expected outputs, synthetic test-data locations, trajectory inspection, baseline comparison, privacy verification steps, local PostgreSQL setup, first-run administrator initialization, and safe credential-change testing. It must not require a private CV or private production credentials.

Create an architecture decision record explaining:

- Why local deterministic processing was selected.
- Why the product does not use an LLM.
- Why one Flutter Web application is used for both public and administrator experiences.
- Why PostgreSQL and a Node.js application are used as the backend.
- Why the product has internal same-origin routes but no public API.
- Why normal username/password authentication with a server-side session cookie is used.
- Why there is exactly one administrator and no administrator roles.
- Why the root Dockerfile and one Coolify project are used.
- How privacy is enforced.
- How the public catalog is versioned and published.
- Why PostgreSQL is a separate persistent Coolify resource rather than a process in the application container.


## Delivery phases

Implement in this order, but continue through every phase in the same task unless an external permission is genuinely blocking progress.

### Phase 1: Foundation

- Check or create the public GitHub repository and preserve unrelated existing work.
- Create the monorepo and the single Flutter Web application.
- Configure Clean Architecture, Riverpod DI, GoRouter, immutable models, linting, and formatting.
- Add the Node.js application server, PostgreSQL migrations, RLS, singleton administrator schema, session-cookie authentication skeleton, seed data, and health endpoints.
- Add the root Dockerfile, root environment template, and Coolify deployment documentation.
- Add CI checks.

### Phase 2: Shared domain engine

- Implement catalog models.
- Implement parser contracts and text normalization.
- Implement section detection and source spans.
- Implement scoring engine and recommendation policies.
- Implement rule validation and verification.
- Add unit tests and synthetic fixtures.

### Phase 3: Agent workflow

- Implement all seven agents.
- Implement typed orchestration and cancellation.
- Implement trajectory capture and verification retry behavior.
- Add deterministic repeat-run tests.

### Phase 4: Public experience

- Implement landing, scan, results, request, privacy, and terms routes in the single Flutter application.
- Integrate the backend analysis-job repository and retain local PDF.js only for optional basic validation compatibility.
- Integrate catalog fetch without CV data through same-origin application routes.
- Implement responsive accessible UI and privacy messaging.
- Add PayPal/ad feature flags outside the scan flow.

### Phase 5: Administrator experience

- Implement the <code>/admin</code> login form with username and password.
- Initialize the singleton account with username <code>rameshwx</code> and password <code>rameshwx</code> on an empty database.
- Implement server-side session-cookie login, logout, expiry, and revocation.
- Implement the forced first-login credential-change flow.
- Implement <code>/admin/account</code> so the administrator can change the username and password.
- Implement route protection and session authorization.
- Implement dashboard, catalog editor, validation, preview, publication, rollback, requests, audit logs, and settings.
- Do not implement administrator management or administrator roles.

### Phase 6: Evaluation and evidence

- Add 20 or more synthetic cases and gold labels.
- Implement baseline and final runners.
- Generate metrics, reports, and trajectories.
- Complete the improvement changelog.

### Phase 7: Operations and release

- Complete the single root Dockerfile and health behavior.
- Configure one Coolify project with one application resource, one PostgreSQL resource, the domain <code>cv.uxi.asia</code>, and HTTPS.
- Complete GitHub Actions build/deploy/rollback workflow for one image.
- Run security, privacy, integration, and production smoke tests.
- Complete README and clean-environment reproduction guide.
- Push the public GitHub repository.

## Definition of done

Do not finish until the following checklist is satisfied or an external blocker is explicitly documented:

- [ ] Public GitHub repository exists at <code>https://github.com/rameshwx/cv-role-readiness</code> and is public.
- [ ] One Flutter Web application builds successfully and contains both public and administrator route areas.
- [ ] The application uses Clean Architecture, feature-first organization, Riverpod state/DI, immutable models, and GoRouter.
- [ ] Public visitor scanning works without registration or login.
- [ ] The browser performs only basic validation; server-side Poppler parses text and local English Tesseract provides bounded scanned-page OCR fallback.
- [ ] Protected, corrupt, oversized, excessive-page/pixel, and wrong-format files fail safely.
- [ ] All seven deterministic agents execute in the documented order.
- [ ] Evidence classifications and source references are visible and explainable.
- [ ] Score calculation is deterministic, bounded, versioned, and independently tested.
- [ ] Verification rejects unsupported or inconsistent results before display.
- [ ] CV data reaches the Node.js application/PostgreSQL only after consent as encrypted temporary job payloads, and never reaches server logs, analytics, PayPal, ads, URLs, or browser persistence.
- [ ] No permanent CV/result/history table or public API exists; only temporary encrypted `analysis_jobs` storage is present.
- [ ] The public catalog is versioned in PostgreSQL and fetched through an internal same-origin application route.
- [ ] No public or third-party API, API key, CORS API, API host, or public API documentation exists.
- [ ] A newly initialized database creates exactly one administrator account with username <code>rameshwx</code> and password <code>rameshwx</code>, with only an Argon2id hash stored.
- [ ] Administrator login works at <code>https://cv.uxi.asia/admin</code> using the username/password form.
- [ ] No JWT, bearer access token, refresh token, bootstrap token, magic-link login, or token-based administrator login exists.
- [ ] Administrator authentication uses a Secure, HttpOnly, SameSite server-side session cookie.
- [ ] The administrator can change the username and password from <code>/admin/account</code>.
- [ ] Username/password changes are atomic, audited without secrets, and revoke active sessions.
- [ ] No administrator registration, administrator CRUD, administrator list, multi-tenant identity, or administrator roles exist.
- [ ] Node.js session authorization and PostgreSQL RLS protect drafts, publication, requests, settings, metrics, audit logs, and account/session records.
- [ ] Public role requests work without attachments.
- [ ] Optional donation and ad controls do not affect access or scoring.
- [ ] At least 20 synthetic benchmark cases exist with gold labels.
- [ ] Baseline and final agent metrics and trajectories are generated.
- [ ] Improvement changelog contains measured decisions, including one removed experiment.
- [ ] Unit, widget, integration, privacy, security, migration, authentication, and evaluation tests pass.
- [ ] One root <code>Dockerfile</code> builds the Flutter bundle and Node.js application into one deployable application image.
- [ ] No separate frontend, API, proxy, or migration Dockerfiles and no Docker Compose deployment are required.
- [ ] One Coolify project contains the application and its PostgreSQL resource.
- [ ] The application is configured for <code>https://cv.uxi.asia</code> and <code>https://cv.uxi.asia/admin</code> with HTTPS.
- [ ] GitHub Actions build and deploy the single commit-SHA image.
- [ ] PostgreSQL is private, backed up, migration-safe, and covered by rollback guidance.
- [ ] README and clean-environment reproduction guide are complete.

## Final response required from the implementing agent

When the implementation is complete, provide:

1. Repository URL and confirmed visibility.
2. Commit SHA pushed to the default branch.
3. Production URL <code>https://cv.uxi.asia</code> and administrator URL <code>https://cv.uxi.asia/admin</code>, if deployed.
4. Local setup commands.
5. Test commands and results.
6. Evaluation commands and summary metrics.
7. PostgreSQL migration and Node.js application status.
8. Root Dockerfile build and one-Coolify-project deployment status.
9. Confirmation that the normal administrator login uses username/password, the initial credentials are <code>rameshwx</code>/<code>rameshwx</code>, and credentials can be changed in <code>/admin/account</code>.
10. Confirmation that no public or third-party API and no token-based administrator login were implemented.
11. Any remaining manual configuration or external blocker.
12. A short privacy verification summary proving that upload requires the exact consent, processing is temporary/encrypted, no CV data is persisted in browser storage or logs, and backup/email-provider retention limitations are stated accurately.

Be precise. Separate verified results from pending manual actions.
