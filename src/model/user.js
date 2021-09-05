const Sequelize = require("sequelize");
import { DataTypes } from "sequelize/types";
import sequelize from "../database/connection";

export const User = sequelize.define("user", {
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
});
