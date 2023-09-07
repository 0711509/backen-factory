const Box1Model = require("../../Models/3PLAudit/Box1Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  // ---------- create Box1Model
  CreateBox1: async (req, res) => {
    try {
      const {
        FacilityName,
        FacilityCode,
        MotherPlant,
        Auditdate,
        AuditedBy,
        Inspectiontype,
        Ageofbuilding,
        Buildingsizeinsqft,
        Numberofemployees,
        Operatinghours,
      } = req.body;

      // List of required fields
      const requiredFields = [
        "FacilityName",
        "FacilityCode",
        "MotherPlant",
        "Auditdate",
        "AuditedBy",
        "Inspectiontype",
        "Ageofbuilding",
        "Buildingsizeinsqft",
        "Numberofemployees",
        "Operatinghours",
      ];

      // Check if any required field is missing
      const missingField = requiredFields.find((field) => !req.body[field]);
      if (missingField) {
        return res.status(400).json({
          success: false,
          message: `Please provide ${missingField}`,
        });
      }

      //   ------- find login user
      const isUser = await UserModel.findById(req.user._id);
      if (!isUser) {
        return res.status(400).json({
          success: false,
          message: "Plaese Login",
        });
      }

      //    ================ create Box1Model

      await Box1Model.create({
        FacilityName,
        FacilityCode,
        MotherPlant,
        Auditdate,
        AuditedBy,
        Inspectiontype,
        Ageofbuilding,
        Buildingsizeinsqft,
        Numberofemployees,
        Operatinghours,
        user: isUser._id,
      });

      res.status(200).json({
        success: true,
        message: "Your Answer Submit Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  //   =========== git all answer of box1
  box1Answer: async (req, res) => {
    try {
      const box1Answer = await Box1Model.find();
      res.status(200).json({
        success: true,
        box1Answer,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // =========================== owner delete form
  deleteForm: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Plaese Login",
        });
      }

      if (user.role === "admin") {
        const formdata = await Box1Model.findById(req.params.id);
        if (!formdata) {
          return res.status(400).json({
            success: false,
            message: `No FormData found at this id ${req.params.id}`,
          });
        }
        await Box1Model.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success: true,
          message: "Data Delete Successfuly",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "You are not admin",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ============ get login user form
  loginuserFromData: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Plaese Login",
        });
      }

      const Data = await Box1Model.find({ user: user._id });
      res.status(200).json({
        success: true,
        Data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
