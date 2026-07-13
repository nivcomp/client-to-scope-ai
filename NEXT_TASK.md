# NEXT TASK: Supplier Portal Message Context Label

## Last Completed

Supplier Portal supplier-visible message rows now show the parent project's status label with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Supplier Portal uses selected supplier context and hides client price, agency margin, and internal pricing notes.
- Supplier Portal shows assigned projects, supplier-visible scope items, local time entries, payable summaries, supplier-visible files, and supplier-visible messages.
- Supplier Portal message rows show project name, project status, author role, message, and date.
- Supplier Portal message rows do not yet include a short supplier-safe context label above the table.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add a short supplier-safe context label above the Supplier Portal messages table.

## Why This Matters

Supplier Portal already labels project, scope, time, and file context. A matching message context label will make the read-only communication section clear without adding chat, notifications, AI, or workflow actions.

## Acceptance Criteria

- Supplier Portal messages section includes a short context label explaining the supplier-safe project and message context shown.
- Existing Supplier Portal message project, project status, from, message, and date columns remain intact.
- Supplier Portal continues hiding client price, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
