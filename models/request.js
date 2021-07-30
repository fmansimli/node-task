import { DataTypes, Model } from "sequelize";
import db from "../db/db";

class Request extends Model {}

Request.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    status: DataTypes.ENUM(["open", "generated"]),
    suppCode: DataTypes.STRING(3),
    suppName: DataTypes.STRING(100),
    materialName: DataTypes.STRING(100),
    materialSort: DataTypes.STRING(50),
    category: DataTypes.STRING(20),
    fullBatchQty: DataTypes.INTEGER,
    fullLabelsQty: DataTypes.INTEGER,
    lastBatchQty: DataTypes.INTEGER,
    lastLabelsQty: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Request",
    tableName: "Request",
  }
);

export default Request;
