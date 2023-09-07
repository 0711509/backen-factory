const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QAbox6Schema = new Schema({
  Asnwer1: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Have the DC Manager turn on the ventilation fans",
      ],
    },
    score: {
      type: Number,
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

    Electricalforklifts: Boolean,
    Propaneforklifts: Boolean,
    Dieselandgaspowered: Boolean,
  },
  Asnwer2: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Are there any electric forklifts? "],
    },
    score: {
      type: Number,
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
  Asnwer3: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Warehouse conditions are satisfactory (Temp, Humidity, Strong Odors)",
      ],
    },
    score: {
      type: Number,
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
  Asnwer4: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter 18 perimeter inside the warehouse is clean and not obstructed.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer5: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Pest control program is set up"],
    },
    score: {
      type: Number,
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
  Asnwer6: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter There is no evidence of pest activity or areas of potential harborage",
      ],
    },
    score: {
      type: Number,
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
  Asnwer7: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Hold area is clean and organized."],
    },
    score: {
      type: Number,
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
  Asnwer8: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Product storage conditions limit the possibility of any flavo.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer9: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Warehouse and product does not have excessive dust build up.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer10: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Any evidence of allergens stored in warehouse..",
      ],
    },
    score: {
      type: Number,
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
  Asnwer11: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Evidence that FEFO is being followed"],
    },
    score: {
      type: Number,
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
  Asnwer12: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Warehouse storage areas are secured from unwanted .",
      ],
    },
    score: {
      type: Number,
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
  Asnwer14: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Bathroom and break room areas are clean with warm running water.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer15: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Door seals in shipping/receiving areas are in good condition..",
      ],
    },
    score: {
      type: Number,
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
  Asnwer16: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter All roll up doors are shut and latched when not in use",
      ],
    },
    score: {
      type: Number,
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
  Asnwer17: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Floors, walls, and ceiling are maintained in good repair. .",
      ],
    },
    score: {
      type: Number,
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
  Asnwer18: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Trash cans are clean and have proper lids.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer19: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Maintenance area is clean and organized."],
    },
    score: {
      type: Number,
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
  Asnwer20: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter GMP is posted and employees are following GMP policy.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer21: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Product rows are straight."],
    },
    score: {
      type: Number,
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
  Asnwer22: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Light fixtures are covered or have shatterproof bulbs.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer22: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Outside area is free of clutter and debris with no standing water..",
      ],
    },
    score: {
      type: Number,
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
  Asnwer23: {
    answer: {
      type: String,
      required: [true, "Plaese Enter No signs of pest harborage."],
    },
    score: {
      type: Number,
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
  Asnwer24: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Exterior bait stations are numbered, clean,.",
      ],
    },
    score: {
      type: Number,
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
  Asnwer25: {
    answer: {
      type: String,
      required: [true, "Plaese Enter All dock doors used to ship and receiv."],
    },
    score: {
      type: Number,
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
  Asnwer26: {
    answer: {
      type: String,
      required: [true, "Plaese Enter All exterior doors are locked."],
    },
    score: {
      type: Number,
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
  Asnwer27: {
    answer: {
      type: String,
      required: [true, "Plaese Enter All holes, pipes, windows, vents,."],
    },
    score: {
      type: Number,
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
  Asnwer28: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Exterior walls and gutters are in good condition,.",
      ],
    },
    score: {
      type: Number,
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
});

const QAbox6Model = mongoose.model("qabox6", QAbox6Schema);
module.exports = QAbox6Model;
