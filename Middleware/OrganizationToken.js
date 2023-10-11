const jwt = require("jsonwebtoken");
const OrganizationMoad = require("../Models/OrganizationMoad");

const OrganizationTokenVerify = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Please Login Your Token Is Expire",
      });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY_ORG);
    req.org = await OrganizationMoad.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = OrganizationTokenVerify;
