const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/UserModel");

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.cookies.jwt) token = req.cookies.jwt;
  else if (req.headers.authorization?.startsWith("Bearer"))
    token = req.headers.authorization.split(" ")[1];

  if (!token) return next(new AppError("Not logged in", 401));

  const jwtSecret = process.env.JWT_SECRET || "longSecretToken";
  const decoded = await promisify(jwt.verify)(token, jwtSecret);

  const user = await User.findOne({
    where: {
      username: decoded.username,
    },
    raw: true,
  });
  if (user == null) return next(new AppError("Please login again", 401));

  req.body.user = user;
  next();
});
