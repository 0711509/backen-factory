const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const OrganizationSchema = new Schema(
  {
    OrganizationName: {
      type: String,
      required: [true, "Plaese Enter Organization Name"],
    },
    AdminName: {
      type: String,
      required: [true, "Please Enter Admin Name"],
    },
    AdminEmail: {
      type: String,
      required: [true, "Plaese Enter Admin Email"],
      validate: [validator.isEmail, "Plaese Enter Valid Email Adress"],
    },
    role: {
      type: String,
      default: "admin",
    },
    password: {
      type: String,
      required: [true, "Plaese Enter Organization Password"],
    },
    defaultPassword: {
      type: String,
      required: [true, "Plaese Enter Organization Default Password"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    documents: [
      {
        public_id: {
          type: String,
          required: [true],
        },
        url: {
          type: String,
          required: [true],
        },
        filename: {
          type: String,
          required: [true],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

OrganizationSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
});

const OrganizationModal = mongoose.model("organization", OrganizationSchema);
module.exports = OrganizationModal;
