import { DataTypes, Model } from "sequelize";
import db from "../db/db";

import Request from "./request";

class Label extends Model {}

Label.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    requestId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        key: "id",
        model: Request,
      },
    },
    labelNo: DataTypes.STRING(16),
  },
  {
    sequelize: db,
    modelName: "Label",
    tableName: "Label",
  }
);

export default Label;
