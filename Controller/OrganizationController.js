const OrganizationModal = require("../Models/OrganizationMoad");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  // -------------- cretea Organization

  createOrganization: async (req, res) => {
    try {
      const { OrganizationName, AdminName, AdminEmail } = req.body;
      if (!OrganizationName) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Organizaton Name",
        });
      }
      if (!AdminName) {
        return res.status(400).json({
          success: false,
          message: "Please enter Admin name",
        });
      }
      if (!AdminEmail) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Admin Email",
        });
      }
      // ------ check is email already exis
      const isEmail = await OrganizationModal.findOne({ AdminEmail });
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
      if (isEmail) {
        return res.status(400).json({
          success: false,
          message: "This Email Already Exist",
        });
      }
      // -------- now create the doument
      await OrganizationModal.create({
        OrganizationName,
        AdminName,
        AdminEmail,
        role: "admin",
        password: defaultPass,
        defaultPassword: defaultPass,
        user: req.user._id,
      });
      res.status(200).json({
        success: true,
        message: "Organizaton Created Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ----------- organization login
  LoginOrganization: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please Enter Email And Password",
        });
      }
      const Organization = await OrganizationModal.findOne({
        AdminEmail: email,
      });
      if (!Organization) {
        return res.status(400).json({
          success: false,
          message: "Organization Not Exist",
        });
      }
      const isMatch = await bcrypt.compare(password, Organization.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Please fil valid information",
        });
      }
      const token = jwt.sign(
        { id: Organization._id },
        process.env.SECRET_KEY_ORG,
        {
          expiresIn: "7d",
        }
      );
      res.status(200).cookie("token", token).json({
        success: true,
        message: "Login Successfuly",
        token,
        Organization,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------ update the organization
  updateOrganization: async (req, res) => {
    try {
      const organization = await OrganizationModal.findById(req.org._id);
      if (!organization) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Valid Id",
        });
      }
      organization.OrganizationName = req.body.OrganizationName;
      organization.AdminName = req.body.AdminName;
      organization.AdminEmail = req.body.AdminEmail;
      await organization.save();
      res.status(200).json({
        success: true,
        message: "Organization Update Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // -------------- get single organization
  getSingleOrgnization: async (req, res) => {
    try {
      const oganization = await OrganizationModal.findById(req.params.id);
      if (!oganization) {
        return res.status(400).json({
          success: false,
          message: "Organization Not Found Plaese Enter Valid Id",
        });
      }
      res.status(400).json({
        success: true,
        oganization,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ----------- delete organization
  deleteOrganization: async (req, res) => {
    try {
      const organization = await OrganizationModal.findById(req.params.id);
      if (!organization) {
        return res
          .status(401)
          .json({ success: false, message: "No Organisation Found" });
      }
      await OrganizationModal.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Organization Delete Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getAllOrganizations: async (req, res) => {
    try {
      // Retrieve all organizations from the database
      const organizations = await OrganizationModal.find();

      // Check if there are no organizations
      if (organizations.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No organizations found.",
        });
      }

      // Send the organizations as a response
      res.status(200).json({
        success: true,
        message: "Organizations retrieved successfully",
        organizations: organizations,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving organizations",
        error: error.message,
      });
    }
  },

  // =========== login organization adat
  loginOrganizationData: async (req, res) => {
    try {
      const user = await OrganizationModal.findById(req.org._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Organization not found",
        });
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving organizations",
        error: error.message,
      });
    }
  },
};
