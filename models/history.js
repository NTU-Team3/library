const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class History extends Model {}

History.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      // Will be FK
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    bookId: {
      // Will be FK
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "book_id",
    },
    borrowedDate: {
      type: DataTypes.DATE,
      field: "borrowed_date",
    },
    returnDate: {
      type: DataTypes.DATE,
      field: "return_date",
    },
  },
  // Model config
  {
    sequelize,
    modelName: "History",
    tableName: "history",
  }
);

module.exports = History;
