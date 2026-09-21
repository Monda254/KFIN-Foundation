# KFIN — Kenya Forensic Intelligence Network

KFIN Phase 0 is the controlled engineering foundation for a future national forensic intelligence, DNA and evidence-management platform.

## Run & Operate

- `pnpm --filter @workspace/kfin-console run dev` — run the Phase 0 foundation console
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm run format:check` — check formatting
- `pnpm run quality:ci` — run all mandatory quality gates
- `pnpm run security:secrets` — scan tracked source files for committed secrets
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env for the API: `PORT`; `DATABASE_URL` is only required when database-backed code is used.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/kfin-console/` — Phase 0 governance and quality status console
- `artifacts/api-server/` — shared Express foundation and health endpoint
- `lib/api-spec/openapi.yaml` — API contract source of truth
- `lib/db/src/schema/` — database schema source of truth; intentionally empty of business tables in Phase 0
- `docs/` — governance, architecture, development, operations and testing controls
- `scripts/` — repository-level validation utilities

## Architecture decisions

- Phase 0 deliberately exposes foundation status, not operational case, evidence, DNA or intelligence workflows.
- OpenAPI remains the API contract source of truth even for the initial health endpoint.
- Development and test data must be synthetic; no business tables are introduced before their approved phase.
- Quality gates fail closed and are never bypassed to create a false green result.

## Product

The console makes Phase 0 acceptance posture, governance evidence, repository boundaries, quality checks and deferred scope visible to authorized engineering reviewers. It is not an operational forensic system.

## User preferences

No additional user preferences recorded.

## Gotchas

- Treat the uploaded Phase 0 master prompt and the documents in `docs/` as governing sources.
- Run API code generation after every OpenAPI change.
- Do not add real forensic data, production credentials or operational domain tables during Phase 0.
- Do not mark the phase PASS unless all three sub-phase gates and final reconciliation are evidenced.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
