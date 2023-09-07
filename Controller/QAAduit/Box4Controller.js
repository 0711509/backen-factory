const Box4Model = require("../../Models/QAAduit/Box4Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      //   const answers = [req.body.Asnwer1];
      //   // Loop through the answers and check if either 'answer' or 'score' is missing
      //   for (let i = 0; i < answers.length; i++) {
      //     if (!answers[i].answer || !answers[i].score) {
      //       return res.status(400).json({
      //         success: false,
      //         message: "Answer and Score must be provided for all answers",
      //       });
      //     }
      //   }

      req.body.user = req.user._id;
      await Box4Model.create(req.body);
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

      const Data = await Box4Model.find({ user: user._id });
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
