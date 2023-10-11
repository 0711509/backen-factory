const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AduitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Plaese Enter Auditor Name"],
  },
  reason: {
    type: String,
    required: [true, "Plaese Enter Your Reason"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  owneruser: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const AuditModal = mongoose.model("audit", AduitSchema);
module.exports = AuditModal;
