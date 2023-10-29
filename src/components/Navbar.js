import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
function Navbar() {
	return (
		<AppBar position="static">
			<Toolbar>
				{/* Logo and Home Route on the Left */}
				<IconButton edge="start" color="inherit" disabled aria-label="menu">
					<SpeakerNotesIcon />
				</IconButton>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Home
				</Typography>

				{/* Login and Settings Buttons on the Right */}
				<Button color="inherit" startIcon={<AccountCircleIcon />}>
					Login
				</Button>
				<Button color="inherit">Settings</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
