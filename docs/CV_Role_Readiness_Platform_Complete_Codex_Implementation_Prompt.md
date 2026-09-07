
# Codex Implementation Prompt: CV Role-Readiness Platform

Copy this entire prompt into Codex to implement the product.

---

## Role

Act as the lead product engineer, Flutter architect, Node.js API engineer, PostgreSQL engineer, DevOps engineer, security reviewer, and QA engineer for this project. Build the complete product described below. Do not stop at a visual prototype or a scaffold. Implement the working applications, shared domain engine, database, Node.js API, tests, evaluation harness, Docker deployment, CI/CD, documentation, and GitHub repository setup.

Work in small, verifiable increments. After each major phase, run the relevant checks and fix failures before continuing. Do not claim that a feature is complete unless it is implemented, tested, and documented.

If an external credential, PostgreSQL instance, VPS, or GitHub permission is unavailable, continue implementing everything that can be completed locally, leave an explicit configuration placeholder, and report the exact remaining manual action. Never fabricate a successful deployment, repository, migration, or test result.

## Product

Build **CV Role Readiness**, a free and privacy-first web application that helps a job seeker compare a text-based PDF CV with a selected job role. It produces a deterministic Role Readiness Score from 0 to 100, explains the score through traceable evidence, and provides truthful improvement guidance.

The central product insight is:

> A CV should not receive full credit because a keyword appears. It should receive credit only when the CV contains credible, traceable evidence that the applicant used that skill.

This is an applicant guidance tool. It is not an employer applicant-tracking system, does not predict an employer's actual ATS score, does not rank candidates, and does not guarantee an interview or job offer.

The product must work without an LLM, an AI API, OCR, or a model server. The agentic behavior must be implemented as a coordinated, deterministic software-agent workflow with explicit state, tools, decisions, verification, retries, and trajectories.

## Non-negotiable requirements

1. Use Flutter Web for both the public application and the administrator application.
2. Use a monorepo with two separate Flutter Web applications and shared Dart packages.
3. Use Clean Architecture with feature-first organization, immutable state, clear domain boundaries, dependency injection, and testable interfaces.
4. Use Riverpod for state management and dependency injection. Use generated providers where appropriate. Do not mix Riverpod with BLoC, GetX, or a second service-locator framework.
5. Use GoRouter for navigation and protected administrator routes.
6. Use PostgreSQL as the authoritative database, a Node.js LTS/TypeScript API as the only backend application boundary, versioned SQL migrations, and PostgreSQL Row-Level Security as defense in depth.
7. Never connect Flutter directly to PostgreSQL. Never expose database credentials, JWT/session-signing secrets, admin bootstrap credentials, or other server secrets in browser code.
8. Process the visitor's PDF entirely in the browser using PDF.js through Dart/JavaScript interop.
9. Never upload, store, cache, log, back up, hash, fingerprint, or transmit the PDF, extracted CV text, file name, individual score, individual recommendations, or detailed visitor analysis.
10. Do not create any upload-CV, parse-CV, extract-PDF, score-CV, save-result, or download-CV endpoint.
11. Do not create public accounts, registration, public login, subscriptions, pricing, paywalls, premium features, or feature limits.
12. The only authenticated product area is the administrator portal at <code>/admin</code>.
13. Use Docker on the VPS and GitHub Actions for CI/CD. Use GitHub Container Registry for immutable image tags.
14. Include at least 20 safe synthetic evaluation cases with gold labels, a fair keyword baseline, final-agent results, trajectories, metrics, and an improvement changelog.
15. All final results must pass deterministic verification before the UI displays them as complete.

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
- Do not commit secrets, <code>.env</code> files, database passwords, JWT/session-signing secrets, admin bootstrap tokens, SSH keys, or production credentials.
- If GitHub authentication is unavailable, finish the local implementation and report the exact authentication action required. Do not claim the repository was created.

Suggested initial repository metadata:

- Name: <code>cv-role-readiness</code>
- Visibility: public
- Description: <code>Privacy-first deterministic CV role-readiness analysis with auditable software agents</code>
- Default branch: <code>main</code>
- License: choose a permissive license only after checking the licenses of all included dependencies; document the choice in <code>LICENSE</code> and <code>README.md</code>.

## Approved technology stack

