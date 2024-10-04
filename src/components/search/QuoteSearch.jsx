import React from 'react';
import { Box, Button, CircularProgress, IconButton, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MyLocation from '@mui/icons-material/MyLocation';
import { GetMyLoaction, getPostalCodeFromCoordinates } from '../../utils/commonUtil';

const QuoteSearch = ({ onSearch, loading = false }) => {
    const ref = React.useRef();
    const onEnter = (e) => e.keyCode == 13 && search();
    const search = () => onSearch(ref.current.value.trim());

    const getLocation = () => {
        GetMyLoaction((loc) => {
            if (loc) {
                alert(JSON.stringify(loc))
                getPostalCodeFromCoordinates(loc.lat, loc.longt);
            }
        })
    }

    return (
        <Box className="c-flex">
            <Paper sx={{ mr: 1, width: 400, maxWidth: { xs: '70%', sm: '400px', md: '800px' } }}>
                <InputBase fullWidth inputRef={ref} onKeyDown={onEnter}
                    startAdornment={<SearchIcon color='disabled' sx={{ mx: 1 }} />}
                    endAdornment={<IconButton type="button" sx={{ p: 1.25, m: 0.25, mr: 1.5 }} aria-label="search" onClick={getLocation}>
                        {<MyLocation />}
                    </IconButton>}
                    sx={{ ml: 1, fontSize: 18 }}
                    placeholder="Search by postal code / city ..."
                    inputProps={{ 'aria-label': 'Search insurence providers by postal code / city' }}
                />
            </Paper>
            <Button variant='contained' sx={{ height: 47 }} onClick={search}>
                {loading ? <CircularProgress color='#fff' size={20} sx={{ mx: 1.5 }} /> : "Search"}
            </Button>
        </Box>
    );
};

export default QuoteSearch;