import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";



export default function HourlyRate(props) {
  console.log("H", props);
  return (
    
     
    
    // <List sx={{ width: '80%',  bgcolor: 'background.paper' }} alignItems="center" justify="space-between">
      <Grid container
        direction="column"
        alignItems="center"
        justify="flex-start"
        style={{width: "300px", paddingLeft: "30px", paddingTop: "30px" } } >

       
          <ListItem >
            <ListItemAvatar >
              <Avatar >
                < Typography> {props.prices[0].onekid_onehour}$</Typography>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="1 child" secondary="1 hour"/>
          </ListItem>
          <ListItem >
            <ListItemAvatar >
              <Avatar >
                < Typography> {props.prices[0].twokids_onehour}$</Typography>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2 children" secondary="1 hour"/>
          </ListItem>
          <ListItem >
            <ListItemAvatar >
              <Avatar >
                < Typography> {props.prices[0].threekids_onehour}$</Typography>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="3 children" secondary="1 hour"/>
          </ListItem>
      </Grid>



    // </List>


    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   <ListItem>
    //     <ListItemAvatar>
    //       <Avatar>
    //         <ImageIcon />
    //       </Avatar>
    //     </ListItemAvatar>
    //     <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    //   </ListItem>
    //   <ListItem>
    //     <ListItemAvatar>
    //       <Avatar>
    //         <WorkIcon />
    //       </Avatar>
    //     </ListItemAvatar>
    //     <ListItemText primary="Work" secondary="Jan 7, 2014" />
    //   </ListItem>
    //   <ListItem>
    //     <ListItemAvatar>
    //       <Avatar>
    //         <BeachAccessIcon />
    //       </Avatar>
    //     </ListItemAvatar>
    //     <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //   </ListItem>
    // </List>



  );
}