import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function ServicesCard() {
  return (
    <div> 
      <Grid container 
      direction="row"
      alignItems="center"
      justify="space-between"
      width="80%" >
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"

              width="120"

              image="images/night.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Overnight Nanny
        </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"

              width="120"

              image="images/crafts.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Arts and Crafts
      </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"
              width="120"
              image="images/outside.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Outside Play
      </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"

              width="120"

              image="images/Swimming.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Swimming Supervision
      </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"

              width="120"

              image="images/pet.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Pet Care
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Card sx={{ width: 120, height: 140 }} style={{ margin: "5px" }}>
            <CardMedia
              component="img"

              width="120"

              image="images/pickup.jpg"
              alt="Overnight"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Pick Up/Drop Off
      </Typography>
            </CardContent>
          </Card>
        </Grid>


      </Grid>
  </div>
  );
}