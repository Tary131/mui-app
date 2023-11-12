import "./App.css";
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingListDetail from './routes/ShoppingListDetail';
import Home from "./pages/Home"
const App = () => {
	return (
		<div>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />}/>
				<Route path="/home" element={<Home />}/>
				<Route path="/shopping-lists" element={<ShoppingListDetail />}/>
			</Routes>
		</BrowserRouter>
		</div>
	);
};

export default App;
