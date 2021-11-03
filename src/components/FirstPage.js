import React from "react";
import "./FirstPage.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import logoElefant from "../images/logoImage.webp";
import "./Navbar.scss";
export default function FirstPage(props) {
  return (
    <div>
      <div className="elefant">
        <div>
          <img className="logoImage" src={logoElefant} alt="logoImage"></img>
          <h2>KidsAway</h2>
        </div>
        <div>
        <Button variant="outlined" fontSize="large" component={Link} to="/logout" typography="fontFamily" > Registration</Button>
        </div>

      </div>

      <div className="main">
        <img
          className="frontImage"
          src="images/logo.png"
          alt="frontImage"
        ></img>
        <div className="heading">
          <h1 className="first">Perfect </h1>
          <h1 className="second">Babysitter </h1>
          <h1 className="third">is Here</h1>
        </div>
        <Stack spacing={5} direction="row">
          <Button
            variant="contained"
            component={Link}
            to="/searchBabysitters"
            style={{ width: "50%" }}
          >
            I'm a Parent
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/babysitterCabinet"
            style={{ width: "50%" }}
          >
            I'm a Babysitter
          </Button>
        </Stack>
      </div>
    </div>
  );
}
