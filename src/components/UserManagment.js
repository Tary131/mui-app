import React, { useState } from 'react';
import { Button, Typography, Modal, Box, TextField } from '@mui/material';

const UserManagement = () => {
    const [newUserData, setNewUserData] = useState({
        username: '',
        email: '',
    });

    const [openAddUserModal, setOpenAddUserModal] = useState(false);

    const handleOpenAddUserModal = () => {
        setOpenAddUserModal(true);
    };

    const handleCloseAddUserModal = () => {
        setOpenAddUserModal(false);
    };

    const handleAddUser = () => {
        console.log('Přidání uživatele:', newUserData);
        setNewUserData({ username: '', email: '' });
        handleCloseAddUserModal();
    };

    return (
        <div>

            <Button onClick={handleOpenAddUserModal} variant="contained" color="primary">
              Add User
            </Button>

            <Modal open={openAddUserModal} onClose={handleCloseAddUserModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6">Přidat Uživatele</Typography>
                    <TextField
                        label="Uživatelské jméno"
                        name="username"
                        value={newUserData.username}
                        onChange={(e) => setNewUserData({ ...newUserData, username: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={newUserData.email}
                        onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    {/* Další textová pole a možnosti podle potřeby */}
                    <Button onClick={handleAddUser} variant="contained" color="primary" fullWidth>
                        Add User
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default UserManagement;
