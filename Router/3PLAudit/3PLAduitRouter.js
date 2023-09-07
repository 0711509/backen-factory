const express = require("express");
const router = express.Router();
const controller1 = require("../../Controller/3PLAudit/Box1Controller");
const controller2 = require("../../Controller/3PLAudit/Box2Controller");
const controller3 = require("../../Controller/3PLAudit/Box3Controller");
const controller4 = require("../../Controller/3PLAudit/Box4Controller");
const controller5 = require("../../Controller/3PLAudit/Box5Controller");
const controller6 = require("../../Controller/3PLAudit/Box6Controller");
const controller7 = require("../../Controller/3PLAudit/Box7Controller");
const controller8 = require("../../Controller/3PLAudit/Box8Controller");
const controller9 = require("../../Controller/3PLAudit/Box9Controller");
const TokenVerfy = require("../../Middleware/TokenVerify");

// ======== box1
router.post("/createbox1", TokenVerfy, controller1.CreateBox1);
router.get("/answerbox1", controller1.box1Answer);
router.get("/box1/from/data", TokenVerfy, controller1.loginuserFromData);

// ==========box2
router.post("/createbox2", TokenVerfy, controller2.CreateBox2);
router.get("/answerbox2", controller2.box2Answer);
router.get("/box2/from/data", TokenVerfy, controller2.loginuserFromData);

// ==========box3
router.post("/createbox3", TokenVerfy, controller3.CreateBox3);
router.get("/answerbox3", controller3.box3Answer);
router.get("/box3/from/data", TokenVerfy, controller3.loginuserFromData);

// ==========box4
router.post("/createbox4", TokenVerfy, controller4.CreateBox4);
router.get("/answerbox4", controller4.box4Answer);
router.get("/box4/from/data", TokenVerfy, controller4.loginuserFromData);

// ==========box5
router.post("/createbox5", TokenVerfy, controller5.CreateBox5);
router.get("/answerbox5", controller5.box5Answer);
router.get("/box5/from/data", TokenVerfy, controller5.loginuserFromData);

// ==========box6
router.post("/createbox6", TokenVerfy, controller6.CreateBox6);
router.get("/answerbox6", controller6.box6Answer);
router.get("/box6/from/data", TokenVerfy, controller6.loginuserFromData);

// ==========box7
router.post("/createbox7", TokenVerfy, controller7.CreateBox7);
router.get("/answerbox7", controller7.box7Answer);
router.get("/box7/from/data", TokenVerfy, controller7.loginuserFromData);

// ==========box8
router.post("/createbox8", TokenVerfy, controller8.CreateBox8);
router.get("/answerbox8", controller8.box8Answer);
router.get("/box8/from/data", TokenVerfy, controller8.loginuserFromData);

// ==========box9
router.post("/createbox9", TokenVerfy, controller9.CreateBox9);
router.get("/answerbox9", controller9.box9Answer);
router.get("/box9/from/data", TokenVerfy, controller9.loginuserFromData);

module.exports = router;
