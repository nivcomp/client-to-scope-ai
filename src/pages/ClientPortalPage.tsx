import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { approvals, fileLinks, projectMessages, scopeItems, scopes } from "../data/mockData";
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
  const clientApprovals = approvals.filter((approval) => clientProjectIds.includes(approval.projectId));
  const clientVisibleFiles = fileLinks.filter(
    (file) => clientProjectIds.includes(file.projectId) && file.visibility === "client_visible",
  );
  const clientVisibleMessages = projectMessages.filter(
    (message) => clientProjectIds.includes(message.projectId) && message.visibility === "client_visible",
  );
  const clientVisibleScopeItems = scopeItems
    .map((item) => {
      const scope = scopes.find((currentScope) => currentScope.id === item.scopeId);
      return { item, scope };
    })
    .filter(({ item, scope }) => item.clientVisible && scope && clientProjectIds.includes(scope.projectId));

  return (
    <>
      <PageHeader title="Client Portal Placeholder" subtitle="A simple future client view for approvals, project status, paid-hour balance, files, and change requests." />
      <section className="card">
        <h2>{client ? `${client.company} client view` : "No client available"}</h2>
        <p>{selectedClientId ? `Viewing as ${client?.name}.` : `No client selected. Showing fallback client ${client?.company ?? "none"}.`}</p>
        {clientProjects.length ? (
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
        ) : (
          <p>No client-visible projects are available for this client yet.</p>
        )}
      </section>
      <section className="card">
        <h2>Scope items</h2>
        {clientVisibleScopeItems.length ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Scope</th>
                <th>Phase</th>
                <th>Item</th>
                <th>Acceptance</th>
              </tr>
            </thead>
            <tbody>
              {clientVisibleScopeItems.map(({ item, scope }) => (
                <tr key={item.id}>
                  <td>{scope ? clientProjects.find((project) => project.id === scope.projectId)?.name ?? "Project" : "Project"}</td>
                  <td>{scope ? `v${scope.version} · ${scope.status}` : "Scope"}</td>
                  <td>{item.phase}</td>
                  <td>
                    <strong>{item.title}</strong>
                    <br />
                    {item.description}
                  </td>
                  <td>{item.acceptanceNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No client-visible scope items are available for this client yet.</p>
        )}
      </section>
      <section className="card">
        <h2>Scope approvals</h2>
        {clientApprovals.length ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Scope</th>
                <th>Approval</th>
                <th>Notes</th>
                <th>Approved date</th>
              </tr>
            </thead>
            <tbody>
              {clientApprovals.map((approval) => {
                const project = clientProjects.find((item) => item.id === approval.projectId);
                const scope = scopes.find((item) => item.id === approval.scopeId);
                return (
                  <tr key={approval.id}>
                    <td>{project?.name ?? "Project"}</td>
                    <td>{scope ? `v${scope.version} - ${scope.status}` : "Scope not linked"}</td>
                    <td>
                      <StatusBadge
                        label={approval.status}
                        tone={approval.status === "approved" ? "success" : "warning"}
                      />
                    </td>
                    <td>{approval.notes}</td>
                    <td>{approval.approvedDate ?? "Pending"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No scope approvals are visible for this client yet.</p>
        )}
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
                  <th>Due</th>
                  <th>Received</th>
                  <th>Notes</th>
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
                        <td>{payment.dueDate ?? "Not set"}</td>
                        <td>{payment.receivedDate ?? "Not received"}</td>
                        <td>{payment.notes}</td>
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
                  <th>Expiry</th>
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
                      <td>{bank.expiryDate ?? "No expiry"}</td>
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
                <th>Client price</th>
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
                    <td>{request.agencyPrice ? currency.format(request.agencyPrice) : "Awaiting agency pricing"}</td>
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
      <section className="card">
        <h2>Files and links</h2>
        {clientVisibleFiles.length ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Project</th>
                <th>Type</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {clientVisibleFiles.map((file) => {
                const project = clientProjects.find((item) => item.id === file.projectId);
                return (
                  <tr key={file.id}>
                    <td>{file.title}</td>
                    <td>{project?.name ?? "Project"}</td>
                    <td>{file.fileType}</td>
                    <td><a href={file.url}>Open</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No client-visible files or links are available for this client yet.</p>
        )}
      </section>
      <section className="card">
        <h2>Messages</h2>
        {clientVisibleMessages.length ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>From</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {clientVisibleMessages.map((message) => {
                const project = clientProjects.find((item) => item.id === message.projectId);
                return (
                  <tr key={message.id}>
                    <td>{project?.name ?? "Project"}</td>
                    <td>{message.authorRole}</td>
                    <td>{message.body}</td>
                    <td>{message.createdDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No client-visible project messages are available yet.</p>
        )}
      </section>
    </>
  );
}
