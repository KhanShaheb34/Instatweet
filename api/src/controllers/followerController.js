const Follower = require("../models/followerModel");
const catchAsync = require("../utils/catchAsync");

exports.createFollower = catchAsync(async (req, res, next) => {
  const {
    user: { id: followerId },
    userId,
  } = req.body;

  if (followerId === userId)
    return res.status(400).json({
      status: "error",
      data: { message: "You can't follow yourself" },
    });

  const existingFollower = await Follower.findOne({
    where: { followerId, userId },
  });
  if (existingFollower) {
    existingFollower.destroy();
    return res.status(201).json({
      status: "success",
      data: {
        message: "Unfollowed",
      },
    });
  }

  await Follower.create({
    followerId,
    userId,
  });

  return res.status(201).json({
    status: "success",
    data: {
      message: "Followed",
    },
  });
});

exports.checkFollower = catchAsync(async (req, res, next) => {
  const {
    user: { id: followerId },
    userId,
  } = req.body;

  const existingFollower = await Follower.findOne({
    where: { followerId, userId },
  });

  return res.status(201).json({
    status: "success",
    data: {
      follow: !!existingFollower,
    },
  });
});
