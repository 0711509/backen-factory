const AuditModal = require("../Models/AuditModal");

module.exports = {
  // --------- create Aduit
  createAduit: async (req, res) => {
    try {
      const { name, reason, date } = req.body;
      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Audit Name",
        });
      }
      if (!reason) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Audit Reason",
        });
      }
      await AuditModal.create({
        name,
        reason,
        date,
        user: req.user._id,
        owneruser: req.user.user,
      });
      res.status(200).json({
        success: true,
        message: "Audit Create Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  createAduitOrganization: async (req, res) => {
    try {
      const { name, reason, date } = req.body;
      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Audit Name",
        });
      }
      if (!reason) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Audit Reason",
        });
      }
      await AuditModal.create({
        name,
        reason,
        date,
        user: req.org._id,
        owneruser: req.org._id,
      });
      res.status(200).json({
        success: true,
        message: "Audit Create Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ---------get all
  getallAudits: async (req, res) => {
    try {
      const audits = await AuditModal.find();
      res.status(200).json({
        success: true,
        audits,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //   ---- for user organization by login user
  getallAuditsforuserOrganization: async (req, res) => {
    try {
      const audits = await AuditModal.find({ owneruser: req.user.user });
      res.status(200).json({
        success: true,
        audits,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //   ---- aduit organization
  getallAuditsforOrganization: async (req, res) => {
    try {
      const audits = await AuditModal.find({ owneruser: req.org._id });
      res.status(200).json({
        success: true,
        audits,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ----------- get single audits
  getSingleAudits: async (req, res) => {
    try {
      const audit = await AuditModal.findById(req.params.id);
      if (!audit) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Valid Audit Id",
        });
      }

      res.status(200).json({
        success: true,
        audit,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // --------- delete audit
  deleteaudit: async (req, res) => {
    try {
      const audit = await AuditModal.findById(req.params.id);
      if (!audit) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Valid Audit Id",
        });
      }

      await AuditModal.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Audit Delete Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // --------- update audit
  updateAudit: async (req, res) => {
    try {
      const { name, reason, date } = req.body;
      const auditId = req.params.id;

      // Check if the audit exists
      const existingAudit = await AuditModal.findById(auditId);

      if (!existingAudit) {
        return res.status(400).json({
          success: false,
          message: "Please Enter a Valid Audit ID",
        });
      }

      // Update audit fields
      existingAudit.name = name;
      existingAudit.reason = reason;
      existingAudit.date = date;

      // Save the updated audit
      const updatedAudit = await existingAudit.save();

      res.status(200).json({
        success: true,
        message: "Audit Updated Successfully",
        updatedAudit,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
