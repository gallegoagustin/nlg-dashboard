import React from 'preact/compat';
import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';
import { getJobsSortedByViewDate } from './getters';

export const OperationsDashboardTypist = ({ title, data, userId }) => {
    return (
        <div className='operations-container'>
            <div className='title-container' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h1 className='screen-title'>{title}</h1>
                <a href={'https://uat.app.kaptursoftware.co.uk/jobs/create/'} className='add-button'>Add Job</a>
            </div>
            <div className="data-container">
                <div className="cards-container">
                    <div style={{ width: '50%', height: '50%', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0.5%'}}>
                        <CardDashboard title={'Assigned Jobs'}/>
                        <CardDashboard title={'In Progress'}/>
                        <CardDashboard title={'Completed Jobs'}/>	
                    </div>
                    <div style={{ width: '50%', display: 'flex', paddingBottom: '0.5%' }}>
                        <TableDashboard tableTitle={'Recently viewed jobs'} filterFunction={getJobsSortedByViewDate} data={data} userId={userId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

