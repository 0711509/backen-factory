const express = require("express");
const router = express.Router();
const controller = require("../Controller/UserController");
const TokenVerfy = require("../Middleware/TokenVerify")




router.post("/signup", controller.createuser);

router.post("/login", controller.LoginUser);

router.post("/me", TokenVerfy, controller.LoadUser);

router.post("/logout", controller.LogoutUser)












module.exports = router;