import React, { useState, useEffect } from "react";
import "./SearchBabysitter.scss";
import Button from "@mui/material/Button";
// import { AccountCircleOutlined , FavoriteBorderOutlined , EmailOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
console.log("test");
import ChooseDate from "../searchbabysitter/ChooseDate";
import ChooseStartTime from "../searchbabysitter/ChooseStartTime";
import ChooseEndTime from "../searchbabysitter/ChooseEndTime";
import ChooseLanguage from "../searchbabysitter/ChooseLanguage";
import ChooseActivity from "../searchbabysitter/ChooseActivity";
import ChooseAge from "../searchbabysitter/ChooseAge";
import ChooseCity from "../searchbabysitter/ChooseCity";
import CardItem from "../searchbabysitter/CardItem";
import Grid from "@mui/material/Grid";

export default function SearchBabysitter(props) {
  const [city, setCity] = useState("");
  const [startTime, setStartTime] = useState("");

  const [filteredSitters, setFilteredSitters] = useState([]);

  useEffect(() => {
    return axios.get("/searchBabysitters").then((res) => {
            setFilteredSitters(res.data);
    });
  }, []);

  // useEffect(() => {
  //   if (!city) {
  //     return;
  //   }
  //   if (startTime){}
  //   const result = allSitters.filter((sitter) => sitter.city === city);
  //   console.log("city", city, result);
  //   setFilteredSitters(result);
  // }, [city]);

  // useEffect(() => {
  //   if (!startTime) {
  //     return;
  //   }
 
  //   const result = allSitters.filter((sitter) => {
  //     if (filteredSitters[0].city === sitter.city) {
  //       for (const avail of sitter.availability) {
  //         console.log("TimeMatches", avail.start_time === startTime);
  //         return avail.start_time === startTime;
  //       }
  //     }
  //   });
  
  //   console.log("array_ofBabysitters, result", result);
  //   setFilteredSitters(result);
  // }, [startTime]);
  //---------------------------------

  // const filterCity = () => {
  //   if(city) {
  //     return allSitters.filter((sitter) => sitter.city === city);
  //   }
  //   else {
  //     return allSitters;
  //   }
  // };

  // const filterTime = () => {
  //   if(startTime&&filtStartTime) {
  //     return allSitters.filter((sitter) => {
  //             for (const avail of sitter.availability) {
  //               console.log("TimeMatches", avail.start_time === startTime);
  //               return avail.start_time === startTime;
  //             }            
  //         });
  //   }
  //   else {
  //     return allSitters;
  //   }
  // };
  // useEffect(()=>{
  //   let result=allSitters;
  //   result = filterCity(result);
  //   if(startTime){
  //     result= filterTime(result);
  //   }
  //   setFilteredSitters(result)
  //   setFiltStartTime(false)
  // },[city,startTime])

  const handleCityCange = (city) => {
    setCity(city);
  };
  const handleStartTimeChange = (startTime) => {
    setStartTime(startTime);
  };
  useEffect(()=>{
    let res=filteredSitters;
    if(city) {
      console.log('inside city');
      res= res.filter((sitter) => sitter.city === city)
    }
    if (startTime) {
      console.log("inside time");
      res= res.filter((sitter) => {
        for (const avail of sitter.availability) {
          return avail.start_time === startTime;
        }            
    });
    }
    setFilteredSitters(res)
  }, [city, startTime])

  const babysittersList = filteredSitters.map((sitter) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem
        image={sitter.photo}
        name={sitter.first_name}
        orders={sitter.orders.length}
        id={sitter.id}
      />
    </Grid>
  ));























































































  



































  

  return (
    <div className="searchPage">
      <div className="search">
        <h2 > Choose Date</h2>
        <ChooseDate changeDate={handleDateChange}/>
        <h2 > What time do you prefer?</h2>
        <div className="time">
          <ChooseStartTime changeStartTime={handleStartTimeChange} />
          <ChooseEndTime />
        </div>
        <h2> Your City?</h2>
        <ChooseCity changeCity={handleCityCange} />
        <h2> Choose Childs Age</h2>
        <ChooseAge />
        <h2> Prefered Language</h2>
        <ChooseLanguage />
        <h2> What are we doing today?</h2>
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











































// const [city, setCity] = useState('');
  // const [date, setDate] = useState('');
  // const [state, setState] = useState({
  //   sitters: []
  // });


  // const [filteredSitters, setFilteredSitters] = useState([])

  // useEffect(()=>{
  //   return axios.get('/searchBabysitters')
  //   .then((res)=>{
  //       setState((prev)=>({
  //         ...prev, sitters: res.data
  //       }));
  //       setFilteredSitters(res.data)
  //     })
  //   },[])

  //   //filtering city
  //   useEffect (()=>{
  //     if(!city){
  //       return
  //     }
  //     const result = state.sitters.filter((sitter)=>
  //       sitter.city === city
  //     )
  //     setFilteredSitters(result)
  //   },[city])



  // useEffect(() => {
  //   const finalDate= formatDate(date);
  //   if (!date) {
  //     return
  //   }
  //   const result = state.sitters.filter((sitter) => {
  //     for (const avail of sitter.availability) {
  //      return avail.date === finalDate

  //     }
  //   })
  //   setFilteredSitters(result)
  // }, [date])



  //   //Cange handlers to pass like props
  //   const handleCityCange = (city)=>{
  //     setCity(city);
  //   }
  //   const handleDateChange = (date)=>{
  //     console.log("date----->", date)
  //     setDate(date);
  //   }

    
  //   const babysittersList = filteredSitters.map((sitter) => 
  //   <Grid item xs={12} sm={6} md={4} lg={3}>
  //     <CardItem 
  //     image={sitter.photo}
  //     name={sitter.first_name}
  //     orders={sitter.orders.length}
  //     id={sitter.id}
  //     /> 
  //     </Grid>);
