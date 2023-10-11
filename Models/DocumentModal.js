const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  documents: {
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
  owner: {
    type: mongoose.Types.ObjectId,
  },
  userOwner: {
    type: mongoose.Types.ObjectId,
  },
});

const DocumentModel = mongoose.model("document", DocumentSchema);
module.exports = DocumentModel;
