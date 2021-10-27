import { React, useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function ChooseDate(props) {
  
  // const [value, setValue] = useState(null);

  return (
      <LocalizationProvider sx={{ m: 1, width: 400 }} dateAdapter={AdapterDateFns} >
        <DatePicker
          label="Choose Date"
          // value={value}
          onChange={(value) => props.changeDate(value)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
  );
};