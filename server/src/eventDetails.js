const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  start: String,
  end: String,
  location: String,
  category: String,
});

module.exports = mongoose.model("Event", eventSchema);