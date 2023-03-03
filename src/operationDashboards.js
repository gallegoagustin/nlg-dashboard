import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

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
			</div>
			<div className="grid_container">
				<div className="grid_container__cards">
					{arrCards.map((card, index) => (
						<CardDashboard title={'Late pending'} key={`${index}-index`} />
					))}
				</div>
				<div className="table_container">
					{/* TODO pasar por props la data a cada tabla */}
					<TableDashboard />
					<TableDashboard />
				</div>
			</div>
		</div>
	)
}
