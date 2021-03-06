const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Like = sequelize.define("like", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Like;
