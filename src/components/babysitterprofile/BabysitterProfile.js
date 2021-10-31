import { React, useState, useEffect, useRef } from "react";
import "./BabysitterProfile.scss";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import HourlyRate from "../babysitterprofile/HourlyRate";
import ServicesCard from "../babysitterprofile/ServicesCard";
//import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ReviewItem from "../babysitterprofile/ReviewItem";
import DialogWindow from "../babysitterprofile/DialogWindow";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-scroll';
import Navbar from '../Navbar'


export default function BabysitterProfile(props) {
  const { id } = useParams();

  const [state, setState] = useState({
    profile: [],
    loading:true
  });
  
  console.log("before use Effect");
  useEffect(() => {
    return axios.get(`/babysitter-profile/${id}`)
      .then((res) => {
        console.log("I am tired");
      setState((prev) => ({
        ...prev,
        profile: res.data,
        loading: false
      })
      );
    });
  }, []);


  if(state.loading)
  {
    console.log("loading calling",state.loading);
    return <div></div>
  }
  else {
    console.log("loading calling",state.loading);
    const reviews = state.profile.review;
    const profile = state.profile.user_prof[0];
  
    const profileInfo = state.profile.user_prof[0] ; // should return user_prof object
    console.log(profileInfo)
  
    let reviewList =
      reviews &&
      reviews.map((rev) => (
        <ReviewItem
        
          name={rev.parent_name}
          rating={rev.rate}
          comment={rev.comment}
        />
      ));
      let rate = 0;
      const revRate = reviews.map((rev)=>rate+=rev.rate);
      console.log("revRate", revRate[revRate.length-1]);
      const avg = Math.round(revRate[revRate.length-1]/reviews.length*10)/10
      return (
        <div> 
        <Navbar/>
        <div className="profile">
          <div className="mainProfile">
            <div className="avatar">
              <img
                className="avatarImage"
                src={profile.photo}
                alt="avatarImage"
              ></img>
            </div>
            <h2> {profile.first_name}</h2>
            <div className="rating">
              <Grid container direction="row" alignItems="center">
                <StarIcon color="secondary" fontSize="large" /> {avg} 
                <Link to='about' smooth={true} underline="hover" href="#"> 
                  ({reviews.length} reviews)
                </Link>
              </Grid>
              <DialogWindow />
            </div>
    
            <h2>Prices</h2>
            <HourlyRate prices={profile.prices}/>
            <h2>Services</h2>
            <ServicesCard />
            <div className="bio">
              <h2> Bio</h2>
              <p>{profile.bio}</p>
            </div>
    
            <div className="Reviews" id ='about'>
              <h2>Reviews</h2>
            </div>
            {reviewList}
          </div>
        </div>
        </div>
      );
  }

}
