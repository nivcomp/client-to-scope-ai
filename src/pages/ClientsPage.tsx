import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { clients } from "../data/mockData";

type ClientsPageProps = {
  onClientSelect: (clientId: string) => void;
};

export function ClientsPage({ onClientSelect }: ClientsPageProps) {
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
              <tr key={client.id} className="clickable-row" onClick={() => onClientSelect(client.id)}>
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
