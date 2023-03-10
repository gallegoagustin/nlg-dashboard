import React from 'preact/compat';
import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';
import { getJobsFilteredByPartner, getJobsSortedByViewDate, getUnallocatedJobsCounter } from './getters';

export const OperationsDashboardManager = ({ title, data, userId }) => {
    return (
        <div className='operations-container'>
            <div className='title-container' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h1 className='screen-title'>{title}</h1>
                <a href={'https://uat.app.kaptursoftware.co.uk/jobs/create/'} className='add-button'>Add Job</a>
            </div>
            <div className="data-container">
                <div className="cards-container">
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0.5%' }}>
                        <CardDashboard title={'Late Reports'} includesGraphic/>
                        <CardDashboard title={'Late Pending'} includesGraphic/>
                        <CardDashboard title={'Processing'}/>	
                    </div>
                    <div style={{ width: '50%', display: 'flex', paddingBottom: '0.5%' }}>
                        <TableDashboard tableTitle={'Unallocated Jobs'} extendScreen counterFunction={getUnallocatedJobsCounter} filterFunction={getJobsFilteredByPartner} data={data} userId={userId} />
                    </div>
                </div>
                <div className="cards-container">
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginTop: '0.5%' }}>
                        <CardDashboard title={'Unable To Contact'} />
                        <CardDashboard title={'Quality Control'} />
                        <CardDashboard title={'Today\'s Booked jobs'}/>
                    </div>
                    <div style={{ width: '50%', display: 'flex', paddingTop: '0.5%' }}>
                        <TableDashboard tableTitle={'Recently viewed jobs'} filterFunction={getJobsSortedByViewDate} data={data} userId={userId} />
                    </div>

                </div>
            </div>
        </div>
    );
};
