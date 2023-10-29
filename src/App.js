import "./App.css";
import Navbar from "./components/Navbar.js";
import ShoppingList from "./components/ShoppingList";
import UserList from "./components/UserList";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<ShoppingList />
			<UserList></UserList>
		</div>
	);
}

export default App;
