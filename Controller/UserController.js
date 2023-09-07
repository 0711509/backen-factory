const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  // ---------------------- user registration
  createuser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter UserName",
        });
      }
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Plaese fill email",
        });
      }
      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Plaese fill password with profile photo",
        });
      }

      //   ------------- is emsil present
      const isUser = await UserModel.findOne({ email });
      if (isUser) {
        return res.status(400).json({
          success: false,
          message: "Email Already Present Plaese Login",
        });
      }

      await UserModel.create({
        name: name,
        email: email,
        password: password,
      });

      res.status(200).json({
        success: true,
        message: "Registration Successfuly Plaese Login",
      });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({
          success: false,
          message: `Duplicate ${Object.keys(error.keyValue)} error`,
        });
      }

      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------------ login User
  LoginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please Enter Email And Password",
        });
      }
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User Not Exist",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Please fil valid information",
        });
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
      res.status(200).cookie("token", token).json({
        success: true,
        message: "Login Successfuly",
        token,
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------------------ get load user
  LoadUser: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User Not Exist",
        });
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------------ logout User
  LogoutUser: async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
