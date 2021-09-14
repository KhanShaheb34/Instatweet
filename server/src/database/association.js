const Comment = require("../models/commentModel");
const Follower = require("../models/followerModel");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");
const User = require("../models/userModel");

User.hasMany(Follower, { foreignKey: "followerId" });
User.hasMany(Follower, { foreignKey: "userId" });
Follower.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
});
Follower.belongsTo(User, {
  foreignKey: { name: "followerId", allowNull: false },
});

User.hasMany(Post);
Post.belongsTo(User, { foreignKey: { allowNull: false } });

User.hasMany(Comment);
Comment.belongsTo(User, { foreignKey: { allowNull: false } });

User.hasMany(Like);
Like.belongsTo(User, { foreignKey: { allowNull: false } });

Post.hasMany(Comment);
Comment.belongsTo(Post, { foreignKey: { allowNull: false } });

Post.hasMany(Like);
Like.belongsTo(Post, { foreignKey: { allowNull: false } });
