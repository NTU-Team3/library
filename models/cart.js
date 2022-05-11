const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");

class Cart extends Model {}

Cart.init(
  // column config
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // promoCode: {
    //   type: DataTypes.STRING(32),
    //   allowNull: false,
    //   field: "promotion_code",
    // },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
    },
    historyId: {
      type: DataTypes.INTEGER,
      field: "history_id",
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
    modelName: "Cart",
    tableName: "carts",
  }
);

module.exports = Cart;
