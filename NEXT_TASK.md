# NEXT TASK: Client Portal Paid Hours Context Label

## Last Completed

Client Portal payment rows now include a short client-safe context label above the payments table.

## Current State

- The app is still a static React + TypeScript MVP using local in-memory state and mock seed data only.
- Client Portal uses selected client context and hides supplier cost, agency margin, and internal pricing notes.
- Client Portal payments show project, amount, status, due date, received date, notes, and a short context label.
- Client Portal paid hours show project, purchased hours, used hours, usage percentage, remaining hours, and expiry, but do not yet include a short context label.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Add a short client-safe context label above the Client Portal paid hours table.

## Why This Matters

Paid hours are part of the work-start rule. A short context label will clarify what hour-bank details clients can see without exposing supplier cost, agency margin, or internal financial notes.

## Acceptance Criteria

- Client Portal paid hours section includes a short context label explaining the client-safe hour-bank context shown.
- Existing Client Portal paid hours project, purchased, used, usage, remaining, and expiry columns remain intact.
- Client Portal continues hiding supplier cost, agency margin, and internal pricing notes.
- No new payment action, persistence, integration, auth, notification, or AI behavior is added.
- `pnpm run build` passes.
