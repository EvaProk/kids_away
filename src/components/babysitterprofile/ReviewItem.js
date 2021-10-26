import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function ReviewItem() {
  

  return (
    <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="space-between" spacing={4} >
        <ListItemAvatar>
          <Avatar style={{ height: '5rem', width: '5rem', margin: "5px" }} alt="Remy Sharp" src="/images/face.jpeg" />
        </ListItemAvatar>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h5"
            color="accent"
            fontWeight="500"
          >
            Nora
          </Typography>
          <Rating name="read-only" value="3" readOnly />
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h7"
            color="accent"
          >
            I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhoo"
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />


      <ListItem alignItems="space-between" spacing={4} >
        <ListItemAvatar>
          <Avatar style={{ height: '5rem', width: '5rem', margin: "5px" }} alt="Remy Sharp" src="/images/face.jpeg" />
        </ListItemAvatar>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h5"
            color="accent"
            fontWeight="500"
          >
            Nora
          </Typography>
          <Rating name="read-only" value="3" readOnly />
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h7"
            color="accent"
          >
            I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhoo"
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" /><ListItem alignItems="space-between" spacing={4} >
        <ListItemAvatar>
          <Avatar style={{ height: '5rem', width: '5rem', margin: "5px" }} alt="Remy Sharp" src="/images/face.jpeg" />
        </ListItemAvatar>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h5"
            color="accent"
            fontWeight="500"
          >
            Nora
          </Typography>
          <Rating name="read-only" value="3" readOnly />
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h7"
            color="accent"
          >
            I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhoo"
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" /><ListItem alignItems="space-between" spacing={4} >
        <ListItemAvatar>
          <Avatar style={{ height: '5rem', width: '5rem', margin: "5px" }} alt="Remy Sharp" src="/images/face.jpeg" />
        </ListItemAvatar>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h5"
            color="accent"
            fontWeight="500"
          >
            Nora
          </Typography>
          <Rating name="read-only" value="3" readOnly />
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h7"
            color="accent"
          >
            I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhoo"
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />





    </List>
  );
}