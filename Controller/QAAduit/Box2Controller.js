const Box2Model = require("../../Models/QAAduit/Box2Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      const { Answer1, Answer2, Answer3 } = req.body;
      if (!Answer1 || !Answer2 || !Answer3) {
        return res.status(400).json({
          success: false,
          message: "Plaese give anser of all fields",
        });
      }

      await Box2Model.create({
        Answer1,
        Answer2,
        Answer3,
        user: req.user._id,
      });

      res.status(200).json({
        success: true,
        message: "Data submit successfully",
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

      const Data = await Box2Model.find({ user: user._id });
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
