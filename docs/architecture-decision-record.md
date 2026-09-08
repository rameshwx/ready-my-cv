# Architecture decision record

## Decision

Ready My CV uses a feature-first Clean Architecture monorepo. Flutter presentation uses Riverpod-generated MVVM-style view-models and immutable Freezed state. Pure Dart packages own models, catalog validation, deterministic scoring, the seven-agent workflow, and parser contracts. Fastify is split into authentication, catalog, role-request, admin, analysis upload/queue, shared error, and database-context modules. A compiled `server_analysis_runner` package adapts structured server parser output to the existing Dart workflow.

## Why

The visitor workflow must remain deterministic and privacy-bounded, while real-world PDF compatibility, catalog authoring, queueing, and the singleton administrator require a private server boundary. Keeping interfaces in the domain layer allows repositories, fake parsers, and workflow engines to be injected through `ProviderScope` overrides without changing the scoring engine. The runner prevents a second TypeScript scoring implementation from drifting from the canonical Dart engine.

## Consequences

- Widgets never construct HTTP clients, repositories, PDF parsers, or engines.
- The browser retains the handle, email, bytes, and result only in ephemeral memory; no browser persistence or permanent report URL exists.
- PostgreSQL stores catalog, aggregate, request, audit, settings, session data, and encrypted temporary analysis payloads, with RLS and scheduled purge.
- Code generation is part of the clean-build contract.
- Production deployment remains one Flutter/Node application container plus one private PostgreSQL resource.
