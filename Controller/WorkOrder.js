const WorkOrderModal = require("../Models/workorderModal");

module.exports = {
  // ------- create Work Order
  createWorkOrder: async (req, res) => {
    try {
      const { title, description, repotedOn, repotedby } = req.body;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Please provide title",
        });
      }
      if (!description) {
        return res.status(400).json({
          success: false,
          message: "please Provide Description",
        });
      }
      if (!repotedOn) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Date",
        });
      }
      if (!repotedby) {
        return res.status(400).json({
          success: false,
          message: "Please enter Repoter Name",
        });
      }
      if (req.user.role === "superAdmin") {
        await WorkOrderModal.create({
          title,
          description,
          repotedby,
          repotedOn,
          user: req.user._id,
          owner: req.user._id,
        });
      } else {
        await WorkOrderModal.create({
          title,
          description,
          repotedby,
          repotedOn,
          user: req.user._id,
          owner: req.user.user,
        });
      }

      res.status(200).json({
        success: true,
        message: "WorkOrder Created Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  createWorkOrderORG: async (req, res) => {
    try {
      const { title, description, repotedOn, repotedby } = req.body;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Please provide title",
        });
      }
      if (!description) {
        return res.status(400).json({
          success: false,
          message: "please Provide Description",
        });
      }
      if (!repotedOn) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Date",
        });
      }
      if (!repotedby) {
        return res.status(400).json({
          success: false,
          message: "Please enter Repoter Name",
        });
      }
      await WorkOrderModal.create({
        title,
        description,
        repotedby,
        repotedOn,
        user: req.org._id,
        owner: req.org._id,
      });

      res.status(200).json({
        success: true,
        message: "WorkOrder Created Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------------ get all workorder
  getAllWorkorder: async (req, res) => {
    try {
      if (req.user.role === "superAdmin") {
        const order = await WorkOrderModal.find();
        res.status(200).json({
          success: true,
          order,
        });
      } else {
        const order = await WorkOrderModal.find({ owner: req.user.user });
        res.status(200).json({
          success: true,
          order,
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getAllWorkorderORG: async (req, res) => {
    try {
      const order = await WorkOrderModal.find({ owner: req.org._id });
      res.status(200).json({
        success: true,
        order,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // ------- geSingleWorkOrder
  getSingleWorkOrder: async (req, res) => {
    try {
      const order = await WorkOrderModal.findById(req.params.id);
      if (!order) {
        return res.status(400).json({
          success: false,
          message: "WorkOrder Not Found Plaese Enter Valid ID",
        });
      }
      res.status(400).json({
        success: true,
        order,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // -------------- delete workorder
  deleteWorkOrder: async (req, res) => {
    try {
      const order = await WorkOrderModal.findById(req.params.id);
      if (!order) {
        return res.status(400).json({
          success: false,
          message: "Please Enter Valid ID, WorkOrder not found",
        });
      }
      await WorkOrderModal.findOneAndDelete(order._id);
      res.status(200).json({
        success: true,
        message: "WordOrder Delete Successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
