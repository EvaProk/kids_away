import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviousOrderItem from "./PreviousOrderItem";


export default function PreviousOrderList(props) {
  const [state, setState] = useState({
  
    previous: []
  });
 
  useEffect(()=>{
    return axios.get('/favourites', { params: { user_id: 1 } })
                .then((res)=>{
                  console.log("iii", res);
                  setState((prev)=>({...prev, previous: res.data}))
                })
  },[setState.fav]);

  const previousOrders = state.previous.map((sitter) => {
    return (
      <PreviousOrderItem
      id={sitter.id}
        name={sitter.first_name}
        photo={sitter.photo}
      />
    );
  });
  return (
    <div >
      {previousOrders}
    </div>
  )

};