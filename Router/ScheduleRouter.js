const express = require("express");
const router = express.Router();
const controller = require("../Controller/ScheduleController");
const tokenVerify = require("../Middleware/TokenVerify");
const OrganizationTokenVerify = require("../Middleware/OrganizationToken");

router.post("/create/schedule", tokenVerify, controller.createSchedule);

router.post(
  "/create/schedulebyOrg",
  OrganizationTokenVerify,
  controller.createSchedulebyOrganization
);

router.get("/getall/schedule", tokenVerify, controller.getAllSchedules);
router.get(
  "/getall/schedulebyOrg",
  OrganizationTokenVerify,
  controller.getAllSchedulesbyorg
);

router.get("/getsingle/schedule/:id", controller.getSingleScheduleById);

router.delete("/delete/schedule/:id", controller.deleteScheduleById);

router.put("/update/schedule/:id", controller.updateScheduleById);

module.exports = router;
