# NEXT TASK: Client Portal Paid Hours Start Rule

## Last Completed

Client Portal paid hour rows now show the parent project's status label, or a general hour-bank fallback when no project is linked.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal paid hours show project, project status, purchased hours, used hours, usage percentage, remaining hours, expiry, and a short context label.
- Client Portal paid hour rows do not yet show the parent project's client-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Client Portal paid hour rows.

## Why This Matters

Paid hours are part of project readiness. Showing the same client-safe start rule used elsewhere helps clients understand whether paid hours are available for work that is ready or still waiting on approval, payment, or paid hours.

## Acceptance Criteria

- Client Portal paid hour rows show the parent project's client-safe start rule when project data is available.
- Client Portal paid hour rows show a clear fallback when project data is missing or the bank is general.
- Existing Client Portal paid hours project, project status, purchased, used, usage, remaining, and expiry columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new payment action, persistence, integration, auth, notification, or AI behavior is added.
- `pnpm run build` passes.
