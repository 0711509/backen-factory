const monggose = require("mongoose");

const Schema = monggose.Schema;

const WorkOrderSchmea = new Schema({
  title: {
    type: String,
    required: [true, "Please Enter WorkOrder Title"],
  },
  description: {
    type: String,
    required: [true, "Please Enter WorkOrder Description"],
  },
  repotedOn: {
    type: Date,
    required: [true, "Plaese Enter Date"],
  },
  repotedby: {
    type: String,
    required: [true, "Plaese Enter Reported By"],
  },
  user: {
    type: monggose.Types.ObjectId,
    ref: "User",
  },
  owner: {
    type: monggose.Types.ObjectId,
    ref: "User",
  },
});
const WorkOrderModal = monggose.model("workorder", WorkOrderSchmea);
module.exports = WorkOrderModal;
