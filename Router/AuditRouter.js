const express = require("express");
const router = express.Router();
const TokenVerify = require("../Middleware/TokenVerify");
const OrganizationTokenVerify = require("../Middleware/OrganizationToken");
const controller = require("../Controller/AuditController");

router.post("/create/audit", TokenVerify, controller.createAduit);
router.post(
  "/create/auditOrg",
  OrganizationTokenVerify,
  controller.createAduitOrganization
);

router.get("/allaudits", TokenVerify, controller.getallAudits);

router.get(
  "/allauditsbyuser",
  TokenVerify,
  controller.getallAuditsforuserOrganization
);
router.get(
  "/allauditsbyOrganization",
  OrganizationTokenVerify,
  controller.getallAuditsforOrganization
);

router.get("/singleaudit/:id", controller.getSingleAudits);

router.delete("/deleteaudit/:id", controller.deleteaudit);

router.put("/updateaudit/:id", controller.updateAudit);

module.exports = router;
