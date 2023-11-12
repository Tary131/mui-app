import React, { useState } from "react";
import {
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Avatar,
	Box,
	Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

const UserList = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Jirka" },
		{ id: 2, name: "Peter" },
		{ id: 3, name: "Adela" },
	]);

	const handleDeleteUser = (userId) => {
		const updatedUsers = users.filter((user) => user.id !== userId);
		setUsers(updatedUsers);
	};

	return (
		<div>
			<Box textAlign="center" boxShadow={3} p={2} m={2}>
				<Typography variant="h5">Users</Typography>
			<List>
				{users.map((user) => (
					<ListItem key={user.id}>
						<Avatar>
							<PersonIcon />
						</Avatar>
						<ListItemText>{user.name}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton
								onClick={() => handleDeleteUser(user.id)}
								edge="end"
								aria-label="delete"
							>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
				<Button variant="contained" color="primary">
					Add User
				</Button>
			</Box>
		</div>
	);
};

export default UserList;
