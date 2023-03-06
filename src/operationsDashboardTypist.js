import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

// const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboardTypist = ({ title }) => {
	return (
		<div className='operations-container'>
			<div className='title-container'>
				<h1 className='screen-title'>{title}</h1>
			</div>
			<div className="data-container">
				<div className="cards-container-typist">
					{/* {arrCards.map((card, index) => (
						<CardDashboard title={'Late pending'} key={`${index}-index`} />
					))} */}
					<CardDashboard title={'Assigned Jobs'}/>
					<CardDashboard title={'In Progress'}/>
					<CardDashboard title={'Completed Jobs'}/>
				</div>
				<div className="tables-container">
					{/* TODO pasar por props la data a cada tabla */}
					<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
				</div>
			</div>
		</div>
	)
}
