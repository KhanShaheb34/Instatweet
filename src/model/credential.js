const Sequelize = require("sequelize");
import { DataTypes } from "sequelize/types";
import sequelize from "../database/connection";

export const Credential = sequelize.define("credential", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(15),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
});
