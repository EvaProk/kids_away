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
import { Link } from "react-scroll";
import Navbar from "../Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function BabysitterProfile(props) {
  const { id } = useParams();

  const [state, setState] = useState({
    profile: [],
    loading: true,
  });

  console.log("before use Effect");
  useEffect(() => {
    return axios.get(`/babysitter-profile/${id}`).then((res) => {
      console.log("I am tired");
      setState((prev) => ({
        ...prev,
        profile: res.data,
        loading: false,
      }));
    });
  }, []);

  if (state.loading) {
    console.log("loading calling", state.loading);
    return <div></div>;
  } else {
    console.log("loading calling", state.loading);
    const reviews = state.profile.review;
    const profile = state.profile.user_prof[0];

    const profileInfo = state.profile.user_prof[0]; // should return user_prof object
    console.log(profileInfo);

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
    const revRate = reviews.map((rev) => (rate += rev.rate));
    console.log("revRate", revRate[revRate.length - 1]);
    const avg =
      Math.round((revRate[revRate.length - 1] / reviews.length) * 10) / 10;

    return (
      <div>
        <Navbar />
        <div className="profile">
          <div className="mainProfile">
            <div className="top">
              <div className="avatar">
                <img
                  className="avatarImage"
                  src={profile.photo}
                  alt="avatarImage"
                ></img>
              </div>

              <div className="userinfo">
                <div className="headers">
                  <h2 id="profileHeader"> {profile.first_name}</h2>
                </div>

                <div className="rightCorner">
                  <div className="rating">
                    <Stack direction="column" spacing={1}>
                    <Grid container direction="row" alignItems="center"spacing={1}>
                        <StarIcon color="secondary" /> <Typography variant="subtitle1" color="text.secondary"> {avg} </Typography>
                        <Typography variant="subtitle1" color="text.secondary"> <Link
                          to="about"
                          smooth={true}
                          underline="hover"
                          href="#"
                        >
                          ({reviews.length} reviews)
                        </Link></Typography>
                      </Grid>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        spacing={3}
                      >
                        Police Check <DoneIcon color="primary" />
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        First Aid <DoneIcon color="primary" />
                      </Typography>
                     
                    </Stack>
                    <DialogWindow />
                  </div>
                </div>
              </div>
            </div>

            <div className="generalInfo">
              <div className="separator">
                <img
                  className="separator"
                  src="/images/separator1.png"
                  alt="avatarImage"
                ></img>
              </div>

              <div className="headers">
                <h2 id="profileHeaderTwo">Prices</h2>
              </div>

              <div classname="centralBlock">
                <Stack
                  direction="row"
                  spacing={15}
                  style={{ paddingLeft: "30px" }}
                >
                  <HourlyRate prices={profile.prices} />
                  <div className="img">
                    <img
                      className="img"
                      src="/images/boyPhoto.png"
                      alt="img"
                    ></img>
                  </div>
                </Stack>
              </div>

              <div className="separator">
                <img
                  className="separator"
                  src="/images/separator2.png"
                  alt="avatarImage"
                ></img>
              </div>
            </div>

            <h2 id="profileHeader">Services</h2>
            <ServicesCard />
            <div className="separator">
              <img
                className="separator"
                src="/images/separator1.png"
                alt="avatarImage"
              ></img>
            </div>
            <div className="bio">
              <div className="separator">
                <img
                  className="separator"
                  src="/images/separator1.png"
                  alt="avatarImage"
                ></img>
              </div>
              <h2 id="profileHeader"> Bio</h2>
              <div className="bioBlock"> 
              
              <div className="imgTwo">
                <img
                  className="imgTwo"
                  src="/images/girlPgoto.png"
                  alt="avatarImage"
                ></img>
              </div>
              <p>{profile.bio}</p>


              </div>
              <div className="separator">
                <img
                  className="separator"
                  src="/images/separator2.png"
                  alt="avatarImage"
                ></img>
              </div>
             
            </div>

            <div className="Reviews" id="about">
              <h2 id="profileHeader">Reviews</h2>
            </div>
            {reviewList}
          </div>
        </div>
      </div>
    );
  }
}
