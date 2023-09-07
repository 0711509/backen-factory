const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box5Schema = new Schema({
  FGpallets: {
    type: String,
    required: [true, "Please Enter Are there any FG pallets"],
  },
  FGholdarea: {
    type: String,
    required: [true, "Please Enter Is the FG hold area "],
  },
  pallets: {
    type: String,
    required: [
      true,
      "Please Enter Are all pallets in the hold tagged and marked",
    ],
  },
  documentedevidence: {
    type: String,
    required: [true, "Please Enter documented evidence "],
  },
  standingwate: {
    type: String,
    required: [
      true,
      "Please Enter Is there any standing water in the facility",
    ],
  },
  ventilation: {
    type: String,
    required: [
      true,
      "Please Enter Is there enough ventilation in the building",
    ],
  },
  systeminventorymatch: {
    type: String,
    required: [
      true,
      "Please Enter Does the system inventory match with physical inventory",
    ],
  },
  documentedandupdatedQA: {
    type: String,
    required: [
      true,
      "Please Enter Is there a documented and updated QA humidity log",
    ],
  },
  QAhumiditylog: {
    type: String,
    required: [
      true,
      "Please Enter Does the data in the QA humidity log in line with the local area/weather",
    ],
  },
  systeminventorytallied: {
    type: String,
    required: [true, "Please Enter system inventory tallied"],
  },
  inventoryaccuracyscorerecorded: {
    type: String,
    required: [true, "Please Enter Is the inventory accuracy score recorded"],
  },
  inventoryaccuracypast3months: {
    type: String,
    required: [
      true,
      "Please Enter What is the average inventory accuracy for the past 3 months    ",
    ],
  },
  palletLPN: {
    type: String,
    required: [true, "Please Enter pallet LPN"],
  },
  FEFOFIFOobjectiv: {
    type: String,
    required: [true, "Please Enter FEFO/FIFO - is there an objectiv"],
  },
  FEFOFIFOverified: {
    type: String,
    required: [true, "Please Enter Can FEFO/FIFO be verified"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box5Model = mongoose.model("box5", Box5Schema);
module.exports = Box5Model;
