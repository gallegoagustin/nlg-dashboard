import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

// const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboardContactorPartner = ({ title }) => {
	return (
		<div className='operations-container'>
			<div className='title-container'>
				<h1 className='screen-title'>{title}</h1>
			</div>
			<div className="data-container">
				<div className="cards-container">
					<div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0.5%' }}>
						<CardDashboard title={'Pending'} includesGraphic/>
						<CardDashboard title={"Today's Booked Jobs"} includesGraphic/>	
						<CardDashboard title={'Late Pending'} includesGraphic/>	
					</div>
					<div style={{ width: '50%', display: 'flex', paddingBottom: '0.5%' }}>
						<TableDashboard tableTitle={'All Unasigned Jobs'} extendScreen/>
					</div>
				</div>
				<div className="cards-container">
					<div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginTop: '0.5%' }}>
						<CardDashboard title={'Late Reports'} includesGraphic/>
						<CardDashboard title={'Jobs Booked'} includesGraphic/>
						<CardDashboard title={'Quality Control'} includesGraphic/>
					</div>
					<div style={{ width: '50%', display: 'flex', paddingTop: '0.5%' }}>
						<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
					</div>

				</div>
			</div>
		</div>
	)
}