| Layer | Technology |
| --- | --- |
| Public web application | Flutter Web and Dart |
| Administrator web application | Separate Flutter Web and Dart application |
| Architecture | Clean Architecture, feature-first, immutable state |
| State and DI | Riverpod, preferably with <code>riverpod_generator</code> where stable |
| Navigation | GoRouter |
| Immutable models | Freezed and JSON serialization, or an equally strongly typed approach |
| Design system | Shared Flutter package using Material 3 and custom theme tokens |
| PDF extraction | PDF.js loaded locally in the browser through Dart JavaScript interop |
| Shared business logic | Pure Dart packages with no Flutter or browser dependency where possible |
| Agent workflow | Deterministic typed Dart workflow engine |
| Backend application | Node.js LTS, TypeScript, Fastify, and typed HTTP route modules |
| Database | PostgreSQL |
| Database access | `pg`/node-postgres with parameterized SQL, transactions, and a versioned migration runner |
| Administrator authentication | Application-managed auth in the Node.js API using Argon2id password hashes, short-lived access tokens, and rotating refresh sessions |
| API | Versioned Node.js/TypeScript HTTP API; Flutter never connects directly to PostgreSQL |
| Authorization | Node.js API role authorization plus PostgreSQL Row-Level Security defense in depth |
| Migrations | SQL migrations executed by a Node.js migration command such as `node-pg-migrate` |
| Local development | Docker Compose, PostgreSQL, Node.js, and the project package manager |
| Production deployment | Docker containers on the VPS |
| Container registry | GitHub Container Registry |
| CI/CD | GitHub Actions |
| Reverse proxy | Caddy, Nginx, or the existing VPS platform proxy, with HTTPS |
| DNS/TLS | Cloudflare and HTTPS |
| Monitoring | Existing VPS monitoring such as Uptime Kuma |
| LLM | None |

Use current stable versions that are mutually compatible at implementation time. Record the selected Flutter, Dart, Node.js, npm/pnpm, PostgreSQL, Docker, and browser versions in the reproduction guide. Do not introduce a dependency merely because it is popular. Every dependency must have a clear purpose, a compatible license, and automated checks where practical.

## Architecture

~~~mermaid
flowchart TD
    Visitor[Visitor browser] --> Public[Flutter public web app]
    Admin[Administrator at /admin] --> AdminApp[Flutter admin web app]
    Public --> Pdf[Local PDF.js adapter]
    Pdf --> Agents[Local Dart agent orchestrator]
    Agents --> Result[Local result state]
    Public --> Catalog[Node.js public catalog API]
    AdminApp --> AdminApi[Node.js admin API]
    AdminApi --> Auth[Application authentication and role middleware]
    Catalog --> Database[(PostgreSQL)]
    AdminApi --> Database
~~~

The CV document and extracted text may flow only between the browser file picker, the local PDF.js adapter, the local agent workflow, and the in-memory result view. They must never flow to the Node.js API, PostgreSQL, server logs, analytics, ad providers, PayPal, browser storage, service-worker caches, URLs, or backups.

## Monorepo structure

Create a maintainable monorepo similar to this. Adjust names only when there is a strong technical reason, and document any change.

~~~text
cv-role-readiness/
├── apps/
│   ├── public_web/
│   │   ├── lib/
│   │   │   ├── app/
│   │   │   │   ├── bootstrap/
│   │   │   │   ├── router/
│   │   │   │   ├── theme/
│   │   │   │   └── app.dart
│   │   │   ├── core/
│   │   │   │   ├── config/
│   │   │   │   ├── errors/
│   │   │   │   ├── localization/
│   │   │   │   ├── logging/
│   │   │   │   ├── network/
│   │   │   │   └── providers/
│   │   │   └── features/
│   │   │       ├── landing/
│   │   │       ├── scan/
│   │   │       ├── results/
│   │   │       ├── role_request/
│   │   │       ├── privacy/
│   │   │       └── terms/
│   │   ├── test/
│   │   └── web/
│   └── admin_web/
│       ├── lib/
│       │   ├── app/
│       │   ├── core/
│       │   └── features/
│       │       ├── authentication/
│       │       ├── dashboard/
│       │       ├── roles/
│       │       ├── rule_versions/
│       │       ├── catalog_publication/
│       │       ├── role_requests/
│       │       ├── audit_logs/
│       │       ├── administrators/
│       │       └── settings/
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
│   │   │   ├── auth/
│   │   │   ├── catalog/
│   │   │   ├── roles/
│   │   │   ├── role_requests/
│   │   │   ├── metrics/
│   │   │   ├── audit/
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
│   ├── docker/
│   │   ├── public-web.Dockerfile
│   │   ├── admin-web.Dockerfile
│   │   ├── api.Dockerfile
│   │   └── nginx.conf
│   ├── compose/
│   │   ├── docker-compose.yml
│   │   ├── docker-compose.production.yml
│   │   └── .env.example
│   ├── scripts/
│   │   ├── deploy.sh
│   │   ├── health-check.sh
│   │   └── rollback.sh
│   └── cloudflare/
├── docs/
│   ├── architecture.md
│   ├── local-development.md
│   ├── reproduction-guide.md
│   ├── privacy-model.md
│   ├── security-model.md
│   ├── postgresql-api-operations.md
│   ├── evaluation-methodology.md
│   ├── improvement-changelog.md
│   ├── agent-trajectories/
│   └── decisions/
├── .github/
│   └── workflows/
│       ├── pull-request.yml
│       ├── build.yml
│       └── deploy.yml
├── README.md
├── LICENSE
├── melos.yaml or pub workspace configuration
└── analysis_options.yaml
~~~

