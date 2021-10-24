import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { CardActionArea,} from '@mui/material';
import {StarOutline , AccessTime, PersonOutline, FavoriteBorder}   from '@mui/icons-material';




export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardHeader
         color="secondary"
         style={{ justifyContent: "space-evenly", display: "flex" }}
         action={
          <IconButton aria-label="add to favourites">
            <FavoriteBorder color="primary"/>
          </IconButton>
        }
        subheader="Kate L."
      />
      <CardActionArea>
        <CardMedia 
          component="img"
          height="250"
          image="images/face.jpeg"
          alt="babysitterCard"
        />

        <CardContent style={{ justifyContent: "space-evenly", display: "flex", flexDirection:"row"}} >
          <Grid container direction="column" alignItems="center">
            <StarOutline color="secondary" />Orders
        </Grid>
        <Grid container direction="column" alignItems="center">
        <AccessTime color="secondary" />With kids 
        </Grid>
        <Grid container direction="column" alignItems="center">
        <PersonOutline color="secondary" />Families
        </Grid>
        </CardContent >
      </CardActionArea>
    </Card>
  );
}