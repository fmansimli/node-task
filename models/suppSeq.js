import { DataTypes, Model } from "sequelize";
import db from "../db/db";

class SuppSeq extends Model {}

SuppSeq.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    year: DataTypes.INTEGER,
    suppCode: DataTypes.STRING(3),
    seq: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "SuppSeq",
    tableName: "SuppSeq",
  }
);

export default SuppSeq;
