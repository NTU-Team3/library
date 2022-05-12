const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: "email",
    },
    password: {
      type: DataTypes.STRING(13),
      allowNull: false,
      field: "password",
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: "name",
    },
    noOfBook: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "no_of_book",
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
    modelName: "User",
    tableName: "user",
  }
);

module.exports = User;
