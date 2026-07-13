# NEXT TASK: Client Portal Scope Approval Start Rule

## Last Completed

Client Portal scope approval rows now show the parent project's status label with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal scope approvals show project, project status, scope version/status, approval state, notes, approved date, and a short context label.
- Client Portal scope approval rows do not yet show the parent project's client-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Client Portal scope approval rows.

## Why This Matters

Scope approvals are tied to delivery readiness. Showing the same client-safe start rule used elsewhere helps clients understand whether an approved or pending scope belongs to work that is ready or still waiting on approval, payment, or paid hours.

## Acceptance Criteria

- Client Portal scope approval rows show the parent project's client-safe start rule when project data is available.
- Client Portal scope approval rows show a clear fallback when project data is missing.
- Existing Client Portal scope approval project, project status, scope, approval, notes, and approved date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new approval action, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
