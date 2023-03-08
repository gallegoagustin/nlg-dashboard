import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

// const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboardFranchisee = ({ title }) => {
	return (
		<div className='operations-container'>
			<div className='title-container'>
				<h1 className='screen-title'>{title}</h1>
			</div>
			<div className="data-container">
				<div className="cards-container">
					{/* {arrCards.map((card, index) => (
						<CardDashboard title={'Late pending'} key={`${index}-index`} />
					))} */}
					<CardDashboard title={'Pending'} includesGraphic/>
					<CardDashboard title={"Today's Booked jobs"} includesGraphic/>
					<CardDashboard title={'Late Pending'} includesGraphic/>
					<CardDashboard title={'Late Reports'} includesGraphic/>
					<CardDashboard title={'Jobs Booked'} includesGraphic/>
					<CardDashboard title={'Quality Control'} includesGraphic/>
				</div>
				<div className="tables-container">
					<TableDashboard tableTitle={'All Unassigned Jobs'} extendScreen/>
					<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
				</div>
			</div>
		</div>
	)
}
