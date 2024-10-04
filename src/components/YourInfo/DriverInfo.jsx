import React from 'react';
import { Button, FormControlLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

const DriverInfo = () => {

    return (
        <>
            <div className='mb-2'>
                <InputLabel>Date of birth</InputLabel>
                <TextField type='date' fullWidth variant='outlined' size='small' />
            </div>
            <div className='mb-2'>
                <InputLabel>Marital status</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Married</MenuItem>
                    <MenuItem value={20}>Not married</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                </Select>
            </div>
            <div className='mb-2'>
                <InputLabel>Gender</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                </Select>
            </div>
            <div className='mb-2'>
                <InputLabel>Vehical ownership</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className='mb-2'>
                <InputLabel>Employment status</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className='mb-2'>
                <InputLabel>Licence type</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className='mb-2'>
                <InputLabel>Licence date</InputLabel>
                <TextField type='date' fullWidth variant='outlined' size='small' />
            </div>
            <div className='mb-2'>
                <InputLabel>Tickets in last 3 years</InputLabel>
                <Select size='small' fullWidth>
                    <MenuItem value="">
                        <em>-Select-</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className="mb-1 lr-flex">
                <div style={{ maxWidth: '50%' }}>
                    <InputLabel sx={{ textWrap: 'wrap' }}>Major convictions in last 3 years</InputLabel>
                </div>
                <RadioGroup row name='winterTries'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1 lr-flex">
                <div style={{ maxWidth: '50%' }}>
                    <InputLabel sx={{ textWrap: 'wrap' }}>Driver Training Program Taken</InputLabel>
                </div>
                <RadioGroup row name='telematics'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1 lr-flex">
                <div style={{ maxWidth: '50%' }}>
                    <InputLabel sx={{ textWrap: 'wrap' }} >Do you want to combine the Auto with Home insurance?</InputLabel>
                </div>
                <RadioGroup row name='theftPreventionDeviceInstalled'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1">
                <Button variant='contained' fullWidth>
                    Update quotes
                </Button>
            </div>
            <div className="mb-2">
                <Button variant='text' fullWidth>
                    Reset to default
                </Button>
            </div>
        </>
    );
};

export default DriverInfo;