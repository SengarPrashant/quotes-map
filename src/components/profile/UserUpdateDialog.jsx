import React from 'react';
import { Box, Button, DialogActions, TextField, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';
import AppDialog from '../AppDialog/AppDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UserUpdateDialog = ({open, onClose=()=>{}}) => {
    const defaultData={ name: '', email: '', error: { name: '', email: '' } };
    const [user, setUser] = React.useState(defaultData);

    React.useEffect(() => {
        const _user = localStorage.getItem('user');
        if (_user) {
            const temp = JSON.parse(_user)
            setUser({ ...user, ...temp });
        }
        else{setUser({...defaultData})}
    }, [open])

    const onChange = (e) => {
        let vals = { ...user, [e.target.name]: e.target.value };
        if (!e.target.value.trim()) {
            vals = { ...vals, error: { ...vals.error, [e.target.name]: 'This is required' } }
        } else {
            vals = { ...vals, error: { ...vals.error, [e.target.name]: '' } }
        }
        setUser(vals);
    }

    const onSave = () => {
        localStorage.setItem('user', JSON.stringify(user));
        onClose(user);
        setUser({...defaultData})
    }


    return (
        <>
            <AppDialog title='Update user details' open={open} onClose={onClose}>
                <Box sx={{ maxWidth: 300 }}>
                    <TextField autoFocus required id="name" name="name" label="Name" type="text"
                        margin="dense" fullWidth variant="standard"
                        value={user.name}
                        error={user.error.name}
                        onChange={onChange}
                    />
                    {user.error.name && <Typography variant='caption' color='error'>
                        {user.error.name}
                    </Typography>}
                    <TextField autoFocus required id="email" name="email" label="Email" type="email"
                        margin="dense" fullWidth variant="standard"
                        error={user.error.email}
                        value={user.email}
                        onChange={onChange}
                    />
                    {user.error.email && <Typography variant='caption' color='error'>
                        {user.error.email}
                    </Typography>}
                </Box>
                <DialogActions sx={{ mt: 2 }}>
                    <Button variant='outlined' color='primary' onClick={onClose}>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={onSave}>Save</Button>
                </DialogActions>
            </AppDialog>
        </>
    );
};

export default UserUpdateDialog;