const Manager = require("../Models/ManagerModel");

exports.createManager = async (req, res, next) => {
  try {
    console.log(req.body);
    const newManager = new Manager(req.body);
    const result = await newManager.save();
    if (!result) {
      res.status(400).json({
        status: "failed",
        message: "Invalied request",
      });
    }
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
// get all manager
exports.getAllManager = async (req, res, next) => {
  try {
    const result = await Manager.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
// DELETE Manager
exports.deleteOneManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Manager.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }
    const result = await Manager.findByIdAndDelete(id);

    res.status(200).json({
      starus: "sucess",
      message: "Manager delete successfully ",
      data: "",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
// Update one manager
exports.updateOneManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Manager.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }
    const result = await Manager.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({
      starus: "sucess",
      message: "Manager Update successfully ",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
// get one Manager
exports.getOneManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Manager.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }

    res.status(200).json({
      starus: "sucess",
      message: "Manager Update successfully ",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
