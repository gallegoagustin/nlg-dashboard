import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import { useEffect } from 'react';
import { getAsyncJobs } from './getters';
import './index.css';

// Comentar los componentes dependiendo que screen se quiere renderizar.

export default function Container() {

  useEffect(() => {
    getAsyncJobs();
  }, [])

  return (
    <div className="dashboard-container" style={{display: 'flex', flexDirection: 'column'}}>
      <OperationsDashboardManager title={'Operations Dashboard [Manager]'}></OperationsDashboardManager>
      <OperationsDashboardTypist title={'Operations Dashboard [Typist]'}></OperationsDashboardTypist>
    </div>
  )
}