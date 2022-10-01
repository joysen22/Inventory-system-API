const Brand = require("../Models/BrandModel");

// create one brand
exports.createBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body);
    const result = await newBrand.save();
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
// get all Brand
exports.getAllBrand = async (req, res, next) => {
  try {
    const result = await Brand.find({});
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
// DELETE Brand
exports.deleteOneBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Brand.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }
    const result = await Brand.findByIdAndDelete(id);

    res.status(200).json({
      starus: "sucess",
      message: " Delete successfully ",
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
exports.updateOneBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Brand.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }
    const result = await Brand.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({
      starus: "sucess",
      message: "Update successfully ",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
// get one Brand
exports.getOneBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Brand.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalied request" });
    }

    res.status(200).json({
      starus: "sucess",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
