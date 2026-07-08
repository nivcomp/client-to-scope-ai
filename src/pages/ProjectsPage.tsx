import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { projects } from "../data/mockData";
import { canWorkStart, getClient, getSupplierName, statusLabels } from "../lib/domainHelpers";

type ProjectsPageProps = {
  onProjectSelect: (projectId: string) => void;
};

export function ProjectsPage({ onProjectSelect }: ProjectsPageProps) {
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
              <tr key={project.id} className="clickable-row" onClick={() => onProjectSelect(project.id)}>
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
