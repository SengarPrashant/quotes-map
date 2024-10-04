import React from 'react';
import { Box, Typography } from '@mui/material';

import carbg from "../../assets/carbg.png";
import QuoteSearch from '../../components/search/QuoteSearch';
import Logo from '../../components/logo/Logo';
import Profile from '../../components/profile/Profile';
import { getAddressFromPostalCode } from '../../utils/commonUtil';


const Search = () => {
    const [loading, setLoading] = React.useState(false);
    const search = (value) => {
        setLoading(true);
        getAddressFromPostalCode(value);
        setTimeout(() => {
            setLoading(false);
            goto(`/search-result?q=${value}`);
        }, 3000);
    }

    return (
        <Box sx={{
            backgroundImage: `url(${carbg})`,
            backgroundSize: { xs: 'cover', sm: 'cover', lg: 'cover' },
            backgroundPosition: 'center', height: '100lvh'
        }}>
            <Box className="tl">
                <Logo />
            </Box>
            <Box className="tr">
                <Profile />
            </Box>
            <Box className="c-flex" pt={16} mb={2}>
                <Box textAlign="center" maxWidth={500}>
                    <Typography variant="h4" display="inline-block">
                        Compare
                        <Typography variant="h4" color='primary' display="inline-block" ml={1}>
                            car insurance quotes
                        </Typography>
                        <Typography variant="h4" display="inline-block">
                            and save today
                        </Typography>
                    </Typography>
                </Box>
            </Box>
            <QuoteSearch onSearch={search} loading={loading} />
        </Box>
    );
};

export default Search;