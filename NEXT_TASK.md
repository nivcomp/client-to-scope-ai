# NEXT TASK: Client Portal Scope Approval Project Status

## Last Completed

Client Portal scope approvals now include a short client-safe context label above the approvals table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal scope approvals show project, scope version/status, approval state, notes, approved date, and a short context label.
- Client Portal scope approval rows do not yet show the parent project's client-safe status label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Client Portal scope approval rows.

## Why This Matters

Scope approvals are tied to project delivery. Showing the parent project status helps clients understand whether each approval belongs to waiting, active, or completed work without adding approval actions or exposing internal delivery details.

## Acceptance Criteria

- Client Portal scope approval rows show the parent project's status label when project data is available.
- Client Portal scope approval rows show a clear fallback when project data is missing.
- Existing Client Portal scope approval project, scope, approval, notes, and approved date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new approval action, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
