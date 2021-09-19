const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Follower = require("../models/followerModel");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const generateToken = (user) => {
  const jwtSecret = process.env.JWT_SECRET || "longSecretToken";
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: "30d",
  });
  return token;
};

exports.register = catchAsync(async (req, res, next) => {
  const { email, username, password: plainPassword } = req.body;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainPassword, salt);

  try {
    const user = await User.create({ email, username, password });
    return res.status(201).json({ status: "success", data: user });
  } catch {
    return next(new AppError("User already exists", 409));
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username }, raw: true });
  if (!user) return next(new AppError("Wrong username or password", 401));
  const match = await bcrypt.compare(password, user.password);
  if (!match) return next(new AppError("Wrong username or password", 401));

  delete user.password;

  const token = generateToken(user);

  return res.json({ status: "success", data: { user, token } });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    include: {
      model: Follower,
      include: { model: User },
    },
  });
  return res.json({ status: "success", data: users });
});

exports.getSingleUser = catchAsync(async (req, res, next) => {
  const { username } = req.params;

  const user = await User.findOne({
    where: { username },
    include: [
      { model: Follower, attributes: ["followerId"] },
      {
        model: Post,
        include: [
          {
            model: User,
          },
          {
            model: Like,
          },
        ],
      },
    ],
  });
  if (!user)
    return res
      .status(404)
      .json({ status: "error", data: { message: "User not found" } });

  return res.json({ status: "success", data: user });
});
