import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React from 'react';

const BookCallModel = ({ data, onClose, popupPosition = [0, 0] }) => {

    return (
        <div className='bookCallPopup' style={{ left: `${popupPosition[0] - 150}px`, top: `${popupPosition[1] - 150}px` }}>
            <Card>
                <CardContent sx={{ width: 300, pb: 0 }}>
                    <Box className="lr-flex">
                        <Box>
                            Title
                        </Box>
                        <IconButton onClick={onClose} sx={{ p: 0.5 }} size='small'>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{py:2}}>
                        content
                        {JSON.stringify(data)}
                    </Box>
                    <Box className="c-flex gap-1">
                        <Box sx={{ flexGrow: 1 }}><Button fullWidth variant='contained'>Book a call</Button></Box>
                        <Box sx={{ flexGrow: 1 }}><Button fullWidth variant='outlined'>Compare all</Button></Box>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default BookCallModel;