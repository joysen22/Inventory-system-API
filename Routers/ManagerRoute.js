const express = require("express");
const ManagerController = require("../Controllers/ManagerController");
const Manager = require("../Models/ManagerModel");
const router = express.Router();

router
  .route("/")
  //@desc get all menager
  //@route GET=> api/v1/manager
  //@status publick

  .get(ManagerController.getAllManager)
  //@desc create menager
  //@route POST=> api/v1/manager
  //@status publick

  .post(ManagerController.createManager);
router
  .route("/:id")
  //@desc  one menager
  //@route GET=> api/v1/manager/:id
  //@status publick
  .get(ManagerController.getOneManager)
  //@desc delete one menager
  //@route DELETE=> api/v1/manager/:id
  //@status publick

  .delete(ManagerController.deleteOneManager)
  //@desc update menager
  //@route PATCH=> api/v1/manager/:id
  //@status publick

  .patch(ManagerController.updateOneManager);
module.exports = router;
