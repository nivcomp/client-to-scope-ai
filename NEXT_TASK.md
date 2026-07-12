# NEXT TASK: Supplier Portal Shows Local Time Entries

## Last Completed

Supplier Portal now receives `selectedSupplierId` from app state and uses the selected supplier when available, with a clear fallback supplier for the placeholder state. The portal continues to consume local project state and hides client price, agency margin, and internal pricing notes.

## Remaining Limitations

- Supplier assignment and time changes are local only and reset on refresh or local session reset.
- Supplier Portal still does not show the selected supplier's local time entries.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to receive local time entries and show the selected supplier's submitted, approved, and rejected time without exposing agency-only pricing data.

## Why This Matters

The supplier portal should show the core supplier workflow: assigned work plus own time status. This keeps the placeholder useful for the MVP without adding authentication or persistence.

## Acceptance Criteria

- Supplier Portal receives `timeEntries` from app-level local state.
- Supplier Portal shows time entries for the selected or fallback supplier.
- Approved time is clearly marked as payable and submitted/rejected time is not payable.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
