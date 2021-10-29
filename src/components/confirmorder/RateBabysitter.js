import  React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';


export default function RateBabysitter() {
  return (
 
      <Paper elevation={3} sx={{ width: 550 }} style={{ margin: "10px", padding: "10px"}}>
       
          <Stack
            direction="column"
            spacing={10}
         
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              display: "flex",
              margin: "20px"
            }}
          >
            <Typography color="secondary" variant="h5">
              How was your experience with our babysitter?
            </Typography>


          


          </Stack>

          

       
          <Button
            variant="contained"
            component={Link}
            to="/"
            style={{ width: "30%" }}
          >
           Submit
          </Button>
          
      
      </Paper>
  
  );
}
