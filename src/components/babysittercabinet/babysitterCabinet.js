import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'devextreme/dist/css/dx.light.css';
import './babysitterCabinet.css';
import { Scheduler, Editing } from 'devextreme-react/scheduler';
import { appointments } from './data.js';
import React, { useCallback, useState } from 'react';

/*
const locales = {
  "en-CA" : require("date-fns/locale/en-CA")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Babysitting with Anna's child",
    fullHours: false,
    start: new Date(2021, 9, 25),
    end: new Date(2021, 9, 25)
  },
  {
    title: "Babysitting with Emily's child",
    fullHours: true,
    start: new Date(2021, 9, 26),
    end: new Date(2021, 9, 26)
  },
  {
    title: "Babysitting with Victoria's child",
    fullHours: false,
    start: new Date(2021, 9, 27),
    end: new Date(2021, 9, 27)
  }
]

export default function BabysitterCabinet() {
  const [ newEvent, setNewEvent ] = useState({title : "", start : "", end : ""});
  const [ allEvents, setAllEvents ] = useState(events);

  function handleAllEvents () {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="BabysitterCabinet">
      <h1 style={{textAlign: "center", color: "orange" }}>BABYSITTER'S CALENDAR</h1>
      <h3 style={{textAlign: "center" }}>ADD A NEW APPOINTMENT</h3>
      <div style={{marginLeft: "44%"}}>
        <input 
          type="text" 
          placeholder="Add Title" 
          style={{ marginRight: "10px"}} 
          value={newEvent.title}
          onChange={(event) => setNewEvent({...newEvent, title: event.target.value})}
        />
        <DatePicker 
          placeholderText="Start Date" 
          style={{marginRight: "10px", marginTop: "10px"}} 
          selected={newEvent.start}
          onChange={(start) => setNewEvent({...newEvent, start: start})}
        />
        <DatePicker 
          placeholderText="End Date" 
          style={{marginRight: "10px", marginTop: "10px"}} 
          selected={newEvent.end}
          onChange={(end) => setNewEvent({...newEvent, end: end})}
        />
      </div>
        <button style={{marginTop: "10px", marginLeft: "44.25%"}} onClick={handleAllEvents}>ADD APPOINTMENT</button>
      <Calendar 
        localizer={localizer} 
        events={allEvents} 
        startBabysitting="start" 
        endBabysitting="end" 
        style={{height: 500, margin: "50px"}} 
      />
    </div>
  )
}
*/

function BabysitterCabinet() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
    const handlePropertyChange = useCallback((e) => {
        if(e.name === 'currentDate') {
            setCurrentDate(e.value);
        }
    }, [])
 
    return (
        <Scheduler 
          currentDate={currentDate}
          onOptionChanged={handlePropertyChange}
          dataSource={appointments}
          textExpr="title"
          allDayExpr="dayLong"
          recurrenceRuleExpr="recurrence"
          timeZone="America/Vancouver"
          adaptivityEnabled={true}>
            <Editing
                allowDragging={false}
                allowTimeZoneEditing={true}
            />
        </Scheduler>
    );
}

export default BabysitterCabinet;