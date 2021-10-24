import React from "react";
import "./FirstPage.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


export default function FirstPage(props) {
  
  return (
   <div className="main">
     <img
     className="frontImage"
     src= "images/logo.png"
     alt="frontImage">
     </img>
     <div className="heading">
       <h1 className="first">Perfect </h1>
       <h1 className="second">Babysitter </h1>
       <h1 className="third">is Here</h1>
     </div>
     <Stack spacing={5} direction="row">
      <Button variant="contained" component={Link} to="/searchBabysitters" style={{width:"50%"}}>I'm a Parent</Button>
      <Button variant="contained" component={Link} to="/babysitterCabinet"style={{width:"50%"}}>I'm a Babysitter</Button>
    </Stack>
   </div>
  );
};