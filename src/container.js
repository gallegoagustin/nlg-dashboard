import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import { OperationsDashboardFranchisee } from './operationsDashboardFranchisee';
import { OperationsDashboardDirectPartner } from './operationsDashboardDirectPartner';
import { OperationsDashboardContactorPartner } from './operationsDashboardContactorPartner';
import { MessagesSection } from './messagesSection'; 
import { useReducer, useEffect } from "preact/hooks";
import { reducer, initialState } from './state';
import { getAsyncJobs } from './getters';
import './index.css';

// Comment components depending on which one want to render.

export default function Container() {
	const [state, dispatch] = useReducer(reducer, initialState);

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
      <OperationsDashboardManager title={'Operations Dashboard [Manager]'} data={state.data} />
      {/* <OperationsDashboardTypist title={'Operations Dashboard [Typist]'} /> */}
      {/* <OperationsDashboardFranchisee title={'Operations Dashboard [Franchisee Partner]'} /> */}
      {/* <OperationsDashboardDirectPartner title={'Operations Dashboard [Direct Partner]'} /> */}
      {/* <OperationsDashboardContactorPartner title={'Operations Dashboard [Contractor Partner]'} /> */}
      <MessagesSection title={'Messages'}/>
    </div>
  )
}