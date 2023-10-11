const Box5Model = require("../../Models/QAAduit/Box5Model");
const UserModel = require("../../Models/UserModel");
const cloudinary = require("cloudinary");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      // Define an array of answer objects
      const answers = [
        req.body.Asnwer1,
        req.body.Asnwer2,
        req.body.Asnwer3,
        req.body.Asnwer4,
        req.body.Asnwer5,
        req.body.Asnwer6,
        req.body.Asnwer7,
        req.body.Asnwer8,
        req.body.Asnwer9,
        req.body.Asnwer10,
        req.body.Asnwer11,
        req.body.Asnwer12,
        req.body.Asnwer13,
        req.body.Asnwer14,
        req.body.Asnwer15,
        req.body.Asnwer16,
        req.body.Asnwer17,
        req.body.Asnwer18,
        req.body.Asnwer19,
      ];

      // Define a function to upload an image to Cloudinary
      const uploadToCloudinary = async (img) => {
        if (img) {
          const mycloud = await cloudinary.v2.uploader.upload(img, {
            folder: "Inventory",
            width: 300,
            crop: "scale",
            resource_type: "auto",
          });
          return {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
          };
        }
        return null;
      };

      // Use a for loop to process each answer object
      for (let i = 0; i < answers.length; i++) {
        // Check if the answer object has 'img' property
        if (answers[i] && answers[i].img) {
          answers[i].image = await uploadToCloudinary(answers[i].img);
        }
      }
      req.body.user = req.user._id;
      req.body.owner = req.user.user;
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
