import React, { useState } from "react";
import {
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	TextField,
	Button,
	Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingList = () => {
	const [listName, setListName] = useState("My Shopping List");
	const [products, setProducts] = useState([
		{ id: 1, name: "Apples", quantity: 5 },
		{ id: 2, name: "Bananas", quantity: 3 },
		{ id: 3, name: "Milk", quantity: 2 },
	]);

	const handleAddProduct = () => {
		const newProduct = { id: Date.now(), name: "New Product", quantity: 1 };
		setProducts([...products, newProduct]);
	};

	const handleDeleteProduct = (productId) => {
		const updatedProducts = products.filter(
			(product) => product.id !== productId
		);
		setProducts(updatedProducts);
	};

	const handleQuantityChange = (productId, quantity) => {
		// Parse the quantity as an integer or default to 0 if it's not a valid number.
		const newQuantity = parseInt(quantity) || 0;

		if (newQuantity >= 0) {
			const updatedProducts = products.map((product) =>
				product.id === productId
					? { ...product, quantity: newQuantity }
					: product
			);
			setProducts(updatedProducts);
		}
	};

	const handleNameChange = (productId, name) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, name } : product
		);
		setProducts(updatedProducts);
	};

	return (
		<div>
			<Box textAlign="center">
				<Typography variant="h5">{listName}</Typography>
			</Box>
			<Box textAlign="center">
				<List>
					{products.map((product) => (
						<ListItem key={product.id}>
							<ListItemText>
								<TextField
									value={product.name}
									onChange={(e) => handleNameChange(product.id, e.target.value)}
								/>
								<TextField
									type="number"
									value={product.quantity}
									onChange={(e) =>
										handleQuantityChange(product.id, e.target.value)
									}
								/>
							</ListItemText>
							<ListItemSecondaryAction>
								<IconButton
									onClick={() => handleDeleteProduct(product.id)}
									edge="end"
									aria-label="delete"
								>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			</Box>
			<Box textAlign="center">
				<Button variant="contained" color="primary" onClick={handleAddProduct}>
					Add Product
				</Button>
			</Box>
		</div>
	);
};

export default ShoppingList;
