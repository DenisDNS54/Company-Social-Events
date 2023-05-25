import React, { useState, useEffect } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import CustomEventEditor from './CustomEventEditor';

function Calendar() {
  const [localData, setLocalData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/calendar/events');
      const data = await response.json();
      setLocalData(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const createEvent = async (eventData) => {
    try {
      const response = await fetch('http://localhost:5000/calendar/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const data = await response.json();
      setLocalData([...localData, data]);
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const updateEvent = async (eventId, eventData) => {
    try {
      const response = await fetch(`http://localhost:5000/calendar/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      if (response.ok) {
        const updatedData = localData.map((event) => (event.Id === eventId ? { ...event, ...eventData } : event));
        setLocalData(updatedData);
        setSelectedEvent(null);
      } else {
        console.error('Error updating event:', response.status);
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5000/calendar/events/${eventId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const filteredData = localData.filter((event) => event.Id !== eventId);
        setLocalData(filteredData);
        setSelectedEvent(null);
      } else {
        console.error('Error deleting event:', response.status);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const eventSettings = {
    dataSource: localData,
    fields: {
      id: 'Id',
      subject: { name: 'Title' },
      startTime: { name: 'Start' },
      endTime: { name: 'End' },
      isAllDay: { name: 'IsAllDay' },
    },
  };

  const eventRendered = (args) => {
    // Add custom rendering logic if needed
  };

  const handleEventAdd = (args) => {
    setSelectedEvent({
      Id: '',
      Title: '',
      Start: args.startTime,
      End: args.endTime,
      IsAllDay: args.isAllDay,
    });
  };

  const handleEventClick = (args) => {
    const eventData = localData.find((event) => event.Id === args.event.Id);
    setSelectedEvent(eventData);
  };

  const handleSaveClick = (eventData) => {
    if (eventData.Id) {
      updateEvent(eventData.Id, eventData);
    } else {
      createEvent(eventData);
    }
  };

  const handleDeleteClick = (eventId) => {
    deleteEvent(eventId);
    setSelectedEvent(null);
  };

  const handleCancelClick = () => {
    setSelectedEvent(null);
  };

  const handleActionComplete = (args) => {
    // Handle action complete logic if needed
  };

  const handlePopupOpen = (args) => {
    // Handle popup open logic if needed
  };

  const editorTemplate = (props) => {
    return selectedEvent ? (
      <CustomEventEditor
        event={selectedEvent}
        onSave={handleSaveClick}
        onDelete={handleDeleteClick}
        onCancel={handleCancelClick}
      />
    ) : null;
  };

  return (
    <ScheduleComponent
      width="100%"
      height="122%"
      currentView="Month"
      eventSettings={eventSettings}
      eventRendered={eventRendered}
      actionComplete={handleActionComplete}
      editorTemplate={editorTemplate}
      popupOpen={handlePopupOpen}
      eventClick={handleEventClick}
      actionBegin={handleEventAdd}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  );
}

export default Calendar;