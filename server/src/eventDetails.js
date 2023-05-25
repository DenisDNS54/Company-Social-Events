const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: String,
        start: String,
        end: String,
        location: String,
        category: String,
    },
    {
        collection: "EventDetails",
    },
);

module.exports = mongoose.model("Event", eventSchema, "events");