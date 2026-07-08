import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { decisionLogs, fileLinks, projectBriefs, projects, scopeItems, scopes } from "../data/mockData";
import { canWorkStart, currency, getClient, getPricing, getSupplierName, statusLabels } from "../lib/domainHelpers";

export function ProjectDetailPage() {
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
