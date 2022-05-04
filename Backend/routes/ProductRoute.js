const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controller/ProductController");
const {AuthUser, authorRoles } = require("../Middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/products").get(AuthUser,authorRoles("admin"),getAllProducts);
router.route("/product/new").post(AuthUser,authorRoles("admin"),createProduct);  
 
router
  .route("/product/:id")
  .put(AuthUser, authorRoles("admin"), updateProduct)
  .delete(AuthUser, authorRoles("admin"), deleteProduct)
  .get(getSingleProduct);
router.route("/product/review").post(AuthUser, createProductReview); 
router.route("/reviews").get(getSingleProductReviews); 
router.route("/reviews").delete(AuthUser,authorRoles("admin"),deleteReview); 
module.exports = router;

