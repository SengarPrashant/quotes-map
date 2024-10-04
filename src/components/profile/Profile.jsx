import { Avatar, Box, Button, DialogActions, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, TextField, Typography } from '@mui/material';
import React from 'react';
import AvtarImg from "./avatar.png"
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UserUpdateDialog from './UserUpdateDialog';

const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = React.useState({});
    const [userDialog, setUserDialog] = React.useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const deleteUser = () => {
        localStorage.removeItem('user');
        handleClose();
        setUser({})
    };

    return (
        <>
            <UserUpdateDialog open={userDialog} onClose={(user) => {
                setUser(user)
                setUserDialog(false)
            }
            } />
            <Box className="r-flex gap-1">
                {user.name || 'Guest'}
                <IconButton sx={{ padding: 0.5 }} onClick={handleClick}>
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <img width="100%" height="100%" src={AvtarImg} />
                    </Avatar>
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <List>
                        <ListItem disablePadding dense>
                            <ListItemButton onClick={() => {
                                setUserDialog(true);
                                handleClose();
                            }}>
                                <ListItemIcon sx={{ minWidth: 30 }} >
                                    <EditIcon sx={{ width: 18 }} color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Update user information" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding dense>
                            <ListItemButton onClick={deleteUser}>
                                <ListItemIcon sx={{ minWidth: 30 }} >
                                    <DeleteOutlineIcon sx={{ width: 18 }} color='error' />
                                </ListItemIcon>
                                <ListItemText primary="Delete user information" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Popover>
            </Box>
        </>
    );
};

export default Profile;