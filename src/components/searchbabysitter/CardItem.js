import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


import { CardActionArea,} from '@mui/material';
import {StarOutline , AccessTime, PersonOutline, FavoriteBorder}   from '@mui/icons-material';




export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 345 }}  style={{ margin:"10px" }}>
      <CardHeader
        color="secondary"
        height="auto"
        style={{ justifyContent: "space-evenly", display: "flex" }}
        action={
          <IconButton aria-label="add to favourites">
            <FavoriteBorder color="primary" />
          </IconButton>
        }
        subheader="Kate L."
      />
      <CardActionArea component={Link} to="/babysitter-profile">
        <CardMedia
          component="img"
          height="200"
          image="images/face.jpeg"
          alt="babysitterCard"
        />

        <CardContent style={{ justifyContent: "space-evenly", display: "flex", flexDirection: "row" }} >
          <Grid container direction="column" alignItems="center">
            <StarOutline color="secondary" /><p >Orders</p>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <AccessTime color="secondary" /><p>With kids </p>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <PersonOutline color="secondary" /><p>Families </p>
        </Grid>
        </CardContent >
      </CardActionArea>
    </Card>
  );
}