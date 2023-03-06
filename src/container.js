import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import './index.css';

// Comentar los componentes dependiendo que screen se quiere renderizar.

export default function Container() {
  return (
    <div className="dashboard-container">
      <OperationsDashboardManager title={'Operations Dashboard [Manager]'}></OperationsDashboardManager>
      {/* <OperationsDashboardTypist title={'Operations Dashboard [Typist]'}></OperationsDashboardTypist> */}
    </div>
  )
}