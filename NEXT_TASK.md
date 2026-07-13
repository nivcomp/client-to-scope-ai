# NEXT TASK: Client Portal Scope Project Status

## Last Completed

Client Portal scope items now include a short client-safe context label above the scope items table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal scope items show project, scope version/status, phase, item details, acceptance notes, and a short context label.
- Client Portal scope item rows do not yet show the parent project's client-safe status label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Client Portal client-visible scope item rows.

## Why This Matters

Scope items are tied to delivery status. Showing the parent project status helps clients understand whether each visible scope item belongs to waiting, active, or completed work without exposing supplier cost, agency margin, or internal delivery notes.

## Acceptance Criteria

- Client Portal scope item rows show the parent project's status label when project data is available.
- Client Portal scope item rows show a clear fallback when project data is missing.
- Existing Client Portal scope item project, scope, phase, item, and acceptance columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
