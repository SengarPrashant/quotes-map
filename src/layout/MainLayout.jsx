import React from 'react';
import Header from './Header';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
    const theme = useTheme();
    return (
        <div>
            <Header />
            <Box sx={{ pt: theme.custom.header.h / 8 }}>
                {children}
            </Box>
        </div>
    );
};

export default MainLayout;