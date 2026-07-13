# NEXT TASK: Client Portal Scope Start Rule

## Last Completed

Client Portal client-visible scope item rows now show the parent project's status label with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal scope items show project, project status, scope version/status, phase, item details, acceptance notes, and a short context label.
- Client Portal scope item rows do not yet show the parent project's client-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Client Portal client-visible scope item rows.

## Why This Matters

Scope items describe delivery work. Showing the same client-safe start rule used elsewhere helps clients understand whether each scope item belongs to work that is ready or still waiting on approval, payment, or paid hours.

## Acceptance Criteria

- Client Portal scope item rows show the parent project's client-safe start rule when project data is available.
- Client Portal scope item rows show a clear fallback when project data is missing.
- Existing Client Portal scope item project, project status, scope, phase, item, and acceptance columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
