import {React ,useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ChooseAge() {
  const [value, setValue] = useState('0-2 y.o');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" >
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row
        aria-label="age"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
        <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
        <FormControlLabel value="5+" control={<Radio />} label="5+" />

      </RadioGroup>
    </FormControl>
  );
}