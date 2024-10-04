import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import Profile from '../components/profile/Profile';

const Header = () => {

    return (
        <>
            <AppBar position='fixed' color='#fff'>
                <Toolbar>
                    <Box className="l-flex" sx={{ flexGrow: 1, gap:1 }}>
                        <Typography variant='h5'>
                            Quotes Map
                        </Typography>
                    </Box>
                    <Profile/>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;