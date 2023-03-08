import { fakeData } from './data'

export const TableDashboard = ({tableTitle, extendScreen}) => {
	const heading = ['Client', 'Requested Date', 'Address', 'Job Type']
	const firstFiveEntries = fakeData.slice(0, 5);
	return (
		<div className='table-container'>
			<div className='table-header'>
				<h1 className='table_header__title'>{tableTitle}</h1>
				{ extendScreen && (
					<div className='table-header-full-screen'>
						<h1 className='amount-of'>999</h1>
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
						{firstFiveEntries.map((row, index) => (
							<tr key={`${index}-row`}>
								<td>{row.job_type}</td>
								<td>{row.requested_date}</td>
								<td>{row.address}</td>
								<td>{row.job_type}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
