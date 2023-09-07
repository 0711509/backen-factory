const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box9Schema = new Schema({
  userobservations: {
    type: String,
    required: [
      true,
      "Please Enter This section is open and users can write down their own observations",
    ],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box9Model = mongoose.model("box9", Box9Schema);
module.exports = Box9Model;
