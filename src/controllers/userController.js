const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.register = catchAsync(async (req, res, next) => {
  const { email, username, password: plainPassword } = req.body;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainPassword, salt);

  try {
    await User.create({ email, username, password });
  } catch {
    next(new AppError("User already exists", 409));
  }

  return res.status(201).json({ message: "User Created" });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username }, raw: true });
  if (!user) return next(new AppError("Wrong username or password", 401));
  const match = await bcrypt.compare(password, user.password);
  if (!match) return next(new AppError("Wrong username or password", 401));

  delete user.password;

  const jwt_secret = process.env.JWT_SECRET || "longSecretToken";
  const monthInMs = 30 * 24 * 60 * 60 * 1000;

  const token = jwt.sign(user, jwt_secret, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + monthInMs),
    httpOnly: true,
  });

  return res.json({ message: "Login Successful", user });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  return res.json(users);
});
