const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.registerUser = catchAsync(async (req, res, next) => {
  const { email, username, password: plainPassword } = req.body;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainPassword, salt);

  const newUser = await User.create({ email, username, password });
  console.log(newUser);
  res.json(newUser);
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  return res.json(users);
});
