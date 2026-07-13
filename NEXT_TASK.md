# NEXT TASK: Supplier Portal Shows Message Project Status

## Last Completed

Supplier Portal files and links now include a short supplier-safe context label above the table so suppliers understand the visible project and file details without seeing client price, agency margin, or internal pricing notes.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Supplier Portal uses selected supplier context and hides client price, agency margin, and internal pricing notes.
- Supplier Portal shows assigned projects, supplier-visible scope items, local time entries, payable summaries, supplier-visible files, and supplier-visible messages.
- Supplier Portal files and links show file title, parent project, parent project status, supplier-safe project start rule, file type, link, and a short context label.
- Supplier Portal message rows show project name, author role, message, and date, but do not yet show the parent project's status.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project status labels to Supplier Portal supplier-visible message rows.

## Why This Matters

Supplier-visible messages are tied to project delivery. Showing the parent project status helps the supplier understand whether each message belongs to waiting, active, or completed work while preserving the supplier visibility boundary.

## Acceptance Criteria

- Supplier Portal message rows show the parent project's status label when project data is available.
- Supplier Portal message rows show a clear fallback when project data is missing.
- Existing Supplier Portal message project, from, message, and date columns remain intact.
- Supplier Portal continues hiding client price, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, or AI behavior is added.
- `pnpm run build` passes.
