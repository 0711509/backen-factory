const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QAbox1Schema = new Schema({
  Asnwer1: {
    answer: {
      type: String,
      required: [true, "Plaese Enter How long did it take to complete re-call"],
    },
    score: {
      type: String,
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
  },
  Asnwer2: {
    answer: {
      type: String,
      required: [true, "Plaese Enter warehouse team"],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter  Score"],
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
  Asnwer3: {
    answer: {
      type: String,
      required: [true, "Plaese Enter warehouse team"],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter  Score"],
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
  Asnwer4: {
    answer: {
      type: String,
      required: [true, "Plaese Enter warehouse team"],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter  Score"],
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
  Asnwer5: {
    answer: {
      type: String,
      required: [true, "Plaese Enter warehouse team"],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter  Score"],
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
  Asnwer6: {
    answer: {
      type: String,
      required: [true, "Plaese Enter warehouse team"],
    },
    score: {
      type: String,
      required: [true, "Plaese Enter  Score"],
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

const QAbox1Model = mongoose.model("qabox1", QAbox1Schema);
module.exports = QAbox1Model;
