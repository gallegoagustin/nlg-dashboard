import { LineChart } from './lineChart'

export const CardDashboard = ({ title, includesGraphic }) => {
	return (
		<div className="cardWrapper">
			<span className="title">{title}</span>
			<h1	className="value">999</h1>
			{includesGraphic && (
				<div className='graphic-container'>
					<span className="percent">⬆9999%</span>
					<LineChart />
				</div>
			)}
		</div>
	)
}
