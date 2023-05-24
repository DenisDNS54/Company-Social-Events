const mongoose = require("mongoose");

// Define the schema for events
const eventSchema = new mongoose.Schema({
  Id: { type: Number, required: true },
  Title: { type: String, required: true },
  EventCategory: { type: String, required: true },
  Start: { type: Date, required: true },
  End: { type: Date, required: true },
  IsAllDay: { type: Boolean, required: true },
  IsReadOnly: { type: Boolean, required: true },
  Location: { type: String },
});

// Create a model for events
const EventDetails = mongoose.model("EventDetails", eventSchema);

// Function to add a new event
const addEvent = async (eventData) => {
    try {
      const newEvent = new EventDetails(eventData);
      await newEvent.save();
      return newEvent;
    } catch (error) {
      throw new Error("Failed to add event: " + error.message);
    }
  };

module.exports = {
  addEvent,
};