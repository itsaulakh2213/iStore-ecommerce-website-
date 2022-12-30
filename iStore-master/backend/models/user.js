const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require : true,
  },
  number: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.webToken = function () {
  return jwt.sign({ id: this._id }, process.env.KEY);
};

module.exports = mongoose.model("User", userSchema);
