import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

export default function Calendar(props) {
  const [value, setValue] = React.useState(props.day);
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}  >     
        <DatePicker 
          disableFuture
          openTo="day"
          views={['day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
         
        />
      </Stack>
    </LocalizationProvider>
  );
}