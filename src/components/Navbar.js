import React from "react";
import "./Navbar.scss";
import Button from '@mui/material/Button';
import { AccountCircleOutlined , FavoriteBorderOutlined , EmailOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';




export default function Navbar(props) {
  
  return (
    <div className="navigation">
      <div className="logo">
        <img
          className="logoImage"
          src="images/logoImage.webp"
          alt="logoImage">
        </img>
        <h2>KidsAway</h2>
      </div>
      <div className="navButtons">
        <Stack direction="row">
          <IconButton component={Link} to="/user-cabinet">
            <AccountCircleOutlined color="secondary" fontSize="large" />
          </IconButton>
          <IconButton component={Link} to="/messages">
            <EmailOutlined color="secondary" fontSize="large" />
          </IconButton>
          <IconButton component={Link} to="/favourites">
            <FavoriteBorderOutlined color="secondary" fontSize="large" />
          </IconButton>
          <Button variant="outlined" fontSize="large" component={Link} to="/logout" typography="fontFamily" > Logout</Button>
        </Stack>
      </div>
    </div>
  );
};