# NEXT TASK: Client Portal Message Project Status

## Last Completed

Client Portal messages now include a short client-safe context label above the messages table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal shows client-facing projects, payments, paid hours, change requests, approvals, files, links, and messages.
- Client Portal messages show project name, sender role, message, date, and a short context label.
- Client Portal message rows do not yet show the parent project's client-safe status label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Client Portal client-visible message rows.

## Why This Matters

Client-visible messages are tied to project delivery. Showing the parent project status helps clients understand whether each message belongs to waiting, active, or completed work without exposing supplier cost, agency margin, or internal delivery notes.

## Acceptance Criteria

- Client Portal message rows show the parent project's status label when project data is available.
- Client Portal message rows show a clear fallback when project data is missing.
- Existing Client Portal message project, from, message, and date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
