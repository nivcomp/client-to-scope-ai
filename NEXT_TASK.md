# NEXT TASK: Local Supplier Assignment Controls

## Last Completed

Project Detail now supports creating a local manual client payment request for projects that do not yet have a payment record. The requested payment feeds the existing Action Queue and Payments / Hour Banks views through app-level in-memory state.

## Remaining Limitations

- Payment requests are local only and reset on refresh or local session reset.
- There is still no payment provider integration.
- There is no durable database persistence.
- Projects still need a simple local supplier assignment control before Yaniv can fully simulate assignment readiness.

## Recommended Next Work Unit

Add a small local supplier assignment control in Project Detail so Yaniv can assign and unassign approved suppliers from a project using existing mock suppliers and local React state.

## Why This Matters

The MVP workflow already tracks payment readiness, supplier time, and ready-to-start projects. Assignment is still mostly seed-data driven, so Yaniv cannot fully simulate moving a paid project into supplier work without editing mock data.

## Acceptance Criteria

- Project Detail shows approved suppliers that can be assigned to the selected project.
- Yaniv can assign a supplier to the project using local state only.
- Yaniv can remove an assigned supplier from the project using local state only.
- Assigned suppliers continue to appear in Project Detail and Action Queue ready-to-start rows.
- Supplier-facing pages still do not expose client price, agency margin, or internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
