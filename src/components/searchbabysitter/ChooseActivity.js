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

const activities = [
  'Put to sleep',
  'Pick up from school',
  'Spend time at home',
  'Arts and Crafts',
  'Go for a walk',
];

export default function ChooseActivity() {
  const [activity, setActivity] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setActivity(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 260 }}>
        <InputLabel id="demo-multiple-checkbox-label">Activity</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={activity}
          onChange={handleChange}
          input={<OutlinedInput label="Activity" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {activities.map((activ) => (
            <MenuItem key={activ} value={activ}>
              <Checkbox checked={activity.indexOf(activ) > -1} />
              <ListItemText primary={activ} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}