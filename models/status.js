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
  },
  // Model config
  {
    sequelize,
    modelName: "status",
    tableName: "status",
  }
);

module.exports = Status;
