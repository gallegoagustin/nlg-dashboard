import { fakeData } from './data'
import { Message } from './message';
import { useState } from 'preact/hooks';

export const MessagesInbox = ({tableTitle}) => {
	const heading = ['Date', 'Subject:', 'Job Address:', 'Sender:']
	const firstFiveEntries = fakeData.slice(0, 5);
    const [showReadOnly, setShowReadOnly] = useState(false);
    const onReadOnly = () => {
        setShowReadOnly(!showReadOnly);
    }
	return (
		<div className='table-container'>
            <div className='table-header'>
                <h1 className='table_header__title'>{tableTitle}</h1>
                <h1 className='total-messages'>Total messages: 99</h1>
            </div>
            <div className='center-div'>
                <div className='inbox-container'>
                    <table className='styled-table-msg'>
                        <thead>
                            <tr>
                                {heading.map((row, index) => (
                                    <th key={`${index}-row`}>{row}</th>
                                ))}
                                <div className='table-header-mark-as-read'>
                                    <h1 className='read-filter'>{showReadOnly ? 'Read only': 'All messages'}</h1>
                                    <img className={showReadOnly ? 'eye-open-svg-read' : 'eye-open-svg'} src='./assets/eye-open.svg' alt='mark as read' onClick={() => onReadOnly()}/>
                                </div>
                            </tr>
                        </thead>
                    </table>
                    <Message isRead={false} date='22/08/1990' subject={firstFiveEntries[0].job_type} jobAdress={firstFiveEntries[0].address} sender={firstFiveEntries[0].clerk_name}/>
                    <Message date='12/09/1997'subject={firstFiveEntries[1].job_type} jobAdress={firstFiveEntries[1].address} sender={firstFiveEntries[1].clerk_name}/>
                    <Message date='26/08/2021'subject={firstFiveEntries[2].job_type} jobAdress={firstFiveEntries[2].address} sender={firstFiveEntries[2].clerk_name}/>
                    <Message date='09/06/2022'subject={firstFiveEntries[3].job_type} jobAdress={firstFiveEntries[3].address} sender={firstFiveEntries[3].clerk_name}/>
                    <Message date='22/08/1990' subject={firstFiveEntries[0].job_type} jobAdress={firstFiveEntries[0].address} sender={firstFiveEntries[0].clerk_name}/>
                    <Message date='12/09/1997'subject={firstFiveEntries[1].job_type} jobAdress={firstFiveEntries[1].address} sender={firstFiveEntries[1].clerk_name}/>
                    <Message date='26/08/2021'subject={firstFiveEntries[2].job_type} jobAdress={firstFiveEntries[2].address} sender={firstFiveEntries[2].clerk_name}/>
                    <Message date='09/06/2022'subject={firstFiveEntries[3].job_type} jobAdress={firstFiveEntries[3].address} sender={firstFiveEntries[3].clerk_name}/>
                    <Message isRead={false} date='22/08/1990' subject={firstFiveEntries[0].job_type} jobAdress={firstFiveEntries[0].address} sender={firstFiveEntries[0].clerk_name}/>
                    <Message date='12/09/1997'subject={firstFiveEntries[1].job_type} jobAdress={firstFiveEntries[1].address} sender={firstFiveEntries[1].clerk_name}/>
                    <Message date='26/08/2021'subject={firstFiveEntries[2].job_type} jobAdress={firstFiveEntries[2].address} sender={firstFiveEntries[2].clerk_name}/>
                    <Message date='09/06/2022'subject={firstFiveEntries[3].job_type} jobAdress={firstFiveEntries[3].address} sender={firstFiveEntries[3].clerk_name}/>
                    <Message date='22/08/1990' subject={firstFiveEntries[0].job_type} jobAdress={firstFiveEntries[0].address} sender={firstFiveEntries[0].clerk_name}/>
                    <Message date='12/09/1997'subject={firstFiveEntries[1].job_type} jobAdress={firstFiveEntries[1].address} sender={firstFiveEntries[1].clerk_name}/>
                    <Message date='26/08/2021'subject={firstFiveEntries[2].job_type} jobAdress={firstFiveEntries[2].address} sender={firstFiveEntries[2].clerk_name}/>
                    <Message date='09/06/2022'subject={firstFiveEntries[3].job_type} jobAdress={firstFiveEntries[3].address} sender={firstFiveEntries[3].clerk_name}/>
                </div>
                <div className='page-container'>
                    <h3>1-20/99</h3>
                    <img className='arrows' src='./assets/arrow-left.svg' alt='left'/>
                    <img className='arrows' src='./assets/arrow-right.svg' alt='right'/>
                </div>
            </div>
		</div>
	)
}
1