const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const Like = require("../models/likeModel");

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Like,
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  return res.json({ status: "success", data: posts });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    content,
  } = req.body;

  const newPost = await Post.create({
    content,
    userId,
  });

  const responsePost = await Post.findOne({
    where: { id: newPost.id },
    include: [
      {
        model: User,
      },
      {
        model: Like,
      },
    ],
  });

  res.status(201).json({ status: "success", data: responsePost });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
  } = req.body;
  const { id } = req.params;

  const post = await Post.destroy({
    where: { id, userId },
  });

  res
    .status(201)
    .json({ status: "success", data: { message: "Post Deleted" } });
});
