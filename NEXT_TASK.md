# NEXT TASK: Client Portal Message Start Rule

## Last Completed

Client Portal client-visible message rows now show the parent project's status label with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal shows client-facing projects, payments, paid hours, change requests, approvals, files, links, and messages.
- Client Portal messages show project name, project status, sender role, message, date, and a short context label.
- Client Portal message rows do not yet show the parent project's client-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Client Portal client-visible message rows.

## Why This Matters

Client-visible messages can reference delivery work. Showing the same client-safe start rule used elsewhere helps clients understand whether a message relates to work that is ready or still waiting on approval, payment, or paid hours.

## Acceptance Criteria

- Client Portal message rows show the parent project's client-safe start rule when project data is available.
- Client Portal message rows show a clear fallback when project data is missing.
- Existing Client Portal message project, project status, from, message, and date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
