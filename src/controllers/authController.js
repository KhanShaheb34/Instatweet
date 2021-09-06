const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Credential = require("../models/CredentialModel");
const User = require("../models/UserModel");

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    token = req.headers.authorization.split(" ")[1];

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  const decoded = await promisify(jwt.verify)(token, process.env.jwtSecret);
  const currentUser = decoded.user;
  console.log(currentUser);
  const user = await Credential.findOne({
    where: {
      reg_no: currentUser.reg_no,
    },
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  });
  if (user == null)
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  const changedTimestamp = parseInt(user.updatedAt / 1000, 10);
  if (changedTimestamp > decoded.iat)
    return next(
      new AppError("Your credential changed recently.Please log in again", 401)
    );

  //console.log(changedTimestamp, decoded.iat);
  req.user = {
    reg_no: user.reg_no,
    role: user.role,
    name: user.user.name,
  };
  next();
});

const createSendToken = (req, res, user, message) => {
  const jwtToken = jwtGenerator(
    { reg_no: user.reg_no },
    process.env.jwtSessionTokenExpire
  );

  res.cookie("jwt", jwtToken, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
    ),
    httpOnly: true,
    //secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });
  if (process.env.NODE_ENV === "prooooductin") cookieOptions.secure = true;
  user.password = undefined;
  //console.log(user);
  const credential = {
    id: user.id,
    role: user.role,
    reg_no: user.reg_no,
    email: user.email,
  };
  user = user.user.dataValues;
  user.credential = credential;
  res.status(200).json({
    status: "success",
    message,
    user,
  });
};

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Credential.findOne({
    where: {
      email,
    },
    include: [User],
  });
  //console.log(user.user.dataValues);
  if (user == null) return next(new AppError("Invalid Credential", 404));
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return next(new AppError("Invalid Credential", 404));
  createSendToken(req, res, user, "Successfully Logged In!");
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};
