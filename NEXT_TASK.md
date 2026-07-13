# NEXT TASK: Client Portal Message Context Label

## Last Completed

Client Portal client-visible file rows now show the parent project's client-safe start rule with a clear fallback when project data is missing.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal shows client-facing projects, payments, paid hours, change requests, approvals, files, links, and messages.
- Client Portal files and links show file title, parent project, project status, project start rule, file type, link, and a short context label.
- Client Portal messages show project name, sender role, message, and date, but do not yet include a short context label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add a short client-safe context label above the Client Portal messages table.

## Why This Matters

Client Portal files now have clear context. Adding the same lightweight context label to messages will make client-visible communication clearer without adding chat, notifications, AI, or workflow actions.

## Acceptance Criteria

- Client Portal messages section includes a short context label explaining the client-safe project and message context shown.
- Existing Client Portal message project, from, message, and date columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new action workflow, persistence, integration, auth, payment, notification, or AI behavior is added.
- `pnpm run build` passes.
