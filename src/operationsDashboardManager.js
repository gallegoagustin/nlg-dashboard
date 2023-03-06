import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

// const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboardManager = ({ title }) => {
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
					<CardDashboard title={'Late Reports'} includesGraphic/>
					<CardDashboard title={'Late Pending'} includesGraphic/>
					<CardDashboard title={'Processing'}/>
					<CardDashboard title={'Unable To Contact'} includesGraphic/>
					<CardDashboard title={'Quality Control'} includesGraphic/>
					<CardDashboard title={"Today's Booked jobs"}/>
				</div>
				<div className="tables-container">
					{/* TODO pasar por props la data a cada tabla */}
					<TableDashboard tableTitle={'Unallocated Jobs'} extendScreen/>
					<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
				</div>
			</div>
		</div>
	)
}
