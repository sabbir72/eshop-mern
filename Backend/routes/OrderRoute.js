const express = require("express");
const {
  createOrder,
  getSingleOrder,
  getAllOrders,
  getAdminAllOrders,
  updateAdminOrder,
  deleteOrder,
} = require("../controller/OrderController");
const { AuthUser, authorRoles } = require("../Middleware/auth");
const router = express.Router();

router.route("/order/new").post(AuthUser, createOrder);
router.route("/order/:id").get(AuthUser, getSingleOrder);
router.route("/orders/me").get(AuthUser, getAllOrders);
router.route("/admin/orders").get(AuthUser, authorRoles("admin"), getAdminAllOrders);
router.route("/admin/order/:id").put(AuthUser, authorRoles("admin"), updateAdminOrder);
router.route("/admin/order/:id").delete(AuthUser, authorRoles("admin"), deleteOrder);

module.exports = router;
