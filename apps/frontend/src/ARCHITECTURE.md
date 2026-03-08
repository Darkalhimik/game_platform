# Frontend Structure (Scalable)

This frontend follows a layered module structure for growth:

- `app/` - Next.js routes and page-level composition only.
- `shared/` - reusable UI primitives and cross-domain utilities.
- `entities/` - domain entities and core business types (for example, `game`).
- `features/` - user actions and business capabilities (filters, search, sorting, auth flows).
- `widgets/` - larger composed UI blocks built from `entities`, `features`, and `shared`.

## Current Conventions

1. Import UI from `@/shared/ui`.
2. Import game domain types/data from `@/entities`.
3. Keep page files thin: delegate pipeline logic to `features/*/model`.
4. Export each module through `index.ts` (public API) and avoid deep imports across layers.

## Migration Rule

Legacy modules under `game-system/` remain as compatibility layer for now.
New development should prefer `entities/`, `features/`, and `shared/` paths.
