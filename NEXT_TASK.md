# NEXT TASK: Client Portal Paid Hours Project Status

## Last Completed

Client Portal paid hours now include a short client-safe context label above the paid hours table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal paid hours show project, purchased hours, used hours, usage percentage, remaining hours, expiry, and a short context label.
- Client Portal paid hour rows do not yet show the parent project's client-safe status label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Client Portal paid hour rows.

## Why This Matters

Paid hours are tied to project readiness. Showing the parent project status helps clients understand whether a paid hour bank belongs to waiting, active, or completed work without exposing supplier cost, agency margin, or internal financial notes.

## Acceptance Criteria

- Client Portal paid hour rows show the parent project's status label when project data is available.
- Client Portal paid hour rows show a clear fallback when project data is missing or the bank is general.
- Existing Client Portal paid hours project, purchased, used, usage, remaining, and expiry columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new payment action, persistence, integration, auth, notification, or AI behavior is added.
- `pnpm run build` passes.
