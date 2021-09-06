const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Follower = sequelize.define("follower", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

module.exports = Follower;
