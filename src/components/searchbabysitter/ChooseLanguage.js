import { useState, React } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ChooseLanguage() {
  // const [language, setLanguage] = useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Language"
          // onChange={handleChange}
        >
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Mandarin'}>Mandarin </MenuItem>
          <MenuItem value={'Farsi'}>Farsi</MenuItem>
          <MenuItem value={'Russian'}>Russian</MenuItem>
          <MenuItem value={'French'}>French</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}