## Flutter architecture rules

Apply these rules to both Flutter applications and every shared package.

### Layers

- Presentation: widgets, screens, routing, UI state rendering, accessibility, and user interaction only.
- Application: Riverpod notifiers/controllers, workflow coordination, commands, and use cases.
- Domain: entities, value objects, repository contracts, policies, scoring, agents, and domain errors.
- Data: Node.js API data sources, DTOs, mappers, PDF.js adapter, configuration, and repository implementations.

Widgets must not contain scoring logic, direct Node.js API queries, raw HTTP calls, PDF parsing, or catalog validation. Providers must depend on abstractions and compose concrete implementations in one bootstrap/DI location.

### Dependency injection

- Use Riverpod providers as the dependency graph.
- Define abstract repository and service interfaces in the domain layer.
- Provide concrete implementations in the data layer.
- Keep the public app's local scanner dependencies separate from remote catalog/config dependencies.
- Use <code>ProviderScope</code> overrides in tests and previews.
- Make every external dependency replaceable with a fake or in-memory implementation.
- Do not instantiate repositories or clients inside widgets.
- Do not use global mutable singletons.

### State management

- Use immutable state models.
- Use <code>AsyncValue</code> or explicit sealed states for loading, success, failure, and cancellation.
- Represent the scanner as an explicit state machine: idle, loadingCatalog, selectingFile, validatingFile, extracting, analyzing, verifying, completed, failed, cancelled.
- Disable duplicate actions while a run is active.
- Support cancellation and clear all volatile CV state when the user starts another scan or leaves the result flow.
- Keep UI state separate from domain workflow state.
- Do not store the selected PDF, CV text, or result in <code>localStorage</code>, IndexedDB, URL parameters, cookies, or service-worker storage.

### Package boundaries

The scoring engine, agent engine, catalog models, validation package, and test fixtures must be usable by the evaluation CLI without importing Flutter. Shared packages must not depend on application widgets.

## Public application

Implement these routes:

| Route | Screen |
| --- | --- |
| <code>/</code> | Landing page and product introduction |
| <code>/scan</code> | Role selection, PDF picker, local analysis workflow |
| <code>/results</code> | In-memory result view, never a server-backed result URL |
| <code>/request-role</code> | Missing-role request form without attachments |
| <code>/privacy</code> | Privacy policy and third-party provider disclosures |
| <code>/terms</code> | Terms, limitations, and non-hiring disclaimer |
| <code>/admin</code> | Administrator application entry point or redirect to the admin build |

### Landing page content

Before the visitor selects a file, clearly show:

- 100% free service.
- No account or sign-in required.
- CV is read privately in the browser.
- CV is not uploaded, stored, or saved anywhere by the service.
- The score is role-specific guidance, not an employer's ATS score.
- The visitor selects a target role before scanning.

Display this privacy message near the file picker:

> Your CV is read privately in this browser. We do not upload, store, or save your CV data anywhere.

Display this disclaimer on the result view:

> This is guidance based on the role rules selected here. It is not an employer's ATS score and does not guarantee interviews or job offers.

### Scan flow

1. Fetch the current published catalog from the Node.js API.
2. Search and select a supported role.
3. Select an optional seniority level.
4. Pick a local PDF or drop it into the local file zone.
5. Validate file type, file size, page count, encryption status, and selectable text locally.
6. Extract text locally through PDF.js.
7. Run the deterministic agent workflow in the browser.
8. Show progress such as Parsing, Analyzing requirements, Investigating evidence, Scoring, Verifying, and Complete.
9. Show the explainable result only after verification succeeds.
10. Provide <code>Analyze another CV</code>, which clears the document, text, trajectory, and result from memory.

