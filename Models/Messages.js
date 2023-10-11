const mongoose = require("mongoose");
// const isUser = require("../Router/UserRouter");
// const modelName = isUser ? "user" : "organization";

const MessageSchem = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Types.ObjectId,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const MessageModal = mongoose.model("message", MessageSchem);
module.exports = MessageModal;
