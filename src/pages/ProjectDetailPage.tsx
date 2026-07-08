import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import {
  changeRequests,
  clientPayments,
  decisionLogs,
  fileLinks,
  projectBriefs,
  scopeItems,
  scopes,
  supplierProfiles,
  suppliers,
  timeEntries,
} from "../data/mockData";
import {
  canWorkStart,
  currency,
  getClient,
  getPricing,
  getProjectById,
  getSupplierName,
  statusLabels,
} from "../lib/domainHelpers";

type ProjectDetailPageProps = {
  selectedProjectId?: string;
};

export function ProjectDetailPage({ selectedProjectId }: ProjectDetailPageProps) {
  const project = selectedProjectId ? getProjectById(selectedProjectId) : undefined;

  if (!project) {
    return (
      <>
        <PageHeader title="Project Detail" subtitle="Select a project from the Projects page or a Client Detail page to open its command center." />
        <section className="empty-state">
          <h2>No project selected</h2>
          <p>Choose a project row to inspect summary, payment gate, scope, suppliers, changes, files, and decisions.</p>
        </section>
      </>
    );
  }

  const client = getClient(project);
  const pricing = getPricing(project.id);
  const scope = scopes.find((item) => item.projectId === project.id);
  const brief = projectBriefs.find((item) => item.projectId === project.id);
  const items = scope ? scopeItems.filter((item) => item.scopeId === scope.id) : [];
  const payment = clientPayments.find((item) => item.projectId === project.id);
  const projectChanges = changeRequests.filter((request) => request.projectId === project.id);
  const projectTimeEntries = timeEntries.filter((entry) => entry.projectId === project.id);
  const projectFiles = fileLinks.filter((file) => file.projectId === project.id);
  const projectDecisions = decisionLogs.filter((decision) => decision.projectId === project.id);

  return (
    <>
      <PageHeader title="Project Command Center" subtitle="A single project view for summary, client context, payment gate, scope, pricing, suppliers, changes, files, and decisions." />
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
          <h2>Payment gate</h2>
          <p>{canWorkStart(project) ? "Work may start because payment is received or paid hours are available." : "Work remains blocked until payment is received or paid hours are available."}</p>
          <dl className="meta-list">
            <div><dt>Gate</dt><dd>{project.paymentGateStatus}</dd></div>
            <div><dt>Payment</dt><dd>{payment?.status ?? "Not due"}</dd></div>
            <div><dt>Amount</dt><dd>{payment ? currency.format(payment.amount) : "Not set"}</dd></div>
          </dl>
        </article>
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Brief</h2>
          {brief ? (
            <>
              <p>{brief.problemStatement}</p>
              <h3>Goals</h3>
              <ul>{brief.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
              <h3>Constraints</h3>
              <ul>{brief.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul>
            </>
          ) : (
            <p>No brief has been drafted for this project yet.</p>
          )}
        </article>
        <article className="card">
          <h2>Agency pricing separation</h2>
          <dl className="meta-list">
            <div><dt>Client price</dt><dd>{pricing ? currency.format(pricing.clientPrice) : "Not set"}</dd></div>
            <div><dt>Supplier cost</dt><dd>{pricing ? currency.format(pricing.supplierCostEstimate) : "Not set"}</dd></div>
            <div><dt>Margin</dt><dd>{pricing ? `${pricing.actualMarginPercent}%` : "Not set"}</dd></div>
            <div><dt>Internal note</dt><dd>{pricing?.pricingNotes ?? "Pricing not set"}</dd></div>
          </dl>
        </article>
      </section>
      <section className="card">
        <h2>Client details</h2>
        <dl className="meta-list">
          <div><dt>Company</dt><dd>{client?.company}</dd></div>
          <div><dt>Contact</dt><dd>{client?.name}</dd></div>
          <div><dt>Email</dt><dd>{client?.email}</dd></div>
          <div><dt>Phone</dt><dd>{client?.phone ?? "Not set"}</dd></div>
        </dl>
      </section>
      <section className="card">
        <h2>Scope and scope items</h2>
        {scope ? (
          <>
            <p>{scope.clientFacingSummary}</p>
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
          </>
        ) : (
          <p>No scope has been created for this project yet.</p>
        )}
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Assigned suppliers</h2>
          {project.assignedSupplierIds.length ? (
            <table>
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>Status</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                {project.assignedSupplierIds.map((supplierId) => {
                  const supplier = suppliers.find((item) => item.id === supplierId);
                  const profile = supplierProfiles.find((item) => item.supplierId === supplierId);
                  return (
                    <tr key={supplierId}>
                      <td>{supplier?.name ?? getSupplierName(supplierId)}</td>
                      <td>{supplier?.status ?? "Unknown"}</td>
                      <td>{profile?.mainSkills.join(", ") ?? "Not set"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No supplier assigned yet.</p>
          )}
        </article>
        <article className="card">
          <h2>Supplier time entries</h2>
          {projectTimeEntries.length ? (
            <table>
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>Hours</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {projectTimeEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{getSupplierName(entry.supplierId)}</td>
                    <td>{entry.hours}</td>
                    <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No supplier time has been logged for this project.</p>
          )}
        </article>
      </section>
      <section className="card">
        <h2>Change requests</h2>
        {projectChanges.length ? (
          <table>
            <thead>
              <tr>
                <th>Request</th>
                <th>Status</th>
                <th>Agency price</th>
                <th>Supplier cost</th>
                <th>Work rule</th>
              </tr>
            </thead>
            <tbody>
              {projectChanges.map((request) => (
                <tr key={request.id}>
                  <td>{request.title}</td>
                  <td><StatusBadge label={request.status} tone={request.status === "client_approved" ? "success" : "warning"} /></td>
                  <td>{request.agencyPrice ? currency.format(request.agencyPrice) : "Needs pricing"}</td>
                  <td>{request.supplierCost ? currency.format(request.supplierCost) : "Not estimated"}</td>
                  <td>{request.status === "client_approved" ? "Can become work" : "Blocked until priced and approved"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No change requests for this project.</p>
        )}
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Files and links</h2>
          {projectFiles.length ? projectFiles.map((file) => (
            <p key={file.id}>{file.title} - {file.visibility}</p>
          )) : <p>No files or links attached yet.</p>}
        </article>
        <article className="card">
          <h2>Decision log</h2>
          {projectDecisions.length ? projectDecisions.map((decision) => (
            <p key={decision.id}>{decision.decision} {decision.impact}</p>
          )) : <p>No decisions logged yet.</p>}
        </article>
      </section>
    </>
  );
}
