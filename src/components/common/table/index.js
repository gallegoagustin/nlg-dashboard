import { fakeData } from './data'
import styles from './index.css'

export const TableDashboard = () => {
	const heading = ['Reference', 'Requested Date', 'Address', 'Jobs Types']
	return (
		<div className={styles.table_container}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: '#08548b',
					color: 'white',
					height: '30px',
					padding: '1em',
					borderRadius: '6px 6px 0px 0px',
				}}
			>
				<div className={styles.table_header__title}>Jobs</div>
				<span>icon</span>
			</div>
			<div>
				<table className={styles.styled_table}>
					<thead>
						<tr>
							{heading.map((row, index) => (
								<th key={`${index}-row`}>{row}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{fakeData.map((row, index) => (
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
