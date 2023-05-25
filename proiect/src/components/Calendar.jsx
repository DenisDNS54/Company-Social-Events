import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

function Calendar() {
  const calendarRef = useRef(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleEventAdd = (e) => {
      console.log(title, start, end, location, category);
      fetch("http://localhost:5000/api/events", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          title, 
          start, 
          end, 
          location, 
          category,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "eventAdd");
          if (data.status == "ok") {
            alert("Event Add Successful");
          } else {
            alert("Something went wrong");
          }
        });
  };

  const handleDateSelect = (selectInfo) => {
    setTitle("");
    setLocation("");
    setCategory("");
    setStart("");
    setEnd("");

    const title = prompt("Enter event title:");
    if (title) {
      setTitle(title);

      const location = prompt("Enter event location:");
      if (location) {
        setLocation(location);

        const category = prompt(
          "Enter event category (Game Night, Meeting, Party, Team-Building, Vacation):"
        );
        if (category) {
          setCategory(category);

          const calendarApi = selectInfo.view.calendar;
          calendarApi.addEvent({
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            location,
            category,
          });

          const event = {
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            location,
            category,
          };
          handleEventAdd(event);
        }
      }
    }
  };

  const handleTodayButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  const handleDayGridMonthButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("dayGridMonth");
  };

  const handleTimeGridWeekButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("timeGridWeek");
  };

  const handleTimeGridDayButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("timeGridDay");
  };

  const handleDateRangeChange = (rangeInfo) => {
    const { startStr, endStr } = rangeInfo;
    console.log("Selected range: ", startStr, " - ", endStr);
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        customButtons={{
          customTodayButton: {
            text: "Today",
            click: handleTodayButtonClick,
          },
          customDayGridMonthButton: {
            text: "Month",
            click: handleDayGridMonthButtonClick,
          },
          customTimeGridWeekButton: {
            text: "Week",
            click: handleTimeGridWeekButtonClick,
          },
          customTimeGridDayButton: {
            text: "Day",
            click: handleTimeGridDayButtonClick,
          },
        }}
        headerToolbar={{
          start: "customTodayButton prev next",
          center: "title",
          end: "customTimeGridDayButton customTimeGridWeekButton customDayGridMonthButton",
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