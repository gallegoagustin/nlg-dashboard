import { h } from 'preact'
import { Router } from 'preact-router'

import Dashboard from '../pages/dashboard'

const App = () => (
	<div id='app'>
		<main style={{ background: '#F7F9F9' }}>
			<Router>
				<Dashboard path='/' />
			</Router>
		</main>
	</div>
)

export default App
