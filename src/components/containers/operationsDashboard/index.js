import { h } from 'preact'
import { CardDashboard, TableDashboard } from '../../common'

import style from './styles.css'

const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboard = ({ title }) => {
	return (
		<div>
			<div className={style.grid_container}>
				<h1>{title}</h1>
				<h3>Select</h3>
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
