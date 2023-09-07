const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QAbox4Schema = new Schema({
  Answer1: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Answer"],
    },
    score: {
      type: Number,
      required: [true, "Plaese Enter  Score"],
    },
    comment: {
      type: String,
    },
    image: {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
    GMP: {
      type: Boolean,
    },
    SafeProductHandling: Boolean,
    PestControl: Boolean,
    TrailerInspectionsandSeals: Boolean,
    DoubleStackingGuidelines: Boolean,
    HoldTagPolicy: Boolean,
    ProductInspectionsInOut: Boolean,
    MoldMonitoringandMgt: Boolean,
    AllergenControl: Boolean,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const QAbox4Model = mongoose.model("qabox4", QAbox4Schema);
module.exports = QAbox4Model;
