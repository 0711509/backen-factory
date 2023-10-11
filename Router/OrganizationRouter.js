const express = require("express");
const router = express.Router();
const controller = require("../Controller/OrganizationController");
const AdminVerify = require("../Middleware/AdminVerify");
const VerifyToken = require("../Middleware/TokenVerify");
const OrganizationTokenVerify = require("../Middleware/OrganizationToken");

router.post(
  "/create/organizaton",
  VerifyToken,
  AdminVerify("superAdmin"),
  controller.createOrganization
);

router.post("/login/organizaton", controller.LoginOrganization);

router.put(
  "/update/organizaton/:id",
  OrganizationTokenVerify,
  controller.updateOrganization
);

router.get("/single/organizaton/:id", controller.getSingleOrgnization);

router.delete(
  "/delete/organizaton/:id",
  VerifyToken,
  AdminVerify("superAdmin"),
  controller.deleteOrganization
);

router.get("/allOrganizations",
  VerifyToken,
  AdminVerify("superAdmin")
  , controller.getAllOrganizations);

router.get(
  "/getloginorg",
  OrganizationTokenVerify,
  controller.loginOrganizationData
);

module.exports = router;
