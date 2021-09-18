const Comment = require("../models/commentModel");
const User = require("../models/UserModel");
const catchAsync = require("../utils/catchAsync");

exports.getPostComments = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const comments = await Comment.findAll({
    where: { postId: id },
    include: { model: User, attributes: ["username"] },
  });

  return res.json({ status: "success", data: comments });
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

  const responseComment = await Comment.findOne({
    where: { id: newComment.id },
    include: { model: User, attributes: ["username"] },
  });

  res.status(201).json({ status: "success", data: responseComment });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const {
    user: { id: userId },
  } = req.body;

  const comment = await Comment.destroy({
    where: { id, userId },
  });

  return res.json({ status: "success", data: { message: "Comment Deleted" } });
});
