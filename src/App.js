import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/views/HomePage';
import Layout from './components/views/Layout';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
