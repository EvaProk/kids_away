import { React, useState, useEffect } from "react";
import "./BabysitterProfile.scss";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import HourlyRate from "../babysitterprofile/HourlyRate";
import ServicesCard from "../babysitterprofile/ServicesCard";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ReviewItem from "../babysitterprofile/ReviewItem";
import DialogWindow from "../babysitterprofile/DialogWindow";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      return (
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
                <StarIcon color="secondary" fontSize="large" /> 4
                <Link href="#" to="/" underline="hover">
                  (15 reviews)
                </Link>
              </Grid>
              <DialogWindow />
            </div>
    
            <h2>Prices</h2>
            <HourlyRate />
            <h2>Services</h2>
            <ServicesCard />
            <div className="bio">
              <h2> Bio</h2>
              <p>{profile.bio}</p>
            </div>
    
            <div className="Reviews">
              <h2>Reviews</h2>
            </div>
            {reviewList}
          </div>
        </div>
      );
  }

}