Initial limits:

- PDF only.
- Maximum 10 MB.
- Maximum 25 pages.
- Selectable text required.
- No OCR, DOCX, image-only PDF fallback, password bypass, server upload, or cloud document processing.

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

Do not provide cloud save, shareable result URLs, result uploads, result history, or automatic CV rewriting.

### Role request form

Accept only:

- Requested role title: required, length-limited.
- Seniority: optional.
- Industry/context: optional, length-limited.
- Desired skills or requirements: optional, length-limited.
- Reply email: optional and validated.
- Anti-spam proof: honeypot plus server-side rate limiting and CAPTCHA/equivalent if configured.

Do not accept attachments, CV text, PDFs, job-description files, or visitor accounts. Return a neutral success response that does not expose internal workflow details.

### Donations and advertising

Support an optional PayPal tip link and optional advertisements only outside the scan flow.

- Tipping never unlocks features or changes a score.
- Store no payment or donor data.
- Ads must never appear inside the file picker, during extraction, during scoring, or over the result.
- Disable ads on result routes if the provider cannot be isolated from CV-related content.
- Never pass CV text, file name, score details, or recommendations to PayPal or an ad provider.
- Make both integrations feature-flagged and easy to disable.

## Administrator application

Build the admin application as a separate Flutter Web target with the same shared design system and domain models.

Canonical entry point:

~~~text
/admin
~~~

Unauthenticated users see only the admin login page. Authenticated users can access the portal according to their administrator role.

### Authentication

- Use the Node.js API's application-managed authentication for administrator login, session refresh, logout, and revocation.
- Store only Argon2id password hashes in PostgreSQL; never store plaintext passwords.
- Issue short-lived access tokens and rotate opaque refresh tokens stored only as hashes in PostgreSQL. Keep the access token in the admin app's memory and use a Secure, HttpOnly, SameSite refresh cookie; never put tokens in <code>localStorage</code> or IndexedDB.
- Use HTTPS in production.
- Use protected providers and GoRouter redirects.
- Handle session expiry and refresh failures gracefully.
- Rate-limit failed logins by IP and account identifier without logging raw credentials.
- Never expose database credentials, JWT/session-signing secrets, or admin bootstrap tokens in either Flutter bundle.
- Provide a private CLI/bootstrap command for creating the first administrator; do not create public registration or password-reset endpoints without an explicit protected design.

### Admin roles

Implement at least:

- <code>super_admin</code>: administrators, settings, catalog publication, audit logs, all content workflows.
- <code>content_admin</code>: roles, skills, aliases, rules, draft validation, role requests.
- <code>analytics_viewer</code>: aggregate metrics and health data only.

### Admin screens

Implement:

- Login/logout/session state.
- Dashboard with aggregate metrics only.
- Role list, search, filter, create, edit, deactivate, and archive.
- Rule version list and detail editor.
- Skill, alias, phrase, exclusion, weight, category, and section-rule editor.
- Draft validation with actionable errors.
- Draft preview against bundled synthetic CV text only.
- Diff against the currently published catalog.
- Publish immutable catalog version.
- Publication history and safe rollback by republishing a valid previous snapshot.
- Role-request triage with statuses: new, reviewing, planned, added, rejected, duplicate.
- Safe audit-log viewer.
- Administrator management for super administrators.
- Public settings such as donation URL and ad flags.

The admin portal must never show visitor CV files, extracted CV text, file names, document hashes, individual scores, detailed visitor results, or visitor-level analysis history.

## Local PDF.js implementation

Create a dedicated abstraction such as:

~~~dart
abstract interface class LocalPdfParser {
  Future<PdfParseResult> parse(Uint8List bytes);
}
~~~

Implement the production web adapter using PDF.js loaded locally as a static asset. Use Dart JavaScript interop, not a server endpoint. The adapter must:

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

## Deterministic agent system

Implement the following seven bounded software agents. They are logical software components, not LLM prompts and not separate microservices.

### 1. CV Parser Agent

Goal: convert the local PDF into a structured CV representation.

Tools:

- Local PDF.js adapter.
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
- No forbidden CV data was passed to any remote repository or client.

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

The public app may display this trajectory during the current session, but never uploads or persists it. Evaluation trajectories may be exported because they use synthetic CVs only.

