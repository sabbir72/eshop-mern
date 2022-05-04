const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  userDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/UserController");
const { AuthUser, authorRoles } = require("../Middleware/auth");
const router = express.Router();

router.route("/registration").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(AuthUser, userDetails);
router.route("/me/update").put(AuthUser, updatePassword);
router.route("/me/update/info").put(AuthUser, updateProfile);
router.route("/admin/users").get(AuthUser, authorRoles("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(AuthUser, authorRoles("admin"), getSingleUser)
  .put(AuthUser, authorRoles("admin"), updateUserRole)
  .delete(AuthUser, authorRoles("admin"), deleteUser);

module.exports = router;
