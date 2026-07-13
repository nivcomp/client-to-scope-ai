# NEXT TASK: Supplier Portal Shows Time Entry Approval Summary

## Last Completed

Supplier Portal time-entry rows now show the approval owner or a clear agency-approval fallback.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal time-entry rows show approval owner context, but the section does not summarize how many entries are approved versus awaiting agency approval.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a small approval summary to the Supplier Portal time-entry stats.

## Why This Matters

Suppliers can scan the section faster if they see how many entries are approved versus still awaiting agency approval. This reinforces the approval gate without adding actions.

## Acceptance Criteria

- Supplier Portal time-entry stats show approved entry count.
- Supplier Portal time-entry stats show non-approved entry count.
- Existing Supplier Portal payable hours, payable amount, excluded hours, time-entry rows, and payable rule remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