## Rule catalog and seed data

Use PostgreSQL as the authoritative authoring store. A published catalog must be an immutable, versioned JSON snapshot downloaded by the public browser through the Node.js API.

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

Create versioned SQL migrations, indexes, constraints, Row-Level Security policies, seed data, and tests for at least these tables. Run migrations through the Node.js migration command and use a non-superuser application database role at runtime:

| Table | Purpose |
| --- | --- |
| <code>admin_users</code> | Administrator identity, email, Argon2id password hash, role, active status, and audit identity |
| <code>admin_sessions</code> | Hashed rotating refresh tokens, expiry, last-used time, and revocation state; never store raw refresh tokens |
| <code>job_roles</code> | Stable identity and metadata for supported roles |
| <code>role_rule_versions</code> | Draft/published/archived versions for a role and seniority |
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

- The Node.js API owns administrator authentication. Store only Argon2id password hashes and never plaintext passwords or raw refresh tokens.
- Never create a visitor/user table for public scanning.
- Enable RLS on every application table. The API must connect with a non-owner, non-superuser role and set transaction-local request identity (for example, <code>app.user_id</code> and <code>app.user_role</code>) before protected queries; policies must use that identity.
- Flutter must never connect directly to PostgreSQL. Public read access is exposed only through allowlisted Node.js API queries for the current published catalog and safe public settings.
- Drafts, unpublished rules, role requests, audit logs, metrics, and administrator records are private and protected by both API authorization and RLS.
- Use foreign keys, unique constraints, check constraints, indexes, and transactions.
- Published snapshots are immutable.
- Catalog publication must atomically validate, snapshot, mark the version published, and create an audit event.
- PostgreSQL must not be exposed on a public port in production.
- Do not create any table for CV files, CV text, individual results, or visitor history.

## Node.js API

Implement the following logical operations in a versioned Node.js/TypeScript API backed by parameterized PostgreSQL queries and transactions. Use Fastify or an equally typed HTTP framework, a PostgreSQL client such as <code>pg</code>, explicit request/response schemas, and structured redacted logging. Flutter applications must call the API through repository abstractions; they must never call PostgreSQL directly.

### Public operations

- <code>GET /api/v1/public/catalog</code>: current published catalog JSON, version, roles, and rules required for local analysis.
- <code>GET /api/v1/public/config</code>: safe public configuration such as donation URL and ad flags.
- <code>POST /api/v1/public/role-requests</code>: validated role request with no attachments or CV data.
- <code>POST /api/v1/public/metrics</code>: optional allowlisted aggregate event with no CV content.

### Administrator operations

- <code>POST /api/v1/admin/auth/login</code>, <code>POST /api/v1/admin/auth/logout</code>, <code>POST /api/v1/admin/auth/refresh</code>, and <code>GET /api/v1/admin/auth/session</code>.
- Dashboard aggregate metrics and service health.
- Role CRUD and activation/archive operations.
- Draft rule-version CRUD.
- Draft validation.
- Catalog diff.
- Catalog publication.
- Safe rollback by republishing an earlier valid snapshot.
- Role-request triage.
- Audit-log viewing.
- Administrator management.
- Public settings management.

Recommended API route modules:

- <code>public-catalog</code> and <code>public-config</code>
- <code>role-requests</code> and <code>metrics</code>
- <code>auth</code>
- <code>roles</code>, <code>rule-versions</code>, and <code>catalog-publication</code>
- <code>admin-dashboard</code>, <code>administrators</code>, <code>audit-logs</code>, and <code>settings</code>

Node.js API requirements:

- Validate access tokens, active administrator status, and roles for every protected route. Do not trust role claims without checking the current administrator record when authorization is sensitive.
- Use parameterized SQL only. Use transaction boundaries for publication, role changes, settings changes, and audit events, and never use a superuser or <code>BYPASSRLS</code> database connection in request handlers.
- Handle pre-authentication refresh-session lookup with a narrowly scoped query or database function that can inspect only a hash and session state; never disable RLS broadly to implement login or refresh.
- Hash administrator passwords with Argon2id. Generate short-lived access tokens, rotate refresh tokens, store only refresh-token hashes, and revoke sessions on logout or administrator deactivation.
- Never accept a PDF, extracted text, document name, score, recommendation, or trajectory.
- Accept JSON only for defined routes. Reject multipart, octet-stream, unknown fields, file-like fields, and request bodies above a small documented limit (for example, 128 KiB).
- Do not log request bodies containing free text, raw tokens, authorization headers, email addresses, or database errors.
- Rate-limit public role requests and metric events.
- Rate-limit failed administrator logins with a shared or PostgreSQL-backed limiter so limits remain effective across API instances.
- Normalize and length-limit public free-text fields.
- Avoid returning internal database details.
- Return typed JSON error envelopes with safe correlation IDs.

