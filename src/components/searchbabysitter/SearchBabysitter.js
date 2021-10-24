import React from "react";
import "./SearchBabysitter.scss";
import Button from '@mui/material/Button';
// import { AccountCircleOutlined , FavoriteBorderOutlined , EmailOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import ChooseDate from '../searchbabysitter/ChooseDate'
import ChooseStartTime from '../searchbabysitter/ChooseStartTime'
import ChooseEndTime from '../searchbabysitter/ChooseEndTime'
import ChooseLanguage from '../searchbabysitter/ChooseLanguage'
import ChooseActivity from '../searchbabysitter/ChooseActivity'
import ChooseAge from '../searchbabysitter/ChooseAge'









export default function SearchBabysitter(props) {

  return (
    <div className="search">
      <h2 > Choose Date</h2>
      <ChooseDate/>
      <h2 > What time do you prefer?</h2>
      <div className="time">
        <ChooseStartTime/>
        <ChooseEndTime/>
      </div>
      
      <h2 > Choose Childs Age</h2>
      <ChooseAge/>
      <h2 > Prefered Language</h2>
      <ChooseLanguage/>
      <h2 > What are we doing today?</h2>
      <ChooseActivity/>
    </div>
  );
};