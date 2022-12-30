const User = require("../models/user");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, number, password } = req.body;

  if (!name || !email || !password || !number ) {
    return res.status(404).json({
      success: false,
      error: "Please enter your valid details",
    });
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res.status(401).json({
      success: false,
      error: "user already exists",
    });
  } else{

    const user = await User.create({
      name,
      email,
      number,
      password,
    });
    const token = user.webToken();
  
    res.status(201).cookie("token", token).json({
      success: true,
      message: "user successfully registered",
      token,
      user,
    });
  }

});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      success: false,
      error: "please enter your email or password",
    });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      success: false,
      error: "Email or Password is invalid",
    });
  }

  const passwordmatched = await bcrypt.compare(password, user.password);

  if (!passwordmatched) {
    return res.status(401).json({
      success: false,
      error: "Email or Password is invalid",
    });
  }

  const token = user.webToken();

  res.status(200).cookie("token", token).json({
    success: true,
    message: "user successfully login",
    token,
    user,
  });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const userExist = await User.findById(req.params.id);

  if (!userExist) {
    return res.status(404).json({
      error: "user not found",
    });
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message:"user update successfully",
    user
  })
});

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndRemove(req.params.id);

  res.status(200).json({
    message:"user delete successfully",
    user
  })
});



