# NEXT TASK: Supplier Detail Opens Portal Context

## Last Completed

Supplier Portal now receives local `timeEntries` from app state and shows the selected or fallback supplier's time entries. Approved time is marked payable, while submitted and rejected time remain not payable until agency approval.

## Remaining Limitations

- Supplier assignment and time changes are local only and reset on refresh or local session reset.
- Supplier Portal still has to be opened from the sidebar, so the selected supplier context is not obvious from Supplier Detail.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a simple button from Supplier Detail to open Supplier Portal for the selected supplier using the existing selected supplier state.

## Why This Matters

Yaniv can now inspect a supplier internally and should be able to jump directly into the supplier-facing placeholder view for the same supplier. This improves the local MVP workflow without adding authentication or routing complexity.

## Acceptance Criteria

- Supplier Detail exposes a clear action to open Supplier Portal for the selected supplier.
- The action preserves the selected supplier context already held in app state.
- Supplier Portal shows that supplier's assigned projects and local time entries.
- Supplier-facing screens continue to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
