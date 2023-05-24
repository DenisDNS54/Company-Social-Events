import React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

function CustomEventEditor({ event, onSave, onCancel }) {
  const handleSaveClick = () => {
    onSave(event);
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className="custom-event-editor">
      <div className="event-field">
        <label>Title:</label>
        <TextBoxComponent value={event.Title} change={(e) => (event.Title = e.value)} />
      </div>
      <div className="event-field">
        <label>Start Time:</label>
        <DateTimePickerComponent
          value={event.Start}
          change={(e) => (event.Start = e.value)}
        />
      </div>
      <div className="event-field">
        <label>End Time:</label>
        <DateTimePickerComponent value={event.End} change={(e) => (event.End = e.value)} />
      </div>
      <div className="event-field">
        <label>Location:</label>
        <TextBoxComponent value={event.Location} change={(e) => (event.Location = e.value)} />
      </div>
      <div className="event-field">
        <label>Event Type:</label>
        <DropDownListComponent
          value={event.EventCategory}
          dataSource={[
            "Game Night",
            "Meeting",
            "Party",
            "Team-Building",
            "Vacation",
          ]}
          change={(e) => (event.EventCategory = e.value)}
        />
      </div>
      <div className="event-field">
        <label>Description:</label>
        <textarea
          value={event.Description}
          onChange={(e) => (event.Description = e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className="e-control e-btn" onClick={handleSaveClick}>
            Save
        </button>
        <button className="e-control e-btn" onClick={handleCancelClick}>
            Cancel
        </button>
      </div>
    </div>
  );
}

export default CustomEventEditor;