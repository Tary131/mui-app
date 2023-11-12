import React from "react";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import ShoppingList from "../components/ShoppingList";

const ShoppingListDetail = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ShoppingList></ShoppingList>
            <UserList></UserList>
        </div>
    );
};

export default ShoppingListDetail;