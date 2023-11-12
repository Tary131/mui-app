import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingListDetail from './routes/ShoppingListDetail';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/shopping-lists/:id" component={ShoppingListDetail} />

			</Switch>
		</Router>
	);
};

export default App;
