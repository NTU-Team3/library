const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class Review extends Model {}

Review.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "rating",
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "comments",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_id",
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "book_id",
    },
  },
  // Model config
  {
    sequelize,
    modelName: "Review",
    tableName: "review",
  }
);

module.exports = Review;
