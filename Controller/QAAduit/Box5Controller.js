const Box5Model = require("../../Models/QAAduit/Box5Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      req.body.user = req.user._id;
      //   req.body.Asnwer14.image = {
      //     public_id: "dsjdjshdjsd",
      //     url: "dhsdjshdjshdj",
      //   };
      //   req.body.Asnwer18.image = {
      //     public_id: "dsjdjshdjsd",
      //     url: "dhsdjshdjshdj",
      //   };
      await Box5Model.create(req.body);
      res.status(200).json({
        success: true,
        message: "Data successfully submit",
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
