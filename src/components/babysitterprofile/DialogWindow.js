import {React, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

import ChooseDate from '../searchbabysitter/ChooseDate'
import ChooseStartTime from '../searchbabysitter/ChooseStartTime'
import ChooseEndTime from '../searchbabysitter/ChooseEndTime'
import ChooseLanguage from '../searchbabysitter/ChooseLanguage'
import ChooseActivity from '../searchbabysitter/ChooseActivity'
import ChooseAge from '../searchbabysitter/ChooseAge'
import ChooseCity from '../searchbabysitter/ChooseCity'
import Stack from '@mui/material/Stack';




export default function DialogWindow() {

  const [value, setValue] = useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  color="primary" variant="contained" onClick={handleClickOpen}>
        Invite Babysitter
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite Kate</DialogTitle>
        <DialogContent>

      
        <ChooseDate />
        <Stack spacing={2} direction="row">

          <ChooseStartTime />
          <ChooseEndTime />
          </Stack>
       
        <ChooseCity />
       
        <ChooseAge />
       
        <ChooseLanguage />
        
        <ChooseActivity />
        
         <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Message"
            label="Message"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} component={Link} to="/user-cabinet">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}