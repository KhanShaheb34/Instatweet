const { User, Credential, Post, Comment, Like } = require("../model");

User.hasOne(Credential, { foreignKey: { allowNull: false } });
Credential.belongsTo(User, { foreignKey: { allowNull: false } });

User.hasMany(Post);
Post.belongsTo(User, { foreignKey: { allowNull: false } });

Post.hasMany(Comment);
Comment.belongsTo(Post, { foreignKey: { allowNull: false } });

Post.hasMany(Like);
Like.belongsTo(Post, { foreignKey: { allowNull: false } });

Comment.hasMany(Like);
Like.belongsTo(Comment, { foreignKey: { allowNull: false } });
