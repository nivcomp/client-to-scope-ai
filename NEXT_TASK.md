# NEXT TASK: Client Portal Scope Approval Context Label

## Last Completed

Client Portal client-visible scope item rows now show the parent project's client-safe start rule with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal scope items show project, project status, project start rule, scope version/status, phase, item details, acceptance notes, and a short context label.
- Client Portal scope approvals show project, scope, approval, notes, and approved date, but do not yet include a short client-safe context label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add a short client-safe context label above the Client Portal scope approvals table.

## Why This Matters

Scope approvals are central to client sign-off. A short context label will clarify the approval information shown without adding approval actions or exposing supplier cost, agency margin, or internal scope notes.

## Acceptance Criteria

- Client Portal scope approvals section includes a short context label explaining the client-safe approval context shown.
- Existing Client Portal scope approval project, scope, approval, notes, and approved date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new approval action, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
