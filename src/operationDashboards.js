import { TableDashboard } from './tableDashboard';
import { CardDashboard } from './cardDashboard';

// const arrCards = [...Array(6).keys()].map((i) => i + 1)

export const OperationsDashboard = ({ title }) => {
	return (
		<div>
			<div className='title_container'>
				<h1>{title}</h1>
			</div>
			<div className="grid_container">
				<div className="grid_container__cards">
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
				<div className="table_container">
					{/* TODO pasar por props la data a cada tabla */}
					<TableDashboard tableTitle={'Unallocated Jobs'} extendScreen/>
					<TableDashboard tableTitle={'Recently Viewed Jobs'}/>
				</div>
			</div>
		</div>
	)
}
