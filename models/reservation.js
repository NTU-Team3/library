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
      field: "book_id",
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "book_id",
    },
  },
  // Model config
  {
    sequelize,
    modelName: "reservation",
    tableName: "reservation",
  }
);

module.exports = Reservation;
