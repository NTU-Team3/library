const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class Reservation extends Model {}

Reservation.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "book_id",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "status_id",
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
    modelName: "Reservation",
    tableName: "reservation",
  }
);

module.exports = Reservation;
