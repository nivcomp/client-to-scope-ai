import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { changeRequests } from "../data/mockData";
import { currency, getProjectName } from "../lib/domainHelpers";

export function ChangeRequestsPage() {
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
