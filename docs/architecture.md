# Architecture

The browser loads one Flutter bundle from the Fastify process. Catalog/config requests and admin operations use relative `/app/*` routes. PDF bytes flow only from the browser picker to locally served PDF.js and the in-memory deterministic workflow. Fastify serves static assets and internal application routes, while PostgreSQL remains private in the same Coolify project.

The workflow is ordered: parser → requirement planner → approved-alias normalizer → evidence investigator → bounded scorer → recommendation selector → verifier. Identical text, role, catalog version and engine version produce identical output. Verification checks rule uniqueness, score bounds and complete trajectory before results render.
