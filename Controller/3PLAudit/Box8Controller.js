const Box8Model = require("../../Models/3PLAudit/Box8Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  // ---------- create Box8Model
  CreateBox8: async (req, res) => {
    try {
      const {
        properfencingaroundtheyard,
        mandoorsinthewarehouse,
        yardfreeofdebris,
        Dockloadlevelers,
        PLprovided,
        detailededtrailer,
        trailerinformationincludetrailrnumber,
        proofofdistributingapplicable,
      } = req.body;

      // List of required fields
      const requiredFields = [
        "properfencingaroundtheyard",
        "mandoorsinthewarehouse",
        "yardfreeofdebris",
        "Dockloadlevelers",
        "PLprovided",
        "detailededtrailer",
        "trailerinformationincludetrailrnumber",
        "proofofdistributingapplicable",
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

      //    ================ create Box8Model

      await Box8Model.create({
        properfencingaroundtheyard,
        mandoorsinthewarehouse,
        yardfreeofdebris,
        Dockloadlevelers,
        PLprovided,
        detailededtrailer,
        trailerinformationincludetrailrnumber,
        proofofdistributingapplicable,
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
  box8Answer: async (req, res) => {
    try {
      const box1Answer = await Box8Model.find();
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

      const Data = await Box8Model.find({ user: user._id });
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
