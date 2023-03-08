import { OperationsDashboardManager } from './operationsDashboardManager';
import { OperationsDashboardTypist } from './operationsDashboardTypist';
import { useReducer, useEffect } from "preact/hooks";
import { reducer, initialState } from './state';
import { getAsyncJobs } from './getters';
import './index.css';

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
      <OperationsDashboardManager title={'Operations Dashboard [Manager]'}></OperationsDashboardManager>
      {/* <OperationsDashboardTypist title={'Operations Dashboard [Typist]'}></OperationsDashboardTypist> */}
    </div>
  )
}