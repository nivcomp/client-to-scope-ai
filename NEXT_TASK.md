# NEXT TASK: Client Portal File Context Review

## Last Completed

Supplier Portal supplier-visible message rows now show the parent project's supplier-safe start rule with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Supplier Portal uses selected supplier context and hides client price, agency margin, and internal pricing notes.
- Supplier Portal messages now show project name, project status, project start rule, author role, message, date, and a short context label.
- Supplier Portal project, scope, time, file, and message sections now consistently show supplier-safe context.
- Client Portal exists and shows client-facing local state, but its file and link context should be reviewed next for the same clarity standard.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Review Client Portal files and links, then add one small client-safe context improvement if missing.

## Why This Matters

Supplier Portal context is now consistent. The next MVP value is to make sure client-facing file/link context is equally clear while preserving agency-only pricing and internal notes.

## Acceptance Criteria

- Inspect the existing Client Portal files and links section before editing.
- If missing, add one short client-safe context label or one missing project/status context column.
- Existing Client Portal project, payment, hour bank, change request, file, and message information remains intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
