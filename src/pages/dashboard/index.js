import { h } from 'preact'
import { OperationsDashboard } from '../../components/containers'

const arrCards = [...Array(6).keys()].map((i) => i + 1)

const Dashboard = () => {
	console.log(arrCards)
	return (
		<OperationsDashboard title={'Operations Dashboard'} />
	)
}

export default Dashboard
