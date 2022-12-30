const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  ProductDetails,
  createProductReview
} = require("../controller/ProductControl");
const express = require("express");
const router = express.Router();
const { isAuthorzation, Authorization} = require("../middleware/auth")

router.route("createProduct").post( createProduct);
router.route("/get/product").get(getAllProduct);
router.route("/update/product/:id").put(isAuthorzation, Authorization("admin"), updateProduct);
router.route("/delete/product/:id").delete(isAuthorzation, Authorization("admin"), deleteProduct);
router.route("/product/details/:id").get(ProductDetails);
router.route("/product/review").put(isAuthorzation,createProductReview);

module.exports = router;
