# NEXT TASK: Payments Context Review

## Last Completed

Client Portal scope approval rows now show the parent project's client-safe start rule with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal project, file, message, scope item, and scope approval rows now show client-safe project context.
- Client Portal payments and paid hours are visible, but their context should be reviewed next for the same clarity standard.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Review Client Portal payments and paid hours, then add one small client-safe context improvement if missing.

## Why This Matters

Payments and paid hours are part of the work-start rule. Clear client-safe context helps clients understand payment and hour-bank state without exposing supplier cost, agency margin, or internal financial notes.

## Acceptance Criteria

- Inspect the existing Client Portal payments and paid hours section before editing.
- If missing, add one short client-safe context label or one missing project/status context column.
- Existing Client Portal payment and hour-bank columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new payment action, persistence, integration, auth, notification, or AI behavior is added.
- `pnpm run build` passes.
