import React from "react";
import Calendar from "./Calendar";
import StartTime from "./StartTime";
import EndTime from "./EndTime";

export default function ScheduleLine(props) {
  const scheduleLineChanged = (item) => {
    props.scheduleChanged(item)
  }
  return (
    <div>
      <Calendar day={props.day} />
      <StartTime start_time={props.start_time} item={props.item} scheduleLineChanged={(item)=> scheduleLineChanged(item)}/>
      <EndTime end_time={props.end_time} item={props.item} scheduleLineChanged={(item)=> scheduleLineChanged(item)}/>
    </div>
  )

}