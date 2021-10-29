import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OrderDetails from "../confirmorder/OrderDetails";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./SitterCabinet.css";
import ScheduleLine from "./ScheduleLine";

export default function SitterCabinet(props) {
  const [value, setValue] = useState("6");
  const [schedule, setSchedule] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    return axios.get("/babysitterCabinet").then((res) => {
      console.log(res.data);
      setSchedule(res.data);
      setLoaded(false);
      console.log("resdata", res.data);
    });
  }, []);
  
  if (loaded) {
    return <div></div>;
  } else { 
   
    const scheduleList = schedule.map((day) => {
     
        return (
          <ScheduleLine
            day={day.date}
            start_time={day.start_time}
            end_time={day.end_time}
          />
        );          
   

    });

    return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            style={{ justifyContent: "space-evenly", display: "flex" }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Your week schedule" value="1" />
              <Tab label="Create New Order" value="2" />
              <Tab label="Previous Orders" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1" className="sch">
            {scheduleList}
          </TabPanel>

          <TabPanel value="2">
            <Typography
              color="secondary"
              variant="h3"
              style={{ fontWeight: 600 }}
            >
              {" "}
              Create New Order
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/searchBabysitters"
              style={{ width: "30%" }}
            >
              Create New Order
            </Button>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    );
  }
}
