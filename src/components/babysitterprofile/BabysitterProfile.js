import React from "react";
import "./BabysitterProfile.scss";
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import HourlyRate from '../babysitterprofile/HourlyRate'
import ServicesCard from '../babysitterprofile/ServicesCard'

import { Link } from 'react-router-dom';





export default function BabysitterProfile(props) {

  return (
    <div className="profile">
      <div className="mainProfile">

        <div className="avatar">
          <img
            className="avatarImage"
            src="images/face.jpeg"
            alt="avatarImage">
          </img>
        </div>
        
        <div className="rating">
          <StarIcon color="secondary" fontSize="large"/>
          <p>4.5 (15 reviews)</p>
          <Button color="primary" variant="contained" component={Link} to="/create-task">Logout</Button>
        </div>

        <div className="hourlyRate">
          <HourlyRate/>
        </div>
        <ServicesCard/>

      </div>

    </div>
    

  )};