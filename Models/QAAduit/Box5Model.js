const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QAbox5Schema = new Schema({
  Asnwer1: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Chemical control program in placel"],
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
  },
  Asnwer2: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Is there a formal Corrective Action Policy (CAPA)",
      ],
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
      },
      url: {
        type: String,
      },
    },
  },
  Asnwer3: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Effective Recall Procedure in place."],
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
        "Plaese Enter Verify that two mock recalls are conducted each year",
      ],
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
      },
      url: {
        type: String,
      },
    },
  },
  Asnwer5: {
    answer: {
      type: String,
      required: [true, "Plaese Enter If this is a re-pack facility ensure"],
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
        "Plaese Enter Product is rotated in compliance with FEFO.",
      ],
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
      },
      url: {
        type: String,
      },
    },
  },
  Asnwer7: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Review procedure for applying and removing trailer seals.",
      ],
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
        "Plaese Enter Trailer inspections are conducted and documented.",
      ],
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
      },
      url: {
        type: String,
      },
    },
    Palletstackingpatternsforrework: Boolean,
    Trailerloadingpatterns: Boolean,
    Doublestackingguidelines: Boolean,
    StretchWrapStandards: Boolean,
    Safehandlingprocedures: Boolean,
    StockRotationPolicy: Boolean,
    StockRotationPolicyMRB: Boolean,
  },
  Asnwer9: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Product HOLD policy is established"],
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
        "Plaese Enter Physical hold tags are available with description of product",
      ],
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
      },
      url: {
        type: String,
      },
    },
  },
  Asnwer11: {
    answer: {
      type: String,
      required: [
        true,
        "Plaese Enter Systems in place to track and follow up on disposition",
      ],
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
        "Plaese Enter Allergen Control Policy in place. Any allergens stored should be clearly identifie",
      ],
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
        "Plaese Enter Is there a licensed Pest Control Operator procured",
      ],
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
        "Plaese Enter Pest control service inspections are conducted at least monthly",
      ],
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
      },
      url: {
        type: String,
      },
    },
  },
  Asnwer16: {
    answer: {
      type: String,
      required: [true, "Plaese Enter Is there a food safety team in place?"],
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
        "Plaese Enter Has there been an annual facilities assessmen",
      ],
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
        "Plaese Enter Are facility audits conducted on a regular basis",
      ],
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

const QAbox5Model = mongoose.model("qabox5", QAbox5Schema);
module.exports = QAbox5Model;
