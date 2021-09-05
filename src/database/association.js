const Comment = require("../model/comment");
const Credential = require("../model/credential");
const Like = require("../model/like");
const Post = require("../model/post");
const User = require("../model/user");

User.hasOne(Credential, { foreignKey: { allowNull: false } });
Credential.belongsTo(User, { foreignKey: { allowNull: false } });

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
