# NEXT TASK: Supplier Portal Uses Selected Supplier Context

## Last Completed

Supplier Detail and Supplier Portal now receive app-level local project and time-entry state. Supplier-facing views can reflect local supplier assignments during the current session while continuing to hide client price, agency margin, and internal pricing notes.

## Remaining Limitations

- Supplier assignment and time changes are local only and reset on refresh or local session reset.
- Supplier Portal still uses a fixed placeholder supplier id, so it does not yet reflect the selected supplier context.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to use the currently selected supplier when available, with a simple fallback supplier for the placeholder state.

## Why This Matters

The MVP now has local assignment controls and supplier-facing views that consume local state. Removing the fixed supplier placeholder makes the supplier portal more coherent without adding authentication or real supplier accounts.

## Acceptance Criteria

- Supplier Portal receives `selectedSupplierId` from app state.
- Supplier Portal displays assigned projects for the selected supplier when one is selected.
- Supplier Portal keeps a clear fallback state when no supplier is selected.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
