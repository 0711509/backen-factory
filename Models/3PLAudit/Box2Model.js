const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box2Schema = new Schema({
  buildingshared: {
    type: String,
    required: [
      true,
      "Please Enter Is This building shared with other customers",
    ],
  },
  registrationofthisbuilding: {
    type: String,
    required: [
      true,
      "Please Enter Is the FDA registration of this building up to date",
    ],
  },
  certificateofinsurance: {
    type: String,
    required: [true, "Please Enter Is the certificate of insurance current"],
  },
  Statepermitcurrent: {
    type: String,
    required: [true, "Please Enter Is the State permit current"],
  },
  thirdpartaudit: {
    type: String,
    required: [true, "Please Enter Is the third part audit current"],
  },
  Emergencycontact: {
    type: String,
    required: [true, "Please Enter Is the Emergency contact updated"],
  },
  orgchart: {
    type: String,
    required: [true, "Please Enter Is the org chart current"],
  },
  criticalmanagementroles: {
    type: String,
    required: [true, "Please Enter Are all critical management roles filled"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const Box2Model = mongoose.model("box2", Box2Schema);
module.exports = Box2Model;
