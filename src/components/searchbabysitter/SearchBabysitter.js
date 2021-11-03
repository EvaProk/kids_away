import React, { useState, useEffect } from "react";
import "./SearchBabysitter.scss";
import Button from "@mui/material/Button";
// import { AccountCircleOutlined , FavoriteBorderOutlined , EmailOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

import formatDate from "../helpers/formatter";

import ChooseDate from "../searchbabysitter/ChooseDate";
import ChooseStartTime from "../searchbabysitter/ChooseStartTime";
import ChooseEndTime from "../searchbabysitter/ChooseEndTime";
import ChooseLanguage from "../searchbabysitter/ChooseLanguage";
import ChooseAge from "../searchbabysitter/ChooseAge";
import CardItem from "../searchbabysitter/CardItem";
import Grid from "@mui/material/Grid";
import Navbar from '../Navbar'

export default function SearchBabysitter(props) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState(null);
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [filteredSitters, setFilteredSitters] = useState([]);
  const [allSitters, setAllSitters] = useState([]);
  
  useEffect(() => {
    return axios.get("/searchBabysitters").then((res) => {
      setFilteredSitters(res.data);
      setAllSitters(res.data);
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

  // const handleCityCange = (city) => {
  //   setCity(city);
  // };
  const handleStartTimeChange = (startTime) => {
    setStartTime(startTime);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleEndTimeChange = (endTime) => {
    setEndTime(endTime);
  };
  const handleAgeChange = (age) => {
    setAge(age);
  };
  const handleLanguageChange = (language) => {
    setLanguage(language);
  };
  useEffect(() => {
    let res = allSitters;
    console.log("res at the beginnin", res);
  
    if (date) {
      console.log("date:", date);
      console.log("inside date", res);
      const finalDate = formatDate(date);
      res = res.filter((sitter) => {
        for (const avail of sitter.availability) {
          console.log(
            "sitter",
            sitter,
            "avail.date:",
            avail.date,
            "“equal”",
            avail.date === finalDate
          );
          let time=avail.start_time.slice(11,19);
          if (avail.date === finalDate && time!=="07:00:00") return avail.date === finalDate;
        }
      });
    }
    if (startTime) {

      console.log("inside start time", res);
      res = res.filter((sitter) => {
        for (const avail of sitter.availability) {
          let adjDay = avail.start_time;
          let adjStart = new Date(adjDay).toLocaleTimeString('ca-Ca',{hourCycle: 'h24'});
          if (adjStart.length<8) {
            adjStart = 0+adjStart;
          }
          console.log('adjasted start time', adjStart);
          console.log(
            "sitter",
            sitter,
            "avail.t:",
            avail.start_time,
            "“equal”",
            adjStart === startTime
          );
          console.log(avail.date.slice(0,10), "____start___-----", formatDate(date));
          if (adjStart === startTime && avail.date.slice(0,10)=== formatDate(date))
            return adjStart === startTime;
        }
      });
    }

    if (endTime) {
      console.log("inside Endtime", res);
      res = res.filter((sitter) => {
        for (const avail of sitter.availability) {
          let adjDay2 = avail.end_time;
          let adjEnd = new Date(adjDay2).toLocaleTimeString('ca-Ca',{hourCycle: 'h24'});
          if (adjEnd.length<8) {
            adjEnd = 0+adjEnd;
          }
          console.log('adjasted end time', adjEnd);
          console.log(
            "sitter",
            sitter,
            "avail.t:",
            avail.end_time,
            "endTime",endTime,
            "“equal”",
            adjEnd === endTime
          );
          console.log(avail.date.slice(0,10), "_______-----", formatDate(date));
          if (adjEnd === endTime && avail.date.slice(0,10)=== formatDate(date))
            return adjEnd === endTime;
        }
      });
    }
    if (language) {
      console.log("lang:", language);
      console.log("inside lang", res);
      res = res.filter((sitter) => {
        console.log(
          "sitter",
          sitter,
          "lang",
          sitter.language        
        );
        if (sitter.language.includes(language))
        return sitter
      });
    }

    if (age) {
      console.log("age:", age);
      console.log("inside age", res);
      res = res.filter((sitter) => {
        for (const age_g of sitter.age_group) {
          console.log(
            "sitter",
            sitter,
            "avail.date:",
            age_g,
            "“equal”",
            age_g === age
          );
          if (age_g === age) return age_g === age;
        }
      });
    }
    localStorage.setItem('date',date);
    localStorage.setItem('startTime',startTime);
    localStorage.setItem('endTime',endTime);
    localStorage.setItem('language',language);
    localStorage.setItem('age',age);
    setFilteredSitters(res);
  }, [startTime, date, endTime, age, language]);

  const babysittersList = filteredSitters.map((sitter) =>{
    let sumHours=0;
    let parentBack={};
    let arr = [...sitter.orders]
    arr.forEach((elem)=>{parentBack[elem.parent_id]=(parentBack[elem.parent_id] || 0) +1;});
    sitter.orders.map((order)=>{
      sumHours+=order.hours;
     
    });
    return (<Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem
        key={sitter.id}
        image={sitter.photo}
        name={sitter.first_name}
        orders={sitter.orders.length}
        hours={sumHours}
        parentsBack={Object.keys(parentBack).length}
        id={sitter.id}
      />
    </Grid>
    )
  }
  );

  return (
    <div> 
      <Navbar/>

    <div className="searchPage">
      
      <div className="search">
        <Stack direction="column">

        <h2> Choose Date</h2>
        <ChooseDate value={date} changeDate={handleDateChange} />
        <h2> What time do you prefer?</h2>
        <div className="time">
        <Stack spacing={4} direction="row">
          <ChooseStartTime changeStartTime={handleStartTimeChange} />
          <ChooseEndTime changeEndTime={handleEndTimeChange} />
          </Stack>
        </div>
        {/* <h2> Your City?</h2>
        <ChooseCity changeCity={handleCityCange} /> */}
        <h2> Choose Childs Age</h2>
        <ChooseAge changeAge={handleAgeChange} />
        <h2> Prefered Language</h2>
        <ChooseLanguage changeLanguage={handleLanguageChange} />
        {/* <h2> What are we doing today?</h2>
        <ChooseActivity /> */}
         </Stack>
      </div>

      <div className="babysitterList">
        <Grid container direction="row">
          {babysittersList}
        </Grid>
      </div>
    </div>
    </div>
  );
}

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
