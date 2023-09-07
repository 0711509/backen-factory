const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box4Schema = new Schema({
  documentedsafety: {
    type: String,
    required: [true, "Please Enter Is there a documented safety plan"],
  },
  emergencycontactnumbers: {
    type: String,
    required: [true, "Please Enter Are all emergency contact numbers"],
  },
  documentedsafetymeeting: {
    type: String,
    required: [
      true,
      "Please Enter Is there a documented safety meeting minutes",
    ],
  },
  objectivesafetymetric: {
    type: String,
    required: [
      true,
      "Please Enter Does the facility have an objective safety metric ( OIR)",
    ],
  },
  safetincidentstracked: {
    type: String,
    required: [true, "Please Enter Are the safet incidents tracked"],
  },
  emergencyexitsclear: {
    type: String,
    required: [true, "Please Enter Are all emergency exits clear"],
  },
  extinguishers: {
    type: String,
    required: [true, "Please Enter Are all fire extinguishers"],
  },
  emergencyevacuationplan: {
    type: String,
    required: [true, "Please Enter emergency evacuation plan"],
  },
  amplelighting: {
    type: String,
    required: [true, "Please Enter ample lighting"],
  },
  anyleaningpallets: {
    type: String,
    required: [true, "Please Enter any leaning pallets"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box4Model = mongoose.model("box4", Box4Schema);
module.exports = Box4Model;
