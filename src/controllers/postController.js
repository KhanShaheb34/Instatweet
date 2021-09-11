const Post = require("../models/postModel");
const User = require("../models/UserModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll();
  return res.json(posts);
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
  console.log(newPost);
  res.status(201).json(newPost);
});
