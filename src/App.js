import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingListDetail from './components/ShoppingListDetail';
import ShoppingListOverview from './components/ShoppingListOverview';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/shopping-lists/:id" component={ShoppingListDetail} />
				<Route path="/shopping-lists" component={ShoppingListOverview} />
			</Switch>
		</Router>
	);
};

export default App;
