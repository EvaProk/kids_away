import React from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function ChooseDate(props) {
  
  const [value, setValue] = React.useState(null);

  return (
    
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DatePicker
          label="Choose Date"
          value={value}
          onChange={(newValue) => {
          setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
  );
};