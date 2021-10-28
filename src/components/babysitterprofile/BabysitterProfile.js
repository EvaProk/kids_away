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
  });

  useEffect(() => {
    return axios.get(`/babysitter-profile/${id}`).then((res) => {
     
      setState((prev) => ({
        ...prev,
        profile: res.data,
      }));
    });
  }, []);

  const reviews = state.profile.review;


  // const profileInfo = state.profile.user_prof[0] ; // should return user_prof object 
  // console.log(profileInfo)

  

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
            src="images/face.jpeg"
            alt="avatarImage"
          ></img>
        </div>
        <h2> L.</h2>
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
          <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            dui ut nulla tempus sagittis vel at nisl. Cras nec eros ullamcorper,
            sagittis tellus nec, consequat ligula. Nunc nec condimentum leo,
            quis pretium odio. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aliquam urna ante,
            blandit sit amet neque eget, finibus ornare diam. Vestibulum porta
            lacus justo, id aliquam massa gravida hendrerit. Suspendisse
            tincidunt vitae tortor vitae pharetra. Pellentesque rutrum facilisis
            elementum. Proin rhoncus mi eget est bibendum interdum. Nunc aliquet
            nulla ac odio commodo tempus. Nunc vehicula felis at libero rutrum
            consequat. In sagittis purus sit amet mauris rutrum maximus. Integer
            sodales hendrerit purus eu interdum. Duis et posuere diam. Cras
            fringilla rhoncus tincidunt. Sed egestas sit amet augue in lacinia.
          </p>
        </div>

        <div className="Reviews">
          <h2>Reviews</h2>
        </div>
        {reviewList}
      </div>
    </div>
  );
}
