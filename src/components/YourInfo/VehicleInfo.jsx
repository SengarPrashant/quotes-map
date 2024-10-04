import { Button, FormControlLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import React from 'react';

const VehicleInfo = ({onContinue=()=>{}}) => {

    return (
        <>
            <div className='mb-2'>
                <InputLabel>Vehical making year</InputLabel>
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
                <InputLabel>Vehical make</InputLabel>
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
                <InputLabel>Vehical model</InputLabel>
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
                <InputLabel>Vehical purchase date</InputLabel>
                <TextField type='date' fullWidth variant='outlined' size='small' />
            </div>
            <div className='mb-2'>
                <InputLabel>Primary use</InputLabel>
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
                <InputLabel>Anual distance driven</InputLabel>
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
                <InputLabel>Vehical parking location</InputLabel>
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
                <InputLabel>Winter tries</InputLabel>
                <RadioGroup row name='winterTries'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1 lr-flex">
                <InputLabel>Telematics Installed</InputLabel>
                <RadioGroup row name='telematics'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1 lr-flex">
                <div style={{ maxWidth: '50%' }}>
                    <InputLabel sx={{ textWrap: 'wrap' }} >Theft Prevention Device Installed</InputLabel>
                </div>
                <RadioGroup row name='theftPreventionDeviceInstalled'>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div className="mb-1">
                <Button variant='contained' fullWidth onClick={onContinue}>
                    Continue with driver info
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

export default VehicleInfo;