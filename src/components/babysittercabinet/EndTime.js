import { React ,useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function EndTime(props) {
  const [endTime, setEndTime] = useState(props.end_time);

  const handleChange = (event) => {
    setEndTime(event.target.value);
    props.scheduleLineChanged({
      ...props.item,
      end_time: event.target.value
    });
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
          <MenuItem value={"00:00:00"}>none</MenuItem>
          <MenuItem value={"06:00:00"}>6am</MenuItem>
          <MenuItem value={"07:00:00"}>7am</MenuItem>
          <MenuItem value={"08:00:00"}>8am</MenuItem>
          <MenuItem value={"09:00:00"}>9am</MenuItem>
          <MenuItem value={"10:00:00"}>10am</MenuItem>
          <MenuItem value={"11:00:00"}>11am</MenuItem>
          <MenuItem value={"12:00:00"}>12pm</MenuItem>
          <MenuItem value={"13:00:00"}>1pm</MenuItem>
          <MenuItem value={"14:00:00"}>2pm</MenuItem>
          <MenuItem value={"15:00:00"}>3pm</MenuItem>
          <MenuItem value={"16:00:00"}>4pm</MenuItem>
          <MenuItem value={"17:00:00"}>5pm</MenuItem>
          <MenuItem value={"18:00:00"}>6pm</MenuItem>
          <MenuItem value={"19:00:00"}>7pm</MenuItem>
          <MenuItem value={"20:00:00"}>8pm</MenuItem>
          <MenuItem value={"21:00:00"}>9pm</MenuItem>
          <MenuItem value={"22:00:00"}>10pm</MenuItem>
          <MenuItem value={"23:00:00"}>11pm</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}