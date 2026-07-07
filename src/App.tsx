import { useMemo, useState } from "react";
import { Layout } from "./components/Layout";
import { StatCard } from "./components/StatCard";
import { StatusBadge } from "./components/StatusBadge";
import {
  agency,
  approvals,
  changeRequests,
  clientPayments,
  clients,
  decisionLogs,
  fileLinks,
  hourBanks,
  phasePricing,
  projectBriefs,
  projectMessages,
  projectPricing,
  projects,
  scopeItems,
  scopes,
  supplierPayments,
  supplierProfiles,
  suppliers,
  supplierSkillSuggestions,
  timeEntries,
} from "./data/mockData";
import type { Project, ProjectStatus } from "./types/domain";
import type { ViewKey } from "./views";

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const statusLabels: Record<ProjectStatus, string> = {
  lead_started: "Lead started",
  discovery_in_progress: "Discovery",
  waiting_for_agency_pricing: "Needs pricing",
  pricing_set: "Pricing set",
  brief_ready: "Brief ready",
  scope_ready: "Scope ready",
  waiting_for_client_approval: "Client approval",
  approved_by_client: "Approved",
  waiting_for_payment: "Waiting payment",
  paid_ready_to_start: "Ready to start",
  assigned_to_supplier: "Assigned",
  in_development: "In development",
  change_requested: "Change requested",
  change_priced: "Change priced",
  change_approved: "Change approved",
  completed: "Completed",
};

function getClient(project: Project) {
  return clients.find((client) => client.id === project.clientId);
}

function getPricing(projectId: string) {
  return projectPricing.find((pricing) => pricing.projectId === projectId);
}

function getSupplierName(supplierId: string) {
  return suppliers.find((supplier) => supplier.id === supplierId)?.name ?? "Unassigned";
}

function getProjectName(projectId: string) {
  return projects.find((project) => project.id === projectId)?.name ?? "Unknown project";
}

function canWorkStart(project: Project) {
  return project.paymentGateStatus === "paid" || project.paymentGateStatus === "hour_bank_available";
}

function marginAmount() {
  const revenue = projectPricing.reduce((sum, pricing) => sum + pricing.clientPrice, 0);
  const cost = projectPricing.reduce((sum, pricing) => sum + pricing.supplierCostEstimate, 0);
  return { revenue, cost, margin: revenue - cost };
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">Internal foundation</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="control-note">
        Yaniv controls pricing, scope, supplier assignment, and client-facing commitments.
      </div>
    </header>
  );
}

function RulePanel() {
  return (
    <section className="rule-panel">
      <strong>Operating rules visible in this MVP</strong>
      <ul>
        <li>Client price and supplier cost stay separate.</li>
        <li>Suppliers never see client price or agency margin.</li>
        <li>Work starts only after payment is received or paid hours are available.</li>
        <li>Change requests must be priced and client-approved before becoming work.</li>
        <li>Supplier time must be approved before it becomes payable.</li>
      </ul>
    </section>
  );
}

