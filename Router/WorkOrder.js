const express = require("express");
const router = express.Router();
const TokenVerify = require("../Middleware/TokenVerify");
const OrganizationToken = require("../Middleware/OrganizationToken");
const controller = require("../Controller/WorkOrder");

// router.post("/create/workorder", TokenVerify, controller.createWorkOrder)
router.post("/create/workorder", TokenVerify, controller.createWorkOrder);
router.post(
  "/create/workorderORG",
  OrganizationToken,
  controller.createWorkOrderORG
);

router.get("/getallworkorder", TokenVerify, controller.getAllWorkorder);
router.get(
  "/getallworkorderORG",
  OrganizationToken,
  controller.getAllWorkorderORG
);

router.get(
  "/getsingleworkorder/:id",
  TokenVerify,
  controller.getSingleWorkOrder
);

router.delete("/deleteworkorder/:id", controller.deleteWorkOrder);

module.exports = router;
