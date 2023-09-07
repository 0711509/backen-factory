const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box7Schema = new Schema({
  suffecientventilation: {
    type: String,
    required: [
      true,
      "Please Enter Is there suffecient ventilation in the warehouse",
    ],
  },
  inchesofspacebetween: {
    type: String,
    required: [
      true,
      "Please Enter Is there 12 inches of space between pallet rows",
    ],
  },
  adequatelighting: {
    type: String,
    required: [
      true,
      "Please Enter Is there adequate lighting throughout the warehoused",
    ],
  },
  temperatureandhumidity: {
    type: String,
    required: [
      true,
      "Please Enter Is the temperature and humidity within acceptable limits",
    ],
  },
  buildingclean: {
    type: String,
    required: [true, "Please Enter Is the building clean, dry and odourless"],
  },
  moldmonitoringtraining: {
    type: String,
    required: [
      true,
      "Please Enter Is the mold monitoring training completed by all team members",
    ],
  },
  moldlogupdated: {
    type: String,
    required: [
      true,
      "Please Enter PIs the mold log updated and does the data look accurate",
    ],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box7Model = mongoose.model("box7", Box7Schema);
module.exports = Box7Model;
