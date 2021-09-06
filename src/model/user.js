const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
  bio: {
    type: DataTypes.STRING(250),
  },
  name: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  username: {
    type: DataTypes.STRING(15),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