Keep these values server-side and document them in <code>.env.example</code>: <code>DATABASE_URL</code>, <code>JWT_ACCESS_SECRET</code>, <code>REFRESH_TOKEN_PEPPER</code>, <code>ADMIN_BOOTSTRAP_TOKEN</code> where needed for one-time setup, CORS allowlists, rate-limit settings, and CAPTCHA verification secrets. A public API base URL may be compiled into Flutter; no database or signing secret may be.

Provide working API commands similar to:

~~~bash
npm --prefix api ci
npm --prefix api run db:migrate
npm --prefix api run db:seed
npm --prefix api run dev
npm --prefix api test
~~~

The migration and seed commands must target an explicitly configured PostgreSQL instance and must never run against production accidentally. Document how to create the private first administrator with the API bootstrap CLI.

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

- Keep PDF bytes and extracted text in scoped in-memory objects.
- Do not put CV data in URLs, query strings, fragments, cookies, local storage, IndexedDB, service-worker cache, analytics payloads, error reports, or third-party requests.
- Use redacted logs only. In production, do not log document metadata that can identify the visitor's file.
- Clear buffers, parsed pages, trajectory, and result state when a scan is reset.
- Disable or isolate ads on scan and result routes.
- Do not send the PDF to the Node.js API even when catalog fetching fails.

### Server privacy

- Do not define CV-related database tables or endpoints.
- Reject unexpected file uploads at the reverse proxy and Node.js API layers.
- Redact secrets, tokens, authorization headers, request bodies, email addresses where possible, and all CV-like content from logs.
- Use CSP, HTTPS, secure headers, strict CORS, and appropriate frame/referrer policies.
- Keep PostgreSQL internal to the Docker network.
- Store production secrets only in protected GitHub Actions or VPS configuration.

### Privacy tests

Add automated tests that:

- Intercept browser network calls during a scan.
- Assert that no request body, URL, header, or third-party request contains known synthetic CV markers.
- Assert that no file upload request occurs.
- Assert that reset clears the in-memory result and trajectory.
- Search source code and Node.js API route definitions for forbidden CV endpoint names.
- Verify no database migration creates CV storage or visitor result tables.

## Design and accessibility

Create a polished, calm, trustworthy Material 3 interface. Prioritize clarity and privacy over visual effects.

Shared design system requirements:

- Responsive layouts for phone, tablet, and desktop widths.
- Consistent colors, typography, spacing, cards, buttons, input fields, badges, tables, dialogs, and error states.
- Visible progress and cancellation states.
- Strong visual distinction between strong evidence, weak evidence, mention-only evidence, missing evidence, and contradictory evidence.
- Do not use color alone to communicate a classification.
- Keyboard navigation and visible focus states.
- Semantic labels for file pickers, charts, tables, and status changes.
- Screen-reader-friendly result summaries.
- WCAG 2.1 AA intent for contrast, touch targets, focus order, and understandable errors.
- No deceptive “guaranteed interview” or “official ATS” language.

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
- <code>flutter analyze</code> for both applications.
- Unit tests for all domain models, normalizers, matchers, scoring, recommendations, verification, and failures.
- Widget tests for public and admin screens.
- Browser integration tests for PDF selection, scan states, results, reset, routing, and accessibility.
- Golden tests for important responsive states where stable.
- Test cancellation and duplicate-action prevention.

### PostgreSQL and Node.js API

- Migration and seed checks.
- RLS policy tests.
- Application authentication and role authorization tests.
- Catalog validation and publication transaction tests.
- Immutable snapshot tests.
- Role-request validation/rate-limit tests.
- Audit-log tests.
- Node.js/TypeScript unit and integration tests against an ephemeral PostgreSQL database.

### Privacy and security

- Network interception tests proving CV markers never leave the browser.
- Forbidden-route/static scan tests.
- Secret scanning and dependency audit in CI.
- CSP and security-header verification.
- Admin route guard tests.
- Database credential and server-secret exclusion tests.

### End-to-end

Cover:

