import { OperationsDashboard } from './operationDashboards';
import './index.css';

export default function Container() {
  return (
    <div className="dashboard-container">
      <p>container</p>
      <OperationsDashboard className="operations-dashboard" ></OperationsDashboard>
    </div>
  )
}