const express = require("express");
const brandController = require("../Controllers/BrandController");
const router = express.Router();

router
  .route("/")
  //@desc get all Brand
  //@Route GET=>api/v1/brand
  //@status public
  .get(brandController.getAllBrand)
  //@desc Create one Brand
  //@Route GET=>api/v1/brand
  //@status public
  .post(brandController.createBrand);
router
  .route("/:id")
  //@desc get one Brand
  //@Route GET=>api/v1/brand/:id
  //@status public
  .get(brandController.getOneBrand)
  //@desc update one Brand
  //@Route GET=>api/v1/brand/:id
  //@status public
  .patch(brandController.updateOneBrand)
  //@desc delete one Brand
  //@Route GET=>api/v1/brand/:id
  //@status public
  .delete(brandController.deleteOneBrand);
module.exports = router;
