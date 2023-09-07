const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box3Schema = new Schema({
  workersappeartobehappy: {
    type: String,
    required: [true, "Please Enter Do workers appear to be happy"],
  },
  inboundoutboundloads: {
    type: String,
    required: [
      true,
      "Please Enter Is the facility staffed in line with expected inbound/outbound loads",
    ],
  },
  trainingprograms: {
    type: String,
    required: [
      true,
      "Please Enter Does the facility have documented training programs    ",
    ],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const Box3Model = mongoose.model("box3", Box3Schema);
module.exports = Box3Model;
