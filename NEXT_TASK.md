# NEXT TASK: Client Portal Shows Scope Approval Details

## Last Completed

Client Portal now lists client-visible scope items for the selected client's projects.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows approval status in the projects table, but it does not yet show a dedicated approval detail section for pending and approved scopes.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal to show a simple scope approval details section using existing mock `approvals` and `scopes` for the selected client's projects.

## Why This Matters

Client Portal now shows the work items clients can review. A dedicated approval detail section will make the pending approval state clearer while keeping Yaniv in control of final scope and pricing.

## Acceptance Criteria

- Client Portal lists approval records for the selected client's projects.
- Each approval shows project, scope version/status, approval status, notes, and approved date when available.
- The section uses existing mock `approvals` and `scopes`; no approval action or persistence is added.
- Client Portal continues to hide supplier cost, agency margin, and internal delivery notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
