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
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Fetch events from MongoDB database and set them in calendarEvents state
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setCalendarEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const addEventToDatabase = async (event) => {
    try {
      await axios.post("http://localhost:5000/api/events", event);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleEventAdd = async ({ event }) => {
    if (event && event.title && event.start) {
      setCalendarEvents([...calendarEvents, event]);
      try {
        await axios.post("http://localhost:5000/api/events", event);
      } catch (error) {
        console.error("Error adding event:", error);
      }
    }
  };

  const handleDateSelect = (selectInfo) => {
    setTitle("");
    setLocation("");
    setCategory("");

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
          addEventToDatabase(event);
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