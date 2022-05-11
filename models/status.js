const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class Status extends Model {}

Status.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "status_name",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  // Model config
  {
    sequelize,
    modelName: "Status",
    tableName: "status",
  }
);

module.exports = Status;
