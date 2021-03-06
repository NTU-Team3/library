const { sequelize } = require("../config/db");
const { DataTypes, Model } = require("sequelize");
const User = require("./user");
const Book = require("./book");

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
    bookId: {
      type: DataTypes.INTEGER,
      field: "book_id",
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
    tableName: "cart",
  }
);

// Create one-to-many associations

// one cart item belongs to one user
Cart.belongsTo(User, {
  foreignKey: "userId",
});
// one user has many cart items
User.hasMany(Cart, {
  foreignKey: "userId",
});

// one cart item belongs to one book
Cart.belongsTo(Book, {
  foreignKey: "bookId",
});

// one book belong to many cart items
Book.hasMany(Cart, {
  foreignKey: "bookId",
});

module.exports = Cart;
