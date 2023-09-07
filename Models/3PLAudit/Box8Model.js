const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box8Schema = new Schema({
  properfencingaroundtheyard: {
    type: String,
    required: [
      true,
      "Please Enter Is there proper fencing around the yard with gates that can be lockede",
    ],
  },
  mandoorsinthewarehouse: {
    type: String,
    required: [true, "Please Enter Are all man doors in the warehouse locked"],
  },
  yardfreeofdebris: {
    type: String,
    required: [
      true,
      "Please Enter Is the yard free of debris with no waterlogging, cracks or excessive wear",
    ],
  },
  Dockloadlevelers: {
    type: String,
    required: [true, "Please Enter Dock load levelers"],
  },
  PLprovided: {
    type: String,
    required: [true, "Please Enter Has the 3PL provided acknowledgeds"],
  },
  detailededtrailer: {
    type: String,
    required: [
      true,
      "Please Enter Is the detaileded trailer information provided every hour via google docs",
    ],
  },
  trailerinformationincludetrailrnumber: {
    type: String,
    required: [
      true,
      "Please Enter Does the trailer information include trailr number, trailer owner, load status etc",
    ],
  },
  proofofdistributingapplicable: {
    type: String,
    required: [
      true,
      "Please Enter Is there proof of distributing applicable paperwork",
    ],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
const Box8Model = mongoose.model("box8", Box8Schema);
module.exports = Box8Model;
