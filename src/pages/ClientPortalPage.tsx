import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { approvals } from "../data/mockData";
import { canWorkStart, currency, getClientById, statusLabels } from "../lib/domainHelpers";
import type { ChangeRequest, Client, ClientPayment, HourBank, Project } from "../types/domain";

type ClientPortalPageProps = {
  selectedClientId?: string;
  clients: Client[];
  projects: Project[];
  changeRequests: ChangeRequest[];
  clientPayments: ClientPayment[];
  hourBanks: HourBank[];
};

export function ClientPortalPage({
  selectedClientId,
  clients,
  projects,
  changeRequests,
  clientPayments,
  hourBanks,
}: ClientPortalPageProps) {
  const fallbackClient = clients[0];
  const client = selectedClientId ? getClientById(selectedClientId, clients) ?? fallbackClient : fallbackClient;
  const clientProjects = client ? projects.filter((project) => project.clientId === client.id) : [];
  const clientProjectIds = clientProjects.map((project) => project.id);
  const clientHourBanks = client ? hourBanks.filter((bank) => bank.clientId === client.id) : [];
  const clientChangeRequests = changeRequests.filter((request) => clientProjectIds.includes(request.projectId));

  return (
    <>
      <PageHeader title="Client Portal Placeholder" subtitle="A simple future client view for approvals, project status, paid-hour balance, files, and change requests." />
      <section className="card">
        <h2>{client ? `${client.company} client view` : "No client available"}</h2>
        <p>{selectedClientId ? `Viewing as ${client?.name}.` : `No client selected. Showing fallback client ${client?.company ?? "none"}.`}</p>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Approval</th>
              <th>Payment</th>
              <th>Start rule</th>
            </tr>
          </thead>
          <tbody>
            {clientProjects.map((project) => {
              const approval = approvals.find((item) => item.projectId === project.id);
              const payment = clientPayments.find((item) => item.projectId === project.id);
              return (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td><StatusBadge label={statusLabels[project.status]} tone={canWorkStart(project) ? "success" : "warning"} /></td>
                  <td>{approval?.status ?? "Not requested"}</td>
                  <td>{payment?.status ?? "Not due"}</td>
                  <td>{canWorkStart(project) ? "Ready" : "Waiting for approval, payment, or paid hours"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="detail-grid">
        <article className="card">
          <h2>Payments and hour balance</h2>
          {clientPayments.filter((payment) => clientProjectIds.includes(payment.projectId)).length ? (
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
                        <td>{project?.name ?? "Project"}</td>
                        <td>{currency.format(payment.amount)}</td>
                        <td><StatusBadge label={payment.status} tone={payment.status === "received" ? "success" : "warning"} /></td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          ) : (
            <p>No client payment requests are visible yet.</p>
          )}
        </article>
        <article className="card">
          <h2>Paid hours</h2>
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
            <p>No paid hour bank is visible for this client.</p>
          )}
        </article>
      </section>
      <section className="card">
        <h2>Change requests</h2>
        {clientChangeRequests.length ? (
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
              {clientChangeRequests.map((request) => {
                const project = clientProjects.find((item) => item.id === request.projectId);
                return (
                  <tr key={request.id}>
                    <td>{request.title}</td>
                    <td>{project?.name ?? "Project"}</td>
                    <td><StatusBadge label={request.status} tone={request.status === "client_approved" ? "success" : "warning"} /></td>
                    <td>{request.status === "client_approved" ? "Approved change can become work" : "Needs agency pricing and client approval before work starts"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No change requests are visible for this client.</p>
        )}
      </section>
    </>
  );
}
