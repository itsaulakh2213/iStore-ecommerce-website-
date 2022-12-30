const ErrorHandler = require("../utils/errorHandler");

module.exports = async (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "internal server error";
  res.status(err.statuscode).json({
    success: true,
    error: err,
  });
};
