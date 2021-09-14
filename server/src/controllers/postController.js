const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/UserModel");
const Like = require("../models/likeModel");
const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "content"],
        include: [{ model: User, attributes: ["id", "username"] }],
      },
      {
        model: Like,
        attributes: ["id"],
      },
    ],
  });

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
  res.status(201).json(newPost);
});
