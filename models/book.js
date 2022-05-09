const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class Book extends Model {}

Book.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "isbn",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "title",
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "author",
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "qty",
    },
    availQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "avail_qty",
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
    modelName: "Book",
    tableName: "Books",
  }
);

module.exports = Book;
