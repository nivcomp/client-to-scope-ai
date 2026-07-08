import { PageHeader } from "../components/PageHeader";
import { approvals, clientPayments, projects } from "../data/mockData";
import { statusLabels } from "../lib/domainHelpers";

export function ClientPortalPage() {
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
