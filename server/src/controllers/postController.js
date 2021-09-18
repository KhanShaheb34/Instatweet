const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/UserModel");
const Like = require("../models/likeModel");

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      {
        model: Comment,
        include: [{ model: User }],
      },
      {
        model: Like,
      },
      {
        model: User,
      },
    ],
  });

  return res.json({ status: "success", data: posts });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    content,
  } = req.body;

  console.log(userId);

  const newPost = await Post.create({
    content,
    userId,
  });
  res.status(201).json({ status: "success", data: newPost });
});
