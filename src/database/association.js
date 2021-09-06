const Comment = require("../model/comment");
const Follower = require("../model/follower");
const Like = require("../model/like");
const Post = require("../model/post");
const User = require("../model/user");

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
