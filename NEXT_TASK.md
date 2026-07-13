# NEXT TASK: Supplier Portal Message Start Rule

## Last Completed

Supplier Portal messages now include a short supplier-safe context label above the messages table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Supplier Portal uses selected supplier context and hides client price, agency margin, and internal pricing notes.
- Supplier Portal shows assigned projects, supplier-visible scope items, local time entries, payable summaries, supplier-visible files, and supplier-visible messages.
- Supplier Portal message rows show project name, project status, author role, message, and date.
- Supplier Portal messages include a short context label.
- Supplier Portal message rows do not yet show the parent project's supplier-safe start rule.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add parent project start rules to Supplier Portal supplier-visible message rows.

## Why This Matters

Supplier-visible messages can reference delivery work. Showing the same supplier-safe start rule used elsewhere helps suppliers understand whether a message relates to work that is ready to start or still blocked by agency approval, payment, or paid hours.

## Acceptance Criteria

- Supplier Portal message rows show the parent project's supplier-safe start rule when project data is available.
- Supplier Portal message rows show a clear fallback when project data is missing.
- Existing Supplier Portal message project, project status, from, message, and date columns remain intact.
- Supplier Portal continues hiding client price, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
