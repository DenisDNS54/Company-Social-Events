import React, { useState } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import CustomEventEditor from "./CustomEventEditor";

function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [localData, setLocalData] = useState([
    {
      Id: 1,
      Title: "Test",
      EventCategory: "Team-Building",
      Start: new Date(2023, 4, 22, 6, 30),
      End: new Date(2023, 4, 22, 10, 30),
      IsAllDay: false,
      IsReadOnly: false,
      Location: "location",
    },
    {
      Id: 2,
      Title: "Test",
      EventCategory: "Game-Night",
      Start: new Date(2023, 4, 24, 6, 30),
      End: new Date(2023, 4, 24, 10, 30),
      IsAllDay: false,
      IsReadOnly: true,
    },
  ]);

  const fields = {
    subject: { name: "Title", default: "No title." },
    startTime: { name: "Start" },
    endTime: { name: "End" },
    location: { name: "Location", default: "No location selected" },
  };

  const eventSettings = { dataSource: localData, fields: fields };

  const eventRendered = (args) => {
    args.element.style.backgroundColor = "#ADD8E6";
    args.element.style.color = "#333333";
    args.element.style.borderColor = "#FF0000";
    args.element.style.borderWidth = "2px";
    args.element.style.borderStyle = "solid";
  };

  const handleEventClick = (args) => {
    setSelectedEvent(args.event);
  };

  const handleSaveClick = (updatedEvent) => {
    console.log("Saving event:", updatedEvent);
    const updatedEvents = localData.map((event) =>
      event.Id === updatedEvent.Id ? updatedEvent : event
    );
    setLocalData(updatedEvents);
    setSelectedEvent(null);
  };

  const handleCancelClick = () => {
    setSelectedEvent(null);
  };

  const editorTemplate = (props) => {
    return selectedEvent ? (
      <CustomEventEditor
        event={selectedEvent}
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
        {...props}
      />
    ) : null;
  };

  return (
    <ScheduleComponent
      height="122%"
      width="100%"
      eventSettings={eventSettings}
      eventRendered={eventRendered}
      eventClick={handleEventClick}
      editorTemplate={editorTemplate}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  );
}

export default Calendar;