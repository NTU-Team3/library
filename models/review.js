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
      type: DataTypes.STRING,
      allowNull: false,
      field: "rating",
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "your comments",
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "user",
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "book title",
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
