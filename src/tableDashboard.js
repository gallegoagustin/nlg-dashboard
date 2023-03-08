import { useMemo } from 'preact/hooks';

export const TableDashboard = ({tableTitle, extendScreen, filterFunction, counterFunction, data, userId}) => {
	const heading = ['Client', 'Requested Date', 'Address', 'Job Type']

	const filteredData = useMemo(() => {
		if (filterFunction) return filterFunction(data, userId);
		else return [];
	}, [data])

	const counterData = useMemo(() => {
		if (counterFunction) return counterFunction(data);
		else return null;
	}, [data])

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
			<div className='real-table-container'>
				<table className='styled_table'>
					<thead>
						<tr>
							{heading.map((row, index) => (
								<th key={`${index}-row`}>{row}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{filteredData.map((row, index) => (
							<tr key={`${index}-row`}>
								<td style={{ width: '15%' }}>{row.organization}</td>
								<td style={{ width: '15%' }}>{row.requested_date}</td>
								<td style={{ width: '50%' }}>{row.address}</td>
								<td style={{ width: '20%' }}>{row.job_type}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
