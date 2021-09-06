const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Comment = sequelize.define("comment", {
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

module.exports = Comment;
