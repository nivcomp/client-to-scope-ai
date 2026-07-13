# NEXT TASK: Client Portal File Project Status

## Last Completed

Client Portal files and links now include a short client-safe context label above the table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal shows client-facing projects, payments, paid hours, change requests, approvals, files, links, and messages.
- Client Portal files and links show file title, parent project, file type, link, and a short context label.
- Client Portal file rows do not yet show the parent project's client-safe status label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Client Portal client-visible file rows.

## Why This Matters

Files are tied to project delivery. Showing the parent project status helps clients understand whether each shared file belongs to waiting, active, or completed work without exposing supplier cost, agency margin, or internal delivery notes.

## Acceptance Criteria

- Client Portal file rows show the parent project's status label when project data is available.
- Client Portal file rows show a clear fallback when project data is missing.
- Existing Client Portal file title, project, type, and link columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
