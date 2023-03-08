import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import { OperationsDashboardFranchisee } from './operationsDashboardFranchisee';
import { OperationsDashboardDirectPartner } from './operationsDashboardDirectPartner';
import { OperationsDashboardContactorPartner } from './operationsDashboardContactorPartner';
import { MessagesSection } from './messagesSection'; 
import { useReducer, useEffect, useState } from "preact/hooks";
import { reducer, initialState } from './state';
import { getAsyncJobs } from './getters';
import './index.css';

export default function Container() {
	const [state, dispatch] = useReducer(reducer, initialState);

  const [currentView, setCurrentView] = useState(1);

  const asyncFetch = async () => {
    const response = await getAsyncJobs();
    dispatch({
      type: 'FETCH_DATA',
      payload: {
        data: response,
      }
    })
  }

  useEffect(() => {
    asyncFetch();
  }, [])

  return (
    <div className="dashboard-container" style={{display: 'flex', flexDirection: 'column'}}>
      <select value={currentView} onChange={(e) => setCurrentView(parseInt(e.target.value))} style={{ width: '25%', backgroundColor: 'white' }}>
        <option value={1}>Operations Dashboard [Manager]</option>
        <option value={2}>Operations Dashboard [Typist]</option>
        <option value={3}>Operations Dashboard [Franchisee Partner]</option>
        <option value={4}>Operations Dashboard [Direct Partner]</option>
        <option value={5}>Operations Dashboard [Contractor Partner]</option>
        <option value={6}>Operations Dashboard [Messages]</option>
      </select>
      {currentView === 1 && <OperationsDashboardManager title={'Operations Dashboard [Manager]'} data={state.data} userId={state.userId} />}
      {currentView === 2 && <OperationsDashboardTypist title={'Operations Dashboard [Typist]'} data={state.data} userId={state.userId} />}
      {currentView === 3 && <OperationsDashboardFranchisee title={'Operations Dashboard [Franchisee Partner]'} data={state.data} userId={state.userId} />}
      {currentView === 4 && <OperationsDashboardDirectPartner title={'Operations Dashboard [Direct Partner]'} data={state.data} userId={state.userId} />}
      {currentView === 5 && <OperationsDashboardContactorPartner title={'Operations Dashboard [Contractor Partner]'} data={state.data} userId={state.userId} />}
      {currentView === 6 && <MessagesSection title={'Messages'} />}
    </div>
  )
}