const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  sender_Id: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  receiver_Id: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  message: {
    type: String,
    required: [true, "Plaese Enter Message"],
  },
});

const ChatModal = mongoose.model("chat", ChatSchema);
module.exports = ChatModal;
