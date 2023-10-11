const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QAbox3Schema = new Schema({
  Answer1: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Is there a GMP policy. Review policy for completeness.",
      ],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter Score"],
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
  },
  Answer2: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Does GMP policy apply to visitors and contractors",
      ],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter Score"],
    },
    comment: {
      type: String,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  Answer3: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Are the GMP policies audited on a regular basis",
      ],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter Score"],
    },
    comment: {
      type: String,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "organization",
  },
});

const QAbox3Model = mongoose.model("qabox3", QAbox3Schema);
module.exports = QAbox3Model;
