const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Like = sequelize.define("like", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

module.exports = Like;
