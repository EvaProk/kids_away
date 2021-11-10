import React from "react";
import PreviousOrderItem from "./PreviousOrderItem";

export default function PreviousOrderList(props) {
  const filtered = props.orders
    .filter((order) => order.status === "completed")
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  const previousOrders = filtered.map((order) => {
    return (
      <PreviousOrderItem
        id={order.sitter_id}
        date={order.date.slice(0, 10)}
        name={order.sitter_name}
        photo={order.sitter_photo}
        comment={order.comment_about_sitter}
        rate={order.rate}
      />
    );
  });
  return <div>{previousOrders}</div>;
}
