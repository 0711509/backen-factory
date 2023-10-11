const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  members: [
    {
      senderId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      owner: {
        type: mongoose.Types.ObjectId,
        ref: "organization",
      },
    },
  ],
});

const ConversationModal = mongoose.model("conversation", ConversationSchema);
module.exports = ConversationModal;
