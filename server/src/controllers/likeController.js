const Like = require("../models/likeModel");
const catchAsync = require("../utils/catchAsync");

exports.createLike = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    postId,
  } = req.body;

  const existingLike = await Like.findOne({ where: { userId, postId } });
  if (existingLike) {
    existingLike.destroy();
    return res.status(201).json({
      status: "success",
      data: {
        message: "Disliked",
      },
    });
  }

  const newLike = await Like.create({
    userId,
    postId,
  });

  return res.status(201).json({
    status: "success",
    data: {
      message: "Liked",
    },
  });
});
