const Box6Model = require("../../Models/QAAduit/Box6Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      req.body.user = req.user._id;

      //   req.body.Asnwer28.image = {
      //     public_id: "dsjdjshdjsd",
      //     url: "dhsdjshdjshdj",
      //   };
      await Box6Model.create(req.body);
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

      const Data = await Box6Model.find({ user: user._id });
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