1. Public role selection and local PDF scan.
2. Strong/weak/mention-only/missing/contradictory evidence rendering.
3. Invalid and unsupported PDF errors.
4. Role request submission without attachment.
5. Admin login and logout.
6. Draft rule editing and validation.
7. Catalog publication and public catalog refresh.
8. Role-request triage.
9. Aggregate dashboard without visitor-level data.

## Docker and VPS deployment

Create production-ready Dockerfiles and Compose configuration.

Required services:

- Public Flutter Web static server.
- Admin Flutter Web static server.
- Node.js API service.
- PostgreSQL database service.
- Reverse proxy with HTTPS routing.
- Uptime/health integration.

PostgreSQL requirements:

- Use the official PostgreSQL image for the selected PostgreSQL version and run the checked-in SQL migrations through the Node.js migration command.
- Do not expose PostgreSQL port <code>5432</code> publicly.
- Use internal Docker networks.
- Persist only PostgreSQL application data and configuration that is explicitly required.
- Run the API and migration job as non-root containers with separate least-privilege database roles where practical.
- Do not mount any directory intended for CV uploads because no CV upload exists.

Frontend routing requirements:

- Serve the public Flutter app at <code>/</code>.
- Serve the administrator Flutter app at <code>/admin/</code> with the correct Flutter base href and SPA fallback.
- Route <code>/api/</code> traffic to the Node.js API service; do not expose PostgreSQL to the browser.
- Use HTTPS, compression, security headers, request-size limits, strict CORS, and a JSON-only API policy.
- Configure the reverse proxy and API to reject multipart and file-upload requests and to return safe health responses from <code>/health/live</code> and <code>/health/ready</code>.

Provide <code>.env.example</code> files with safe placeholder names, never real values. Document required production variables and where they belong.

## GitHub Actions CI/CD

### Pull request workflow

Run:

- Formatting checks.
- Flutter analysis.
- Dart unit tests.
- Flutter widget/integration tests where available.
- Node.js lint, type checks, and unit/integration tests.
- PostgreSQL migration and seed checks against an ephemeral database.
- RLS policy and API authorization tests.
- Privacy/static forbidden-route checks.
- Evaluation baseline/final tests.
- Dependency and secret scans.

### Build workflow

On merge to <code>main</code>:

1. Run the complete test suite.
2. Build the public Flutter Web application.
3. Build the admin Flutter Web application.
4. Build the Node.js API and its Docker image.
5. Build the public and admin Docker images.
6. Tag each image with the Git commit SHA.
7. Push images to GHCR.
8. Publish release metadata.

Suggested image names:

~~~text
ghcr.io/rameshwx/cv-role-readiness-public-web:<commit-sha>
ghcr.io/rameshwx/cv-role-readiness-admin-web:<commit-sha>
ghcr.io/rameshwx/cv-role-readiness-api:<commit-sha>
~~~

### Deployment workflow

On an approved merge or manual dispatch:

1. Connect to the VPS using protected GitHub secrets or an approved Coolify webhook.
2. Pull the exact commit-SHA image tags.
3. Run the API migration job against the internal PostgreSQL service and apply checked-in migrations safely.
4. Restart or roll out the Node.js API and only changed frontend services.
5. Run public, admin, API, HTTPS, database, and privacy health checks.
6. Preserve the previous deployment if verification fails.
7. Record deployed commit, image tags, catalog version, migration status, and backup status.

Never deploy only a mutable <code>latest</code> tag. Never print secrets in workflow logs.

Required workflow files:

~~~text
.github/workflows/pull-request.yml
.github/workflows/build.yml
.github/workflows/deploy.yml
~~~

## Documentation

Create a README that includes:

- Product purpose and intended user.
- The privacy promise and its technical enforcement.
- Why the system is agentic without an LLM.
- Architecture diagram.
- Repository structure.
- Local setup.
- PostgreSQL and Node.js API setup, migrations, and seed data.
- Admin bootstrap instructions.
- Public and admin development commands.
- Test commands.
- Evaluation commands and interpretation.
- Docker/VPS deployment.
- GitHub Actions secrets.
- Rollback and backup guidance.
- Limitations and future work.
- Dependency licenses.

Create a reproduction guide that starts from a clean environment and includes exact versions, commands, expected outputs, synthetic test-data locations, trajectory inspection, baseline comparison, and privacy verification steps. It must not require a private CV or private credentials.

Create an architecture decision record explaining:

