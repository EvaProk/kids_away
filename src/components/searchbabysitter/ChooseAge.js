import {React ,useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ChooseAge(props) {
  //const [value, setValue] = useState('0-2 y.o');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <FormControl component="fieldset" >
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row
        aria-label="age"
        name="controlled-radio-buttons-group"
        value={props.value}
        onChange={(event)=>{props.changeAge(event.target.value)}}
      >
        <FormControlLabel value="infants" control={<Radio />} label="0-2" />
        <FormControlLabel value="toddler" control={<Radio />} label="3-5" />
        <FormControlLabel value="schoolage" control={<Radio />} label="5+" />

      </RadioGroup>
    </FormControl>
  );
}