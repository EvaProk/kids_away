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
import RateBabysitter from "../confirmorder/RateBabysitter";
import axios from "axios";
import formatDate from "../helpers/formatter";






export default function UserCabinet() {
  const [value, setValue] = useState('1');
  const [confirmWindowOpen, setConfirmWindowOpen] = useState(false);

  const [state, setState] = useState({  
    orders: [],
    loading:true
  });

  useEffect(()=>{
    return axios.get('/user-cabinet' )
                .then((res)=>{
                  setState((prev)=>({...prev, orders: res.data, loading: false}))
                })
  },[setState.orders]);  

  if(state.loading)
  {
    console.log("loading calling",state.loading);
    return <div></div>
  }
  else {
  const order = state.orders[state.orders.length-1]
  console.log(order)

  function deleteOrder(order) {
    setState({ ...state, orders: state.orders.slice(1)})
    console.log ("-------------->", state.orders)
    return axios.post(`/delete-order`,null, { params: { order } })
  
      // .then(() => {
      //   console.log (order)
      //  setState({ ...state, orders: state.orders.slice(1) })

      // })
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  style={{  justifyContent: "space-evenly", display: "flex" }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Current orders" value="1" />
            <Tab label="Create New Order" value="2" />
            <Tab label="Previous Orders" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {order.status === "created" || order.status === "confirmed" ? <div> 
          <OrderDetails
          date={formatDate(order.date)}
          startTime={order.start_time}
          endTime={order.end_time}
          address={order.address}
          numChildren={order.num_of_kids}
          message={order.comment}
          status={order.status}
          hours={order.hours}
          onFinish={()=> setConfirmWindowOpen(true)}
          onDelete={()=> deleteOrder(order)}        
          />
          <RateBabysitter
          open={confirmWindowOpen}
          onClose={()=> setConfirmWindowOpen(false) }
          id={order.id}/> </div> : null }  
        </TabPanel>
        <TabPanel value="2">
        <Typography color="secondary" variant="h3" style={{ fontWeight: 600 }}> Create New Order</Typography>
        <Button variant="contained" component={Link} to="/searchBabysitters" style={{width:"30%"}}>Create New Order</Button>

        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    
    </Box>
  
  );
  }
}