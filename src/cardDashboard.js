import { LineChart } from './lineChart'

export const CardDashboard = ({ title, includesGraphic }) => {
	return (
		<div className="cardWrapper">
			<span className="title">{title}</span>
			<p className="value">999</p>
			{includesGraphic && (
				<div className='graphic-container'>
					<span className="percent">100%</span>
					<LineChart />
				</div>
			)}
		</div>
	)
}
