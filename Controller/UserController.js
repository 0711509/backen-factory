const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OrganizationModal = require("../Models/OrganizationMoad");
const cloudinary = require("cloudinary");
const DocumentModel = require("../Models/DocumentModal");

module.exports = {
  // ---------------------- user registration
  createuser: async (req, res) => {
    try {
      const { name, email } = req.body;
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
      //   ------------- is emsil present

      const isUser = await UserModel.findOne({ email });
      if (isUser) {
        return res.status(400).json({
          success: false,
          message: "Email Already Present Plaese Login",
        });
      }
      // ==============
      function generatePassword() {
        const length = 8; // The length of the password
        const charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters to choose from
        let password = "";

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }

        return password;
      }

      const defaultPass = generatePassword();

      await UserModel.create({
        name: name,
        email: email,
        password: defaultPass,
        defaultPassword: defaultPass,
        user: req.org?._id || req.user?._id,
      });

      res.status(200).json({
        success: true,
        message: "User Created Successfuly",
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
  // ------------------- update user role
  updateUserRole: async (req, res) => {
    try {
      const { userId, role } = req.body;

      // Check if both userId and newRole are provided
      if (!userId || !role) {
        return res.status(400).json({
          success: false,
          message: "Please provide userId and newRole",
        });
      }

      // Find the user by userId
      const user = await UserModel.findById(userId);

      // Check if the user exists
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }

      // Update the user's role
      user.role = role;

      // Save the updated user to the database
      await user.save();

      res.status(200).json({
        success: true,
        message: "User role updated successfully",
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------ get all user
  GetAllUser: async (req, res) => {
    try {
      if (req.user?.role === "superAdmin") {
        const users = await UserModel.find();
        res.status(200).json({
          success: true,
          users,
        });
      } else {
        res.status(200).json({
          success: true,
          users: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------ delete user
  deleteuser: async (req, res) => {
    try {
      const userId = req.params.id; // Extract the userId from the URL parameters

      // Check if userId is provided
      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "Please provide userId",
        });
      }

      // Find the user by userId using Mongoose findById
      const user = await UserModel.findById(userId);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Delete the user from the database using Mongoose's remove method
      await UserModel.findByIdAndDelete(userId);

      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ========= users of specific organization
  AllUserOfOrganization: async (req, res) => {
    try {
      const organization = await OrganizationModal.findById(req.org._id);
      if (!organization) {
        return res.status(400).json({
          success: false,
          message: "No Organization Found",
        });
      }
      const users = await UserModel.find({ user: req.org._id });
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  AllUserOfAdmin: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No Admin Found",
        });
      }
      const users = await UserModel.find({ user: req.user._id });
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------- upload document
  UploadDocument: async (req, res) => {
    try {
      const { file, filename } = req.body;
      if (!file) {
        return res.status(400).json({
          success: false,
          message: "Please Select Any File",
        });
      }
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No User Found",
        });
      }

      // Assuming you sent the file data as "file" and the filename as "filename"
      const myCloud = await cloudinary.v2.uploader.upload(file, {
        folder: "doc",
        resource_type: "auto",
      });

      await DocumentModel.create({
        documents: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
          filename: filename, // Use the "filename" from the request
        },
        owner: req.user._id,
        userOwner: user.user,
      });
      res.status(200).json({
        success: true,
        message: "File Upload Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  OrganizationUploadDocument: async (req, res) => {
    try {
      const { file, filename } = req.body;
      if (!file) {
        return res.status(400).json({
          success: false,
          message: "Please Select Any File",
        });
      }
      const user = await OrganizationModal.findById(req.org._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No User Found",
        });
      }

      // Assuming you sent the file data as "file" and the filename as "filename"
      const myCloud = await cloudinary.v2.uploader.upload(file, {
        folder: "doc",
        resource_type: "auto",
      });

      await DocumentModel.create({
        documents: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
          filename: filename, // Use the "filename" from the request
        },
        owner: req.org._id,
        userOwner: user.user,
      });
      res.status(200).json({
        success: true,
        message: "File Upload Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // --------- get document for admin
  getAllDocuments: async function (req, res) {
    try {
      const doc = await DocumentModel.find();
      res.status(200).json({
        success: true,
        doc,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  // --------- get document for specific organization
  getAdminDocuments: async function (req, res) {
    try {
      const doc = await DocumentModel.find({
        $or: [{ userOwner: req.org._id }, { owner: req.org._id }],
      });

      if (doc.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No matching documents found.",
        });
      }

      res.status(200).json({
        success: true,
        doc,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ================== for user doc
  getUserDocuments: async function (req, res) {
    try {
      const doc = await DocumentModel.find({
        $or: [{ owner: req.user.user }, { owner: req.user._id }],
      });

      if (doc.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No matching documents found.",
        });
      }

      res.status(200).json({
        success: true,
        doc,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteDoc: async (req, res) => {
    try {
      const doc = await DocumentModel.findById(req.params.id);
      if (!doc) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Valid Id",
        });
      }
      await DocumentModel.findByIdAndDelete(req.params.id);
      await cloudinary.v2.uploader.destroy(doc.documents.public_id);
      res.status(200).json({
        success: true,
        message: "Doucment Delete Successfuly",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ============= find all user of organization when user is login
  orgAllUserByLoginUser: async (req, res) => {
    try {
      const user = req.user.user;

      const users = await UserModel.find({ user: user });

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ========= update user role
  updateRole: async (req, res) => {
    try {
      const { role } = req.bod;
      if (!role) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Your Role",
        });
      }
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User Not Found Plaese Enter Valid Id",
        });
      }

      user.role = role;
      await user.save();
      res.status(200).json({
        success: true,
        message: "User Role Updated Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
