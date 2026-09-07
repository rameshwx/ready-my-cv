# Architecture

The browser loads one Flutter bundle from the Fastify process. Catalog/config requests and admin operations use relative `/app/*` routes. PDF bytes flow only from the browser picker to locally served PDF.js and the in-memory deterministic workflow. Fastify serves static assets and internal application routes, while PostgreSQL remains private in the same Coolify project.

The workspace is feature-first: `apps/web/lib/features` owns landing, scan/results, role request, public information, and administrator authentication/dashboard/catalog/publication/request/audit/account/settings screens. `apps/web/lib/app/providers.dart` is the Riverpod composition root; widgets receive contracts and never instantiate clients, repositories, parsers, or engines.

The workflow is ordered: parser → requirement planner → approved-alias normalizer → evidence investigator → bounded scorer → recommendation selector → verifier. Identical text, role, catalog version and engine version produce identical output. Verification checks rule uniqueness, score bounds, evidence page/span boundaries, and complete trajectory before results render. A cancellation token clears active bytes and prevents subsequent stages; the orchestrator allows one bounded corrective verification retry.
