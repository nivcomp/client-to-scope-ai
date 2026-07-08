import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { changeRequests, clientPayments, hourBanks } from "../data/mockData";
import { canWorkStart, currency, getClientById, getProjectsForClient, statusLabels } from "../lib/domainHelpers";

type ClientDetailPageProps = {
  selectedClientId?: string;
  onProjectSelect: (projectId: string) => void;
};

function getWaitingOn(projectStatus: string, paymentStatus?: string) {
  if (projectStatus === "waiting_for_agency_pricing") return "Yaniv";
  if (projectStatus === "waiting_for_client_approval") return "Client";
  if (projectStatus === "waiting_for_payment" || paymentStatus === "requested" || paymentStatus === "overdue") return "Payment";
  return "Active monitoring";
}

export function ClientDetailPage({ selectedClientId, onProjectSelect }: ClientDetailPageProps) {
  const client = selectedClientId ? getClientById(selectedClientId) : undefined;

  if (!client) {
    return (
      <>
        <PageHeader title="Client Detail" subtitle="Select a client from the Clients page to inspect projects, payments, hour banks, and open requests." />
        <section className="empty-state">
          <h2>No client selected</h2>
          <p>Open the Clients page and choose a client row.</p>
        </section>
      </>
    );
  }

  const clientProjects = getProjectsForClient(client.id);
  const clientProjectIds = clientProjects.map((project) => project.id);
  const clientHourBanks = hourBanks.filter((bank) => bank.clientId === client.id);
  const openChangeRequests = changeRequests.filter(
    (request) => clientProjectIds.includes(request.projectId) && request.status !== "declined" && request.status !== "client_approved",
  );

  return (
    <>
      <PageHeader title="Client Detail" subtitle="A focused client workspace for Yaniv to see project state, blockers, payments, paid hours, and requests." />
      <section className="detail-grid">
        <article className="card">
          <h2>{client.company}</h2>
          <dl className="meta-list">
            <div><dt>Contact</dt><dd>{client.name}</dd></div>
            <div><dt>Email</dt><dd>{client.email}</dd></div>
            <div><dt>Phone</dt><dd>{client.phone ?? "Not set"}</dd></div>
            <div><dt>Status</dt><dd><StatusBadge label={client.status} tone={client.status === "lead" ? "warning" : "success"} /></dd></div>
          </dl>
        </article>
        <article className="card">
          <h2>Notes</h2>
          <p>{client.notes}</p>
        </article>
      </section>

      <section className="card">
        <h2>Projects</h2>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Start gate</th>
              <th>Waiting on</th>
            </tr>
          </thead>
          <tbody>
            {clientProjects.map((project) => {
              const payment = clientPayments.find((item) => item.projectId === project.id);
              return (
                <tr key={project.id} className="clickable-row" onClick={() => onProjectSelect(project.id)}>
                  <td>{project.name}</td>
                  <td><StatusBadge label={statusLabels[project.status]} tone={canWorkStart(project) ? "success" : "warning"} /></td>
                  <td>{payment?.status ?? "Not due"}</td>
                  <td>{canWorkStart(project) ? "Ready" : "Blocked"}</td>
                  <td>{getWaitingOn(project.status, payment?.status)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="detail-grid">
        <article className="card">
          <h2>Payments</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {clientPayments
                .filter((payment) => clientProjectIds.includes(payment.projectId))
                .map((payment) => {
                  const project = clientProjects.find((item) => item.id === payment.projectId);
                  return (
                    <tr key={payment.id}>
                      <td>{project?.name}</td>
                      <td>{currency.format(payment.amount)}</td>
                      <td><StatusBadge label={payment.status} tone={payment.status === "received" ? "success" : "warning"} /></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </article>
        <article className="card">
          <h2>Hour banks</h2>
          {clientHourBanks.length ? (
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Purchased</th>
                  <th>Remaining</th>
                </tr>
              </thead>
              <tbody>
                {clientHourBanks.map((bank) => {
                  const project = clientProjects.find((item) => item.id === bank.projectId);
                  return (
                    <tr key={bank.id}>
                      <td>{project?.name ?? "General"}</td>
                      <td>{bank.hoursPurchased} hrs</td>
                      <td>{bank.hoursRemaining} hrs</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No paid hour bank for this client yet.</p>
          )}
        </article>
      </section>

      <section className="card">
        <h2>Open change requests</h2>
        {openChangeRequests.length ? (
          <table>
            <thead>
              <tr>
                <th>Request</th>
                <th>Project</th>
                <th>Status</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              {openChangeRequests.map((request) => {
                const project = clientProjects.find((item) => item.id === request.projectId);
                return (
                  <tr key={request.id}>
                    <td>{request.title}</td>
                    <td>{project?.name}</td>
                    <td><StatusBadge label={request.status} tone="warning" /></td>
                    <td>Needs agency pricing and client approval before work starts</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No open change requests for this client.</p>
        )}
      </section>
    </>
  );
}
