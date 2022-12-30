const jwt = require("jsonwebtoken");
const User = require("../models/user");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthorzation = catchAsyncError((req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      error: "Invalid authorization please try again",
    });
  }

  const decoded = jwt.verify(token, process.env.KEY);
  req.user = User.findById(decoded.id);
  next();
});

exports.Authorization = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(401).json({
        error: " your role is not allowed to access this resource",
      });
    }
    next();
  };
};