function DashboardPage() {
  const metrics = useMemo(() => {
    const totals = marginAmount();
    return {
      newLeads: clients.filter((client) => client.status === "lead").length,
      waitingPricing: projects.filter((project) => project.status === "waiting_for_agency_pricing").length,
      waitingApproval: projects.filter((project) => project.status === "waiting_for_client_approval").length,
      waitingPayment: projects.filter((project) => project.status === "waiting_for_payment").length,
      activeProjects: projects.filter((project) => ["paid_ready_to_start", "assigned_to_supplier", "in_development"].includes(project.status)).length,
      supplierTimeWaiting: timeEntries.filter((entry) => entry.status === "submitted").length,
      openChanges: changeRequests.filter((request) => request.status !== "declined" && request.status !== "client_approved").length,
      supplierOwed: supplierPayments.reduce((sum, payment) => sum + payment.amountOwed - payment.amountPaid, 0),
      ...totals,
    };
  }, []);

  return (
    <>
      <PageHeader title="Agency Dashboard" subtitle="A control room for Yaniv's clients, scope, pricing, paid hours, suppliers, and delivery risk." />
      <section className="stats-grid">
        <StatCard label="New client leads" value={metrics.newLeads} />
        <StatCard label="Waiting for pricing" value={metrics.waitingPricing} tone="warning" />
        <StatCard label="Waiting for client approval" value={metrics.waitingApproval} tone="warning" />
        <StatCard label="Waiting for payment" value={metrics.waitingPayment} tone="warning" />
        <StatCard label="Active projects" value={metrics.activeProjects} tone="success" />
        <StatCard label="Supplier time waiting" value={metrics.supplierTimeWaiting} tone="warning" />
        <StatCard label="Open change requests" value={metrics.openChanges} />
        <StatCard label="Total client revenue" value={currency.format(metrics.revenue)} />
        <StatCard label="Total supplier cost" value={currency.format(metrics.cost)} />
        <StatCard label="Estimated margin" value={currency.format(metrics.margin)} note={`${Math.round((metrics.margin / metrics.revenue) * 100)}% blended`} tone="success" />
        <StatCard label="Owed to suppliers" value={currency.format(metrics.supplierOwed)} />
      </section>
      <div className="two-column">
        <section className="card">
          <h2>Projects needing Yaniv</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Status</th>
                <th>Start gate</th>
              </tr>
            </thead>
            <tbody>
              {projects
                .filter((project) => !canWorkStart(project) || ["waiting_for_agency_pricing", "waiting_for_client_approval"].includes(project.status))
                .map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{getClient(project)?.company}</td>
                    <td><StatusBadge label={statusLabels[project.status]} tone="warning" /></td>
                    <td>{canWorkStart(project) ? "Ready" : "Blocked until payment or hours"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
        <RulePanel />
      </div>
    </>
  );
}

function ClientsPage() {
  return (
    <>
      <PageHeader title="Clients" subtitle="Client records are operational notes, not public account pages." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Company</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.company}</td>
                <td><StatusBadge label={client.status} tone={client.status === "lead" ? "warning" : "success"} /></td>
                <td>{client.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" subtitle="Each project tracks status, client, assigned suppliers, budget signal, and whether delivery can start." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Status</th>
              <th>Assigned suppliers</th>
              <th>Start rule</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{getClient(project)?.company}</td>
                <td><StatusBadge label={statusLabels[project.status]} tone={canWorkStart(project) ? "success" : "warning"} /></td>
                <td>{project.assignedSupplierIds.map(getSupplierName).join(", ") || "Not assigned"}</td>
                <td>{canWorkStart(project) ? "Can start" : "Blocked until payment or paid hours"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function ProjectDetailPage() {
  const project = projects[0];
  const client = getClient(project);
  const pricing = getPricing(project.id);
  const scope = scopes.find((item) => item.projectId === project.id);
  const brief = projectBriefs.find((item) => item.projectId === project.id);
  const items = scope ? scopeItems.filter((item) => item.scopeId === scope.id) : [];

  return (
    <>
      <PageHeader title="Project Detail" subtitle="A single project view showing agency controls, client-facing scope, supplier-facing instructions, files, and decisions." />
      <section className="detail-grid">
        <article className="card">
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <dl className="meta-list">
            <div><dt>Client</dt><dd>{client?.company}</dd></div>
            <div><dt>Status</dt><dd><StatusBadge label={statusLabels[project.status]} tone="warning" /></dd></div>
            <div><dt>Start gate</dt><dd>{canWorkStart(project) ? "Ready" : "Blocked until payment or paid hours"}</dd></div>
            <div><dt>Assigned</dt><dd>{project.assignedSupplierIds.map(getSupplierName).join(", ")}</dd></div>
          </dl>
        </article>
        <article className="card warning-card">
          <h2>Agency controls</h2>
          <p>Scope, pricing, supplier assignment, and client-facing promises stay with Yaniv.</p>
          <p>Payment gate: {project.paymentGateStatus}</p>
        </article>
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Brief</h2>
          <p>{brief?.problemStatement}</p>
          <h3>Goals</h3>
          <ul>{brief?.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
        </article>
        <article className="card">
          <h2>Pricing separation</h2>
          <dl className="meta-list">
            <div><dt>Client price</dt><dd>{pricing ? currency.format(pricing.clientPrice) : "Not set"}</dd></div>
            <div><dt>Supplier cost</dt><dd>{pricing ? currency.format(pricing.supplierCostEstimate) : "Not set"}</dd></div>
            <div><dt>Margin</dt><dd>{pricing ? `${pricing.actualMarginPercent}%` : "Not set"}</dd></div>
          </dl>
        </article>
      </section>
      <section className="card">
        <h2>Scope items</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Phase</th>
              <th>Client visible</th>
              <th>Supplier visible</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.phase}</td>
                <td>{item.clientVisible ? "Yes" : "No"}</td>
                <td>{item.supplierVisible ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Files and links</h2>
          {fileLinks.filter((file) => file.projectId === project.id).map((file) => (
            <p key={file.id}>{file.title} - {file.visibility}</p>
          ))}
        </article>
        <article className="card">
          <h2>Decision log</h2>
          {decisionLogs.filter((decision) => decision.projectId === project.id).map((decision) => (
            <p key={decision.id}>{decision.decision} {decision.impact}</p>
          ))}
        </article>
      </section>
    </>
  );
}

function SuppliersPage() {
  return (
    <>
      <PageHeader title="Suppliers" subtitle="Supplier records track capability, availability, cost, and approval status for Yaniv's internal use." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Status</th>
              <th>Timezone</th>
              <th>Skills</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => {
              const profile = supplierProfiles.find((item) => item.supplierId === supplier.id);
              return (
                <tr key={supplier.id}>
                  <td>{supplier.name}</td>
                  <td><StatusBadge label={supplier.status} tone={supplier.status === "approved" ? "success" : "warning"} /></td>
                  <td>{supplier.timezone}</td>
                  <td>{profile?.mainSkills.join(", ")}</td>
                  <td>{profile ? currency.format(profile.hourlyRate) : "Unknown"}/hr</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

function SupplierDetailPage() {
  const supplier = suppliers[0];
  const profile = supplierProfiles.find((item) => item.supplierId === supplier.id);
  const entries = timeEntries.filter((entry) => entry.supplierId === supplier.id);

  return (
    <>
      <PageHeader title="Supplier Detail" subtitle="Supplier-facing data stays limited to assigned work, instructions, time, and amount owed." />
      <section className="detail-grid">
        <article className="card">
          <h2>{supplier.name}</h2>
          <p>{supplier.email}</p>
          <dl className="meta-list">
            <div><dt>Country</dt><dd>{supplier.country}</dd></div>
            <div><dt>Timezone</dt><dd>{supplier.timezone}</dd></div>
            <div><dt>Availability</dt><dd>{profile?.weeklyAvailabilityHours} hrs/week</dd></div>
            <div><dt>Agency cost rate</dt><dd>{profile ? currency.format(profile.hourlyRate) : "Unknown"}/hr</dd></div>
          </dl>
        </article>
        <article className="card warning-card">
          <h2>Supplier visibility rule</h2>
          <p>Supplier portal excludes client price, margin, and internal agency notes.</p>
        </article>
      </section>
      <section className="card">
        <h2>Time entries</h2>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{getProjectName(entry.projectId)}</td>
                <td>{entry.date}</td>
                <td>{entry.hours}</td>
                <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function PricingMarginPage() {
  return (
    <>
      <PageHeader title="Pricing / Margin" subtitle="Yaniv sees client price, supplier cost, and margin together. Suppliers never see this page." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client price</th>
              <th>Supplier cost</th>
              <th>Margin</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {projectPricing.map((pricing) => (
              <tr key={pricing.id}>
                <td>{getProjectName(pricing.projectId)}</td>
                <td>{currency.format(pricing.clientPrice)}</td>
                <td>{currency.format(pricing.supplierCostEstimate)}</td>
                <td><StatusBadge label={`${pricing.actualMarginPercent}%`} tone={pricing.actualMarginPercent >= agency.marginTargetPercent ? "success" : "danger"} /></td>
                <td>{pricing.pricingNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="card">
        <h2>Phase pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Project</th>
              <th>Client price</th>
              <th>Supplier cost</th>
            </tr>
          </thead>
          <tbody>
            {phasePricing.map((phase) => {
              const pricing = projectPricing.find((item) => item.id === phase.pricingId);
              return (
                <tr key={phase.id}>
                  <td>{phase.phaseName}</td>
                  <td>{pricing ? getProjectName(pricing.projectId) : "Unknown"}</td>
                  <td>{currency.format(phase.clientPrice)}</td>
                  <td>{currency.format(phase.supplierCost)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

function ChangeRequestsPage() {
  return (
    <>
      <PageHeader title="Change Requests" subtitle="Client requests are reviewed, priced, and approved before they become supplier work." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Request</th>
              <th>Project</th>
              <th>Status</th>
              <th>Agency price</th>
              <th>Supplier cost</th>
              <th>Work rule</th>
            </tr>
          </thead>
          <tbody>
            {changeRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.title}</td>
                <td>{getProjectName(request.projectId)}</td>
                <td><StatusBadge label={request.status} tone={request.status === "client_approved" ? "success" : "warning"} /></td>
                <td>{request.agencyPrice ? currency.format(request.agencyPrice) : "Needs pricing"}</td>
                <td>{request.supplierCost ? currency.format(request.supplierCost) : "Not estimated"}</td>
                <td>{request.status === "client_approved" ? "Can become work" : "Blocked"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function SupplierTimePage() {
  return (
    <>
      <PageHeader title="Supplier Time Entries" subtitle="Submitted time needs Yaniv's approval before it becomes payable or consumes paid hours." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Project</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Status</th>
              <th>Payable rule</th>
            </tr>
          </thead>
          <tbody>
            {timeEntries.map((entry) => (
              <tr key={entry.id}>
                <td>{getSupplierName(entry.supplierId)}</td>
                <td>{getProjectName(entry.projectId)}</td>
                <td>{entry.date}</td>
                <td>{entry.hours}</td>
                <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
                <td>{entry.status === "approved" ? "Payable" : "Waiting for approval"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function PaymentsHoursPage() {
  return (
    <>
      <PageHeader title="Payments / Hour Banks" subtitle="Manual payment and paid-hour tracking for the first internal MVP." />
      <section className="detail-grid">
        <article className="card">
          <h2>Client payments</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              {clientPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{getProjectName(payment.projectId)}</td>
                  <td>{currency.format(payment.amount)}</td>
                  <td><StatusBadge label={payment.status} tone={payment.status === "received" ? "success" : "warning"} /></td>
                  <td>{payment.status === "received" ? "Work can use this payment" : "Work remains gated"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card">
          <h2>Hour banks</h2>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Project</th>
                <th>Remaining</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {hourBanks.map((bank) => (
                <tr key={bank.id}>
                  <td>{clients.find((client) => client.id === bank.clientId)?.company}</td>
                  <td>{bank.projectId ? getProjectName(bank.projectId) : "General"}</td>
                  <td>{bank.hoursRemaining} hrs</td>
                  <td>{bank.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}

function ClientPortalPage() {
  const clientProjects = projects.filter((project) => project.clientId === "client-1");
  return (
    <>
      <PageHeader title="Client Portal Placeholder" subtitle="A simple future client view for approvals, project status, paid-hour balance, files, and change requests." />
      <section className="card">
        <h2>Client can see</h2>
        <ul>
          <li>Client-facing scope and project status.</li>
          <li>Approval requests and payment or hour balance status.</li>
          <li>Client-visible files, links, and messages.</li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Approval</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {clientProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{statusLabels[project.status]}</td>
                <td>{approvals.find((approval) => approval.projectId === project.id)?.status ?? "Not requested"}</td>
                <td>{clientPayments.find((payment) => payment.projectId === project.id)?.status ?? "Not due"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function SupplierPortalPage() {
  const supplierId = "supplier-1";
  const assigned = projects.filter((project) => project.assignedSupplierIds.includes(supplierId));
  return (
    <>
      <PageHeader title="Supplier Portal Placeholder" subtitle="A limited supplier view for assigned work, updates, own time entries, and amount owed." />
      <section className="card">
        <h2>Supplier cannot see client price or margin</h2>
        <table>
          <thead>
            <tr>
              <th>Assigned project</th>
              <th>Start rule</th>
              <th>Visible instruction</th>
            </tr>
          </thead>
          <tbody>
            {assigned.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{canWorkStart(project) ? "Ready" : "Blocked by agency gate"}</td>
                <td>View assigned scope items only</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

function AiWorkbenchPage() {
  const agents = [
    ["Client Guide Agent", "Drafts intake summaries and follow-up questions from client notes."],
    ["Agency Control Agent", "Highlights missing scope, pricing, approval, and payment gates for Yaniv."],
    ["Supplier Work Agent", "Summarizes assigned work and drafts supplier progress updates."],
    ["Architect Agent", "Suggests phases, dependencies, and delivery assumptions."],
    ["Change Control Agent", "Compares requests with approved scope and drafts impact notes."],
  ];
  return (
    <>
      <PageHeader title="AI Workbench Placeholder" subtitle="No real AI calls yet. These panels show where reviewable AI drafts can live later." />
      <section className="agent-grid">
        {agents.map(([name, description]) => (
          <article className="card agent-card" key={name}>
            <p className="eyebrow">Placeholder</p>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="draft-box">Future editable draft output. Yaniv reviews before any client or supplier action.</div>
          </article>
        ))}
      </section>
      <RulePanel />
    </>
  );
}

function App() {
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");

  const page = {
    dashboard: <DashboardPage />,
    clients: <ClientsPage />,
    projects: <ProjectsPage />,
    "project-detail": <ProjectDetailPage />,
    suppliers: <SuppliersPage />,
    "supplier-detail": <SupplierDetailPage />,
    "pricing-margin": <PricingMarginPage />,
    "change-requests": <ChangeRequestsPage />,
    "supplier-time": <SupplierTimePage />,
    "payments-hours": <PaymentsHoursPage />,
    "client-portal": <ClientPortalPage />,
    "supplier-portal": <SupplierPortalPage />,
    "ai-workbench": <AiWorkbenchPage />,
  } satisfies Record<ViewKey, JSX.Element>;

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {page[activeView]}
    </Layout>
  );
}

export default App;
