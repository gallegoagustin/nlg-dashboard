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
					<div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0.5%' }}>
						<CardDashboard title={'Late Reports'} includesGraphic/>
						<CardDashboard title={'Late Pending'} includesGraphic/>
						<CardDashboard title={'Processing'}/>	
					</div>
					<div style={{ width: '50%', display: 'flex', paddingBottom: '0.5%' }}>
						<TableDashboard tableTitle={'Unallocated Jobs'} extendScreen/>
					</div>
				</div>
				<div className="cards-container">
					<div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly', marginTop: '0.5%' }}>
						<CardDashboard title={'Unable To Contact'} includesGraphic/>
						<CardDashboard title={'Quality Control'} includesGraphic/>
						<CardDashboard title={"Today's Booked jobs"}/>
					</div>
					<div style={{ width: '50%', display: 'flex', paddingTop: '0.5%' }}>
						<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
					</div>

				</div>
			</div>
		</div>
	)
}
