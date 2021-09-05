const Sequelize = require("sequelize");
import { DataTypes } from "sequelize/types";
import sequelize from "../database/connection";

export const Like = sequelize.define("like", {
  id: {
    type: DataTypes.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
  },
});
