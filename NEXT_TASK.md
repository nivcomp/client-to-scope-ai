# NEXT TASK: Prepare Lovable UI Refinement Pass

## Last Completed

Project Detail now has clearer local supplier assignment controls. Yaniv can assign or remove approved suppliers from the selected project using local React state, Recent Activity records assignment changes, and Action Queue ready-to-start rows only include projects whose scope is approved and whose payment or paid-hours gate is open.

## Current State

- The app remains a static React + TypeScript internal MVP using mock data and local in-memory state only.
- Project supplier assignments use the existing `Project.assignedSupplierIds` array and reset on refresh.
- Project Detail shows assigned suppliers and an approved supplier pool with assign/remove actions.
- Action Queue ready-to-start logic now requires approved scope plus payment or paid hours.
- Supplier-facing views continue to use assigned project state without exposing client price, agency margin, supplier cost estimates, or internal pricing notes.
- There is no Supabase, auth, AI integration, payment provider, notification system, or persistence.

## Recommended Next Work Unit

Prepare the existing application for the first Lovable UI refinement pass without changing business logic or connecting a backend.

## Why This Matters

The MVP workflow is now broad enough that Lovable can improve visual hierarchy, spacing, forms, and responsive polish. The next step should make the current interface easier to refine safely without changing domain rules or adding integrations.

## Acceptance Criteria

- Review the current page/component structure for obvious UI handoff friction.
- Add or update concise Lovable-facing notes that identify the internal-app screens, constraints, and no-backend/no-business-logic-change boundaries.
- Do not redesign the app in this cycle.
- Do not change supplier visibility, pricing separation, approval/payment gates, or local workflow behavior.
- Do not add Supabase, auth, AI APIs, payment integrations, notifications, deployment, or persistence.
- Run `pnpm run build` and record the result.
