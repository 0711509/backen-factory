const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Plaese Enter Schedule Date"],
  },
  time: {
    type: String,
    required: [true, "Plaese Enter Schedule Time"],
  },
  email: {
    type: String,
    required: [true, "Plaese Enter Schedule Email"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const ScheduleModal = mongoose.model("Schedule", ScheduleSchema);
module.exports = ScheduleModal;
