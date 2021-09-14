const Follower = require("../models/followerModel");
const catchAsync = require("../utils/catchAsync");

exports.createFollower = catchAsync(async (req, res, next) => {
  const {
    user: { id: followerId },
    userId,
  } = req.body;

  if (followerId === userId)
    return res.status(400).json({
      isSuccess: false,
      data: { message: "You can't follow yourself" },
    });

  const existingFollower = await Follower.findOne({
    where: { followerId, userId },
  });
  if (existingFollower) {
    existingFollower.destroy();
    return res.status(201).json({
      isSuccess: true,
      data: {
        message: "Unfollowed",
      },
    });
  }

  const newFollower = await Follower.create({
    followerId,
    userId,
  });

  return res.status(201).json({
    isSuccess: true,
    data: {
      follower: newFollower,
    },
  });
});
