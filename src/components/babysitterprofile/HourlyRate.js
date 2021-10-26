import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import Stack from '@mui/material/Stack';


export default function HourlyRate() {
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
            <ListItemText primary="1 Child" secondary="hello" />
          </ListItem>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}> 
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneySharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="2 Children" secondary="hello" />
        </ListItem>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneySharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="3 Children" secondary="hello" />
        </ListItem>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneySharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="5 Children" secondary="hello" />
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