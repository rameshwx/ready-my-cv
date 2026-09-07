# Architecture decision record

## Decision

Ready My CV uses a feature-first Clean Architecture monorepo. Flutter presentation uses Riverpod-generated MVVM-style view-models and immutable Freezed state. Pure Dart packages own models, catalog validation, deterministic scoring, the seven-agent workflow, and parser contracts. Fastify is split into authentication, catalog, role-request, admin, shared error, and database-context modules.

## Why

The visitor workflow must remain local and deterministic, while catalog authoring and the singleton administrator require a private server boundary. Keeping interfaces in the domain layer allows fake parsers, repositories, and workflow engines to be injected through `ProviderScope` overrides without browser or database dependencies.

## Consequences

- Widgets never construct HTTP clients, repositories, PDF parsers, or engines.
- The browser retains CV bytes, text, evidence, results, and trajectories only in memory.
- PostgreSQL stores catalog, aggregate, request, audit, settings, and session data, never visitor CV material.
- Code generation is part of the clean-build contract.
- Production deployment remains one Flutter/Node application container plus one private PostgreSQL resource.
