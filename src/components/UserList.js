import React, { useState } from "react";
import UserManagement from './UserManagment';

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
		{ id: 1, name: "Jirka", email: "john@example.com" },
		// ...
	]);

	const handleDeleteUser = (userId) => {
		const updatedUsers = users.filter((user) => user.id !== userId);
		setUsers(updatedUsers);
	};
	const handleAddUser = (newUser) => {
		setUsers([...users, newUser]);
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
				<UserManagement addUser={handleAddUser} />
			</Box>
		</div>
	);
};

export default UserList;
