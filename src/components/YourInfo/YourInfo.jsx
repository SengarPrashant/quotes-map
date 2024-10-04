import { Box,Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import VerticalPanel from '../VerticalPanel/VerticalPanel';
import VehicleInfo from './VehicleInfo';
import DriverInfo from './DriverInfo';


const YourInfo = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => setTabValue(newValue);

    return (
        <>
            <div className="yourInfo">
                <VerticalPanel expanded={expanded} onToggle={() => setExpanded(!expanded)}
                    title={<Typography variant='h6'>Your information</Typography>}>
                    <Tabs value={tabValue} variant='fullWidth' onChange={handleTabChange}
                        sx={{ minHeight: 32 }}
                        aria-label="basic tabs example">
                        <Tab label="Vehicles" {...a11yProps(0)} sx={{ p: 0.5, minHeight: 32 }} />
                        <Tab label="Drivers" {...a11yProps(1)} sx={{ p: 0.5, minHeight: 32 }} />
                    </Tabs>
                    <CustomTabPanel value={tabValue} index={0}>
                        <VehicleInfo onContinue={()=>setTabValue(1)} />
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        <DriverInfo />
                    </CustomTabPanel>
                </VerticalPanel>
            </div>
        </>
    );
};

export default YourInfo;


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div className='ht'
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}