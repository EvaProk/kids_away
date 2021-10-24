import {React ,useState} from "react";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  'English',
  'Chinese',
  'French',
  'Spanish',
  'Russian',
];

export default function ChooseLanguage() {
  const [language, setLanguage] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 260 }}>
        <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={language}
          onChange={handleChange}
          input={<OutlinedInput label="Language" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
              <Checkbox checked={language.indexOf(lang) > -1} />
              <ListItemText primary={lang} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}