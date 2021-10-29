import { React, useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OrderDetails from "../confirmorder/OrderDetails";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Calendar from './Calendar';
import StartTime from './StartTime';
import EndTime from './EndTime';
import axios from 'axios';
import "./SitterCabinet.css";
import ScheduleLine from './ScheduleLine';



export default function SitterCabinet() {
  const [value, setValue] = useState('6');
  const [schedule, setSchedule] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    return axios.get("/babysitterCabinet").then((res) => {
      setSchedule(res.data);
      //setLoaded(false);
      console.log("resdata", res.data);
    });
  }, []);
  const curr = new Date(); // get current date
  const first = (curr.getDate() - curr.getDay())+1; // First day is the day of the month - the day of the week
  const second = first + 1;
  const third = first + 2;
  const fourth = first + 3;
  const fifth = first + 4;
  const sixth = first + 5;
  const last = first + 6; // last day is the first day + 6
  

  const monday = new Date(curr.setDate(first));
  const tuesday = new Date(curr.setDate(second));
  const wednesday = new Date(curr.setDate(third));
  const thursday = new Date(curr.setDate(fourth));
  const friday = new Date(curr.setDate(fifth));
  const saturday = new Date(curr.setDate(sixth));
  var lastday = new Date(curr.setDate(last));
  console.log(monday, tuesday, saturday);
  const arrWeek = ['Monday', 'Tuesay', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  
    const scheduleList = schedule.map((day) =>{
     
      return (
        <ScheduleLine
        
        />
      
      )
    })
 

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  style={{  justifyContent: "space-evenly", display: "flex" }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Your week schedule" value="1" />
            <Tab label="Create New Order" value="2" />
            <Tab label="Previous Orders" value="3" />
          </TabList>
        </Box>
        
        <TabPanel value="1" className='sch'>
         {scheduleList}
        </TabPanel>
        
        <TabPanel value="2">
        <Typography color="secondary" variant="h3" style={{ fontWeight: 600 }}> Create New Order</Typography>
        <Button variant="contained" component={Link} to="/searchBabysitters" style={{width:"30%"}}>Create New Order</Button>

        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  )
}
