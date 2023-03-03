import { h } from 'preact'
import { CardDashboard, Datepicker, TableDashboard } from '../../common'

import style from './styles.css'

const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboard = ({ title }) => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					width: '50%',
					justifyContent: 'space-between',
				}}
			>
				<h1>{title}</h1>
				<Datepicker />
			</div>
			<div className={style.grid_container}>
				<div className={style.grid_container__cards}>
					{arrCards.map((card, index) => (
						<CardDashboard title={'Late pending'} key={`${index}-index`} />
					))}
				</div>
				<div className={style.table_container}>
					<TableDashboard />
					<TableDashboard />
				</div>
			</div>
		</div>
	)
}
