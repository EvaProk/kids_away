import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import Stack from '@mui/material/Stack';


export default function HourlyRate(props) {
  console.log("H", props);
  return (
    
     
    
    <List sx={{ width: '80%',  bgcolor: 'background.paper' }} alignItems="center" justify="space-between">
      <Grid container
        direction="row"
        alignItems="center"
        justify="space-between" >
          
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <ListItem >
            <ListItemAvatar>
              <Avatar>
                <AttachMoneySharpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.prices[0].onekid_onehour} secondary="1 child/hour" />
          </ListItem>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}> 
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneySharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.prices[0].twokids_onehour} secondary="2 childs/hour" />
        </ListItem>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneySharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.prices[0].threekids_onehour} secondary="3 childs/hour" />
        </ListItem>
      </Grid>
 

      </Grid>



    </List>


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