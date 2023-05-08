import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [calendarEvents, setCalendarEvents] = useState([]);

  const handleEventAdd = ({ event }) => {
    if (event && event.title && event.start) {
        setCalendarEvents([...calendarEvents, event]);
    }
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter event title:");
    if (title) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleDateRangeChange = (rangeInfo) => {
    const { startStr, endStr } = rangeInfo;
    const newEvents = [];
  
    // TODO: Fetch events that fall within the new date range
  
    setCalendarEvents(newEvents);
  };

  return (
    <div>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
                start: "today prev,next",
                center: "",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={"90vh"}
            events={calendarEvents}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            datesSet={handleDateRangeChange}
            select={handleDateSelect}
            eventAdd={handleEventAdd}
        />
    </div>
  );
}

export default Calendar;