# NEXT TASK: Client Portal Scope Context Label

## Last Completed

Client Portal client-visible message rows now show the parent project's client-safe start rule with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal files and messages now show client-safe project status/start context.
- Client Portal shows client-visible scope items, but the scope items section does not yet include a short client-safe context label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add a short client-safe context label above the Client Portal scope items table.

## Why This Matters

Scope items are core to client approval and delivery understanding. A short context label will clarify what the client can see without exposing supplier costs, agency margin, or internal delivery notes.

## Acceptance Criteria

- Client Portal scope items section includes a short context label explaining the client-safe project and scope context shown.
- Existing Client Portal scope item project, scope, phase, item, and acceptance columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