- Why local deterministic processing was selected.
- Why the product does not use an LLM.
- Why Riverpod is used for state and DI.
- Why PostgreSQL and a Node.js API are used as the backend.
- How privacy is enforced.
- How the public catalog is versioned and published.

## Delivery phases

Implement in this order, but continue through every phase in the same task unless an external permission is genuinely blocking progress.

### Phase 1: Foundation

- Create the Git repository and monorepo.
- Configure Flutter apps and shared packages.
- Add Clean Architecture, Riverpod DI, GoRouter, immutable models, linting, and formatting.
- Add the Node.js API, PostgreSQL migrations, RLS, seed data, application-auth skeleton, and health endpoints.
- Add Docker and environment templates.
- Add CI checks and health endpoints.

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

### Phase 4: Public application

- Implement landing, scan, results, request, privacy, and terms routes.
- Integrate local PDF.js.
- Integrate catalog fetch without CV data.
- Implement responsive accessible UI and privacy messaging.
- Add PayPal/ad feature flags outside the scan flow.

### Phase 5: Administrator application

- Implement Node.js API administrator login/logout, token refresh, revocation, and private bootstrap flow.
- Implement route protection and role authorization.
- Implement dashboard, catalog editor, validation, preview, publication, rollback, requests, audit logs, administrators, and settings.

### Phase 6: Evaluation and evidence

- Add 20 or more synthetic cases and gold labels.
- Implement baseline and final runners.
- Generate metrics, reports, and trajectories.
- Complete the improvement changelog.

### Phase 7: Operations and release

- Complete Docker Compose and reverse-proxy configuration.
- Complete GitHub Actions build/deploy/rollback workflow.
- Run security, privacy, integration, and production smoke tests.
- Complete README and clean-environment reproduction guide.
- Push the public GitHub repository.

## Definition of done

Do not finish until the following checklist is satisfied or an external blocker is explicitly documented:

- [ ] Public GitHub repository exists at <code>https://github.com/rameshwx/cv-role-readiness</code> and is public.
- [ ] Two separate Flutter Web applications build successfully.
- [ ] Both applications use Clean Architecture, feature-first organization, Riverpod state/DI, immutable models, and GoRouter.
- [ ] Public visitor scanning works without registration or login.
- [ ] Text-based PDFs are parsed locally by PDF.js.
- [ ] Scanned, protected, corrupt, oversized, and wrong-format files fail safely without server fallback.
- [ ] All seven deterministic agents execute in the documented order.
- [ ] Evidence classifications and source references are visible and explainable.
- [ ] Score calculation is deterministic, bounded, versioned, and independently tested.
- [ ] Verification rejects unsupported or inconsistent results before display.
- [ ] No CV data or visitor result data reaches the Node.js API, PostgreSQL, server logs, storage, analytics, PayPal, ads, URLs, or browser persistence.
- [ ] No forbidden CV endpoint or database table exists.
- [ ] Public catalog is versioned in PostgreSQL and fetched from a published snapshot through the Node.js API.
- [ ] Admin login works at <code>/admin</code>.
- [ ] Node.js API authorization and PostgreSQL RLS protect drafts, publication, requests, settings, metrics, and audit logs.
- [ ] Administrators can edit, validate, preview, publish, and audit catalog versions.
- [ ] Public role requests work without attachments.
- [ ] Optional donation and ad controls do not affect access or scoring.
- [ ] At least 20 synthetic benchmark cases exist with gold labels.
- [ ] Baseline and final agent metrics and trajectories are generated.
- [ ] Improvement changelog contains measured decisions, including one removed experiment.
- [ ] Unit, widget, integration, privacy, security, migration, and evaluation tests pass.
- [ ] Docker images build reproducibly with commit-SHA tags.
- [ ] GitHub Actions run CI and have a protected deployment workflow.
- [ ] VPS deployment configuration includes HTTPS, internal database networking, health checks, backups, and rollback guidance.
- [ ] README and clean-environment reproduction guide are complete.

## Final response required from the implementing agent

When the implementation is complete, provide:

1. Repository URL and confirmed visibility.
2. Commit SHA pushed to the default branch.
3. Public and administrator URLs, if deployed.
4. Local setup commands.
5. Test commands and results.
6. Evaluation commands and summary metrics.
7. PostgreSQL migration and Node.js API status.
8. Docker/VPS deployment status.
9. Any remaining manual configuration or external blocker.
10. A short privacy verification summary proving that the CV never leaves the browser.

Be precise. Separate verified results from pending manual actions.
