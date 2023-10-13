const express = require("express");
const router = express.Router();
const controller = require("../Controller/UserController");
const TokenVerfy = require("../Middleware/TokenVerify");
const OrganizationTokenVerify = require("../Middleware/OrganizationToken");
const AdminVerify = require("../Middleware/AdminVerify");
const ChatModal = require("../Models/ChatModal");
const ConversationModal = require("../Models/Conversation");
const MessageModal = require("../Models/Messages");
const corn = require("node-cron");

router.post(
  "/create",
  TokenVerfy,
  AdminVerify("admin", "superAdmin"),
  controller.createuser
);
router.post("/createuser", OrganizationTokenVerify, controller.createuser);

router.post("/login", controller.LoginUser);

router.get("/me", TokenVerfy, controller.LoadUser);

router.post("/logout", controller.LogoutUser);

router.put(
  "/updaterole",
  TokenVerfy,
  AdminVerify("superAdmin"),
  controller.updateUserRole
);

router.get("/getallusersforadmin", TokenVerfy, controller.GetAllUser);

router.delete("/deleteuser/:id", TokenVerfy, controller.deleteuser);

router.post("/uploadfile", TokenVerfy, controller.UploadDocument);

router.post(
  "/uploadfileOrg",
  OrganizationTokenVerify,
  controller.OrganizationUploadDocument
);

router.get(
  "/getOrganizationUsers",
  OrganizationTokenVerify,
  controller.AllUserOfOrganization
);

router.get(
  "/getAdminUsers",
  TokenVerfy,
  AdminVerify("superAdmin"),
  controller.AllUserOfAdmin
);

router.get("/admindoc", OrganizationTokenVerify, controller.getAdminDocuments);
router.get("/userdoc", TokenVerfy, controller.getUserDocuments);

router.get(
  "/getalladmindoc",
  TokenVerfy,
  AdminVerify("superAdmin"),
  controller.getAllDocuments
);

router.delete("/deletedoc/:id", controller.deleteDoc);

router.get(
  "/orgalluserfromloginuser",
  TokenVerfy,
  controller.orgAllUserByLoginUser
);

// ===== update user role
router.put(
  "/updaterole/:id",
  TokenVerfy,
  AdminVerify("superAdmin"),
  controller.updateRole
);
// ================= create conversation
router.post("/createConversation", TokenVerfy, async (req, res) => {
  try {
    const conersation = await ConversationModal.create({
      members: [{ senderId: req.user._id, owner: req.user.user }],
    });
    res.status(200).send("Conversation Created Successfuly");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ===== get conersation
router.get("/getConversation", TokenVerfy, async (req, res) => {
  try {
    const conversations = await ConversationModal.find({
      "members.owner": req.user.user,
    }).populate("members.senderId members.owner");

    res.status(200).send(conversations);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ========== create Message
router.post("/create/message", TokenVerfy, async (req, res) => {
  try {
    console.log(req.body)
    const newMessage = await MessageModal.create({
      conversationId: req.user.user,
      senderId: req.user._id,
      message: req.body.message,
    });
    res.status(200).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ======= create message by organizatoion
router.post("/create/messageORG", OrganizationTokenVerify, async (req, res) => {
  try {
    const newMessage = await MessageModal.create({
      conversationId: req.org._id,
      senderId: req.org._id,
      message: req.body.message,
    });
    res.status(200).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ======= get all messages
router.get("/messages/getall", TokenVerfy, async (req, res) => {
  try {
    if (req.user.role === "superAdmin") {
      const data = await MessageModal.find().populate("senderId");
      res.status(200).send(data);
    } else {
      const data = await MessageModal.find({
        conversationId: req.user.user,
      }).populate("senderId");
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
// ======= get all messages by org
router.get("/messages/getallorg", OrganizationTokenVerify, async (req, res) => {
  try {
    const data = await MessageModal.find({
      conversationId: req.org._id,
    }).populate("senderId");
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// --------- corn job
corn.schedule("0 0 0 * * *", async () => {
  const thirtiday = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  await MessageModal.deleteMany({ createdAt: { $lt: thirtiday } });
});

module.exports = router;
