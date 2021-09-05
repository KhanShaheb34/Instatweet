const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
