const Comment = require("../models/commentModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.findAll();
  return res.json(comments);
});

exports.createComment = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    postId,
    content,
  } = req.body;

  console.log(userId, postId);

  const newComment = await Comment.create({
    content,
    userId,
    postId,
  });

  res.status(201).json(newComment);
});
