import React, { useState, useEffect } from "react";
import "./SearchBabysitter.scss";
import Button from '@mui/material/Button';
// import { AccountCircleOutlined , FavoriteBorderOutlined , EmailOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import axios from "axios";

import ChooseDate from '../searchbabysitter/ChooseDate'
import ChooseStartTime from '../searchbabysitter/ChooseStartTime'
import ChooseEndTime from '../searchbabysitter/ChooseEndTime'
import ChooseLanguage from '../searchbabysitter/ChooseLanguage'
import ChooseActivity from '../searchbabysitter/ChooseActivity'
import ChooseAge from '../searchbabysitter/ChooseAge'
import ChooseCity from '../searchbabysitter/ChooseCity'
import CardItem from '../searchbabysitter/CardItem'
import Grid from '@mui/material/Grid';



export default function SearchBabysitter(props) {
  const [city, setCity] = useState('');
  const [state, setState] = useState({
    sitters: []
  });

  const [filteredSitters, setFilteredSitters] = useState([])

  useEffect(()=>{
    return axios.get('/searchBabysitters')
    .then((res)=>{
        setState((prev)=>({
          ...prev, sitters: res.data
        }));
        setFilteredSitters(res.data)
      })
    },[setState.sitters])



    useEffect (()=>{
      if(!city){
        return
      }
      const result = state.sitters.filter((sitter)=>
        sitter.city === city

      )
      setFilteredSitters(result)

    },[city])

    
    const babysittersList = filteredSitters.map((sitter) => 
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem 
      image={sitter.photo}
      name={sitter.first_name}
      orders={sitter.orders.length}
      /> 
      </Grid>);

      const handleCityCange = (city)=>{
        setCity(city);
      }


  return (
    <div className="searchPage">
      <div className="search">
        <h2 > Choose Date</h2>
        <ChooseDate />
        <h2 > What time do you prefer?</h2>
        <div className="time">
          <ChooseStartTime />
          <ChooseEndTime />
        </div>
        <h2 > Your City?</h2>
        <ChooseCity changeCity={handleCityCange}/>
        <h2 > Choose Childs Age</h2>
        <ChooseAge />
        <h2 > Prefered Language</h2>
        <ChooseLanguage />
        <h2 > What are we doing today?</h2>
        <ChooseActivity />
      </div>

      <div className="babysitterList">
        <Grid container direction="row">
            {babysittersList}
        </Grid>

    </div>
    </div>
   
  );
};