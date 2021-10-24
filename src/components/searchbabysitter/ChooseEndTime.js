import { React ,useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ChooseStartTime() {
  const [endTime, setEndTime] = useState('');

  const handleChange = (event) => {
    setEndTime(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">End Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={endTime}
          label="End Time"
          onChange={handleChange}
        >
          <MenuItem value={"12am"}>12am</MenuItem>
          <MenuItem value={"1am"}>1am</MenuItem>
          <MenuItem value={"2am"}>2am</MenuItem>
          <MenuItem value={"3am"}>3am</MenuItem>
          <MenuItem value={"4am"}>4am</MenuItem>
          <MenuItem value={"5am"}>5am</MenuItem>
          <MenuItem value={"6am"}>6am</MenuItem>
          <MenuItem value={"7am"}>7am</MenuItem>
          <MenuItem value={"8am"}>8am</MenuItem>
          <MenuItem value={"9am"}>9am</MenuItem>
          <MenuItem value={"10am"}>10am</MenuItem>
          <MenuItem value={"11am"}>11am</MenuItem>
          <MenuItem value={"12pm"}>12pm</MenuItem>
          <MenuItem value={"1pm"}>1pm</MenuItem>
          <MenuItem value={"2pm"}>2pm</MenuItem>
          <MenuItem value={"3pm"}>3pm</MenuItem>
          <MenuItem value={"4pm"}>4pm</MenuItem>
          <MenuItem value={"5pm"}>5pm</MenuItem>
          <MenuItem value={"6pm"}>6pm</MenuItem>
          <MenuItem value={"7pm"}>7pm</MenuItem>
          <MenuItem value={"8pm"}>8pm</MenuItem>
          <MenuItem value={"9pm"}>9pm</MenuItem>
          <MenuItem value={"10pm"}>10pm</MenuItem>
          <MenuItem value={"11pm"}>11pm</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}