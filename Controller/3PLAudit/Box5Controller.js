const Box5Model = require("../../Models/3PLAudit/Box5Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  // ---------- create Box5Model
  CreateBox5: async (req, res) => {
    try {
      const {
        FGpallets,
        FGholdarea,
        pallets,
        documentedevidence,
        standingwate,
        ventilation,
        systeminventorymatch,
        documentedandupdatedQA,
        QAhumiditylog,
        systeminventorytallied,
        inventoryaccuracyscorerecorded,
        inventoryaccuracypast3months,
        palletLPN,
        FEFOFIFOobjectiv,
        FEFOFIFOverified,
      } = req.body;

      // List of required fields
      const requiredFields = [
        "FGpallets",
        "FGholdarea",
        "pallets",
        "documentedevidence",
        "standingwate",
        "ventilation",
        "systeminventorymatch",
        "documentedandupdatedQA",
        "QAhumiditylog",
        "systeminventorytallied",
        "inventoryaccuracyscorerecorded",
        "inventoryaccuracypast3months",
        "palletLPN",
        "FEFOFIFOobjectiv",
        "FEFOFIFOverified",
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

      //    ================ create Box5Model

      await Box5Model.create({
        FGpallets,
        FGholdarea,
        pallets,
        documentedevidence,
        standingwate,
        ventilation,
        systeminventorymatch,
        documentedandupdatedQA,
        QAhumiditylog,
        systeminventorytallied,
        inventoryaccuracyscorerecorded,
        inventoryaccuracypast3months,
        palletLPN,
        FEFOFIFOobjectiv,
        FEFOFIFOverified,
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
  box5Answer: async (req, res) => {
    try {
      const box1Answer = await Box5Model.find();
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

      const Data = await Box5Model.find({ user: user._id });
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
