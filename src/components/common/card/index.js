import { LineChart } from '../lineChart'
import style from './index.css'

export const CardDashboard = ({ title }) => {
	return (
		<div className={style.cardWrapper}>
			<span className={style.title}>{title}</span>
			<p className={style.value}>999</p>
			<span className={style.percent}>100%</span>
			<div
				style={{
					width: '200px',
					height: '150px',
					marginTop: '16px',
				}}
			>
				<LineChart />
			</div>
		</div>
	)
}
