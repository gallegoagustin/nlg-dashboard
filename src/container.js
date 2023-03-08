import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import { OperationsDashboardFranchisee } from './operationsDashboardFranchisee';
import { OperationsDashboardDirectPartner } from './operationsDashboardDirectPartner';
import { OperationsDashboardContactorPartner } from './operationsDashboardContactorPartner';
import { MessagesSection } from './messagesSection'; 
import './index.css';

// Comment components depending on which one want to render.

export default function Container() {
  return (
    <div className="dashboard-container">
      {/* <OperationsDashboardManager title={'Operations Dashboard [Manager]'} /> */}
      {/* <OperationsDashboardTypist title={'Operations Dashboard [Typist]'} /> */}
      {/* <OperationsDashboardFranchisee title={'Operations Dashboard [Franchisee Partner]'} /> */}
      {/* <OperationsDashboardDirectPartner title={'Operations Dashboard [Direct Partner]'} /> */}
      {/* <OperationsDashboardContactorPartner title={'Operations Dashboard [Contractor Partner]'} /> */}
      <MessagesSection title={'Messages'}/>
    </div>
  )
}