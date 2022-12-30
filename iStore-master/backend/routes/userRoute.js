const express = require("express");
const Router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser } = require("../controller/userControl");
const { isAuthorzation, Authorization} = require("../middleware/auth")


Router.route("/register/user").post(registerUser);
Router.route("/login/user").post(loginUser);
Router.route("/update/user/:id").put(isAuthorzation, updateUser);
Router.route("/delete/user/:id").delete(isAuthorzation, deleteUser);

module.exports = Router;
