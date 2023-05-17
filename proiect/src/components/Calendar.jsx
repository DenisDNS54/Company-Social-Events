import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const calendarRef = useRef(null);
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
    const newEvents = [];

    // TODO: Fetch events that fall within the new date range

    setCalendarEvents(newEvents);
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
