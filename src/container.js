import { OperationsDashboard } from './operationDashboards';
import './index.css';

export default function Container() {
  return (
    <div className="dashboard-container">
      <OperationsDashboard title={'Operations Dashboard'}></OperationsDashboard>
    </div>
  )
}