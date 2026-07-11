# Client-to-Scope AI

Client-to-Scope AI is an internal operating system for Yaniv to manage agency work from first client conversation through approved scope, paid hours, supplier delivery, change requests, and project communication.

This repository contains the documentation foundation and the first static internal app foundation. It is intentionally not a public SaaS demo. The first build supports Yaniv's own client and supplier workflow before considering broader reuse.

## Current Scope

The documentation foundation defines:

- Product vision and internal MVP scope
- Core user flows for Yaniv, clients, and suppliers
- Data model planning
- Roles and permissions
- Pricing, margin, payments, and paid-hour rules
- Supplier onboarding and time tracking
- Client approvals and change request controls
- AI agent placeholders and future responsibilities
- A practical Lovable build plan

The static app foundation adds:

- Internal dashboard
- Clients, client detail, and projects pages
- Project detail page
- Suppliers and supplier detail pages
- Pricing and margin page
- Change requests page
- Supplier time entries page
- Payments and hour banks page
- Client portal placeholder
- Supplier portal placeholder
- AI Workbench placeholder

## Product Principle

The agency stays in control.

Clients can explain needs, review progress, approve scopes, make payments, and request changes. Suppliers can view assigned work, provide updates, and track time. Yaniv controls pricing, scope, supplier assignment, client-facing promises, margin, and whether work is allowed to begin.

## Recommended Build Order

1. Build the basic internal dashboard for Yaniv.
2. Add client, project, supplier, pricing, approval, and time tracking records.
3. Add simple client-facing approval views.
4. Add supplier-facing assigned work and time entry views.
5. Add change request review and pricing controls.
6. Add file and link organization.
7. Add AI-assisted drafting and summarization after the workflow is stable.

## Documentation Index

- [Product Vision](docs/product-vision.md)
- [Internal Use MVP](docs/internal-use-mvp.md)
- [User Flows](docs/user-flows.md)
- [Data Model](docs/data-model.md)
- [Roles and Permissions](docs/roles-and-permissions.md)
- [Pricing and Margin](docs/pricing-and-margin.md)
- [Supplier Onboarding](docs/supplier-onboarding.md)
- [Supplier Time Tracking](docs/supplier-time-tracking.md)
- [Client Approval and Payments](docs/client-approval-and-payments.md)
- [Agency Control Rules](docs/agency-control-rules.md)
- [AI Agents Plan](docs/ai-agents-plan.md)
- [Lovable Build Plan](docs/lovable-build-plan.md)

## Run The App

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

The app uses mock data from `src/data/mockData.ts` and TypeScript records from `src/types/domain.ts`.

Phase 2B workflow forms use local in-memory React state only. New clients, projects, change requests, payment updates, and supplier time approvals reset when the page refreshes.

Phase 2C adds an Action Queue / Agency Control Dashboard that groups the same local state into daily work queues for pricing, approvals, payments, supplier time review, blocked work, and ready-to-start projects.

The local workflow includes a Recent Activity trail for workflow actions. It is also in-memory only and resets on refresh.

The Action Queue also includes a local session reset that restores the mock seed data without connecting a backend.

Project Detail can create a local manual client payment request for projects without an existing payment record. Requested payments appear in the Action Queue and Payments / Hour Banks views, and work remains gated until the payment is marked received.

Project Detail can also assign and remove approved suppliers using local state. These assignments update the internal project command center and Action Queue during the current session.

## App Structure

- `src/App.tsx` keeps the active view state and renders the selected page.
- `src/pages/` contains one file per internal MVP screen.
- `src/components/` contains shared UI pieces.
- `src/lib/domainHelpers.ts` contains shared formatting and lookup helpers.
- `src/data/mockData.ts` contains static mock records for the current app foundation.
- `src/types/domain.ts` contains the domain record definitions from the docs.

## Not Yet Included

- No AI API calls
- No payment provider integration
- No complex authentication
- No Supabase connection yet
- No real client or supplier accounts

The next builder should keep the docs as the source of truth and replace mock data with Supabase records only after the workflow is stable.
