const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.AuthUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login for access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  // console.log(decoded)
  req.user = await User.findById(decoded.id);

  next();
});

// Admin Roles
exports.authorRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`)
      );
    }
    next();
  };
};
