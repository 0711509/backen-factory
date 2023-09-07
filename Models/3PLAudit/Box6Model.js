const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box6Schema = new Schema({
  documentedpickingandloading: {
    type: String,
    required: [
      true,
      "Please Enter Is there a documented picking and loading process",
    ],
  },
  Documenttheloadingprocess: {
    type: String,
    required: [true, "Please Enter Document the loading process"],
  },
  loadingtimesrecorded: {
    type: String,
    required: [true, "Please Enter Are the loading times recorded"],
  },
  averageloadtime: {
    type: String,
    required: [true, "Please Enter average load time"],
  },
  documentedhandlelateloads: {
    type: String,
    required: [
      true,
      "Please Enter Is there a documented process to handle late loads and work ins",
    ],
  },
  YTDOD: {
    type: String,
    required: [true, "Please Enter What is the YTD OD%"],
  },
  ODunder90: {
    type: String,
    required: [
      true,
      "Please Enter Please provide top three reasons if OD% is under 90%",
    ],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box6Model = mongoose.model("box6", Box6Schema);
module.exports = Box6Model;
