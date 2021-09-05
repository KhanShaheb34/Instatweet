const Sequelize = require("sequelize");
import { DataTypes } from "sequelize/types";
import sequelize from "../database/connection";

export const Comment = sequelize.define("comment", {
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
