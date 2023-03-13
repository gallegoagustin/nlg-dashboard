import React from 'preact/compat';
import { useMemo } from 'preact/hooks';

export const TableDashboard = ({tableTitle, extendScreen, filterFunction, counterFunction, data, userId}) => {
    const heading = ['Client', 'Requested Date', 'Address', 'Job Type'];

    const filteredData = useMemo(() => {
        if (filterFunction) return filterFunction(data, userId);
        else return [];
    }, [data]);

    const counterData = useMemo(() => {
        if (counterFunction) return counterFunction(data);
        else return null;
    }, [data]);

    const formatDate = (date) => {
        let arr = date.split('-');

        let year = arr.shift();
        let finalArr = arr.push(year);
        let formatedDate = arr.join('-');
    
        return formatedDate;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <div className='table-header'>
                <h1 className='table_header__title'>{tableTitle}</h1>
                { extendScreen && (
                    <div className='table-header-full-screen'>
                        <h1 className='amount-of'>{counterData}</h1>
                        <img className='fullscreen-svg' src='./assets/fullscreen.svg' alt='view-full-screen'/>
                    </div>
                )}
            </div>
            <div className='real-table-container' style={{ padding: '1% 2%', fontSize: '0.8rem' }}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1%'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <span style={{ width: '15%' }}>{heading[0]}</span>
                            <span style={{ width: '15%' }}>{heading[1]}</span>
                            <span style={{ width: '50%' }}>{heading[2]}</span>
                            <span style={{ width: '20%' }}>{heading[3]}</span>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    {filteredData.map((row, index) => (
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.5%'}}>
                            <div key={`${index}-row`} style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5%'}}>
                                <span style={{ width: '15%', color: '#9FA2A3' }} title={row.organization_name}>{row.organization_name.length > 13 ? row.organization_name.slice(0, 13) + '...' : row.organization_name}</span>
                                <span style={{ width: '15%', color: '#9FA2A3' }} title={row.requested_date}>{row.requested_date ? formatDate(row.requested_date) : row.requested_date}</span>
                                <span style={{ width: '50%', color: '#9FA2A3' }} title={row.address}>{row.address.split(',')[0]}, {row.address.split(',')[2]}</span>
                                <span style={{ width: '20%', color: '#9FA2A3' }} title={row.job_type}>{row.job_type.length > 13 ? row.job_type.slice(0, 13) + '...' : row.job_type}</span>
                            </div>
                            {index !== filteredData.length - 1 && <div style={{width: '100%', height: '1px', borderBottom: '1px solid #bcbcbc'}}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
