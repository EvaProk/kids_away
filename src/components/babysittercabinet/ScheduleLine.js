import React from "react";
import Calendar from "./Calendar";
import StartTime from "./StartTime";
import EndTime from "./EndTime";

export default function ScheduleLine(props) {

  return (
    <div>
      <Calendar day={props.day} />
      <StartTime start_time={props.start_time} />
      <EndTime end_time={props.end_time} />
    </div>
  )

}