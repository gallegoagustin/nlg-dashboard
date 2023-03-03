import { LineChart } from './lineChart'

export const CardDashboard = ({ title }) => {
	return (
		<div className="cardWrapper">
			<span className="title">{title}</span>
			<p className="value">999</p>
			<span className="percent">100%</span>
			<div
				style={{
					width: '200px',
					height: '150px',
					marginTop: '16px',
					backgroundColor: 'red',
				}}
			>
				<LineChart />
			</div>
		</div>
	)
}
