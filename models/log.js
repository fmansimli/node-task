import { DataTypes, Model } from "sequelize";
import db from "../db/db";

class Log extends Model {}

Log.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    message: DataTypes.TEXT,
    severity: {
      type: DataTypes.ENUM(["danger", "warning", "info"]),
      defaultValue: "warning",
    },

    url: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "Log",
    tableName: "Log",
  }
);

export default Log;
