# NEXT TASK: Client Portal File Start Rule

## Last Completed

Client Portal client-visible file rows now show the parent project's status label with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal shows client-facing projects, payments, paid hours, change requests, approvals, files, links, and messages.
- Client Portal files and links show file title, parent project, project status, file type, link, and a short context label.
- Client Portal file rows do not yet show the parent project's client-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Client Portal client-visible file rows.

## Why This Matters

Files can be shared before work is ready. Showing the same client-safe start rule used elsewhere helps clients understand whether a file belongs to a project that is ready or still waiting on approval, payment, or paid hours.

## Acceptance Criteria

- Client Portal file rows show the parent project's client-safe start rule when project data is available.
- Client Portal file rows show a clear fallback when project data is missing.
- Existing Client Portal file title, project, project status, type, and link columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
