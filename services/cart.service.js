const Carts = require("../models/cart");
// connect to history Model
// const History = require("../models/history");
// connect to User model
const User = require("../models/user");

module.exports = {
  addUser: async (cartId, userId) => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    const cart = await Cart.findByPk(cartId);
    // connect to history Model
    // const history = await History.findByPk(historyId);
    // connect to User model
    const user = await User.findByPk(userId);

    // error handling
    if (!cart) {
      result.status = 404;
      result.message = `Could not find the cart with id ${cartId}`;
      return result;
    }

    if (cart.userId) {
      result.status = 400;
      result.message = `cart${cartId} already has the user`;
      return result;
    }

    if (!user) {
      result.status = 404;
      result.message = `Could not find the user with id ${userId}`;
      return result;
    }

    // update the cart with new userId
    cart.userId = user.id;
    await cart.save();

    result.status = 200;
    result.message = "Added user successfully";
    result.data = cart;

    return result;
  },

  //   addHistory: async () => {
  //     const result = {
  //       status: null,
  //       message: null,
  //       data: null,
  //     };

  //     const cart = await Cart.findByPk(cartId);
  //     // connect to history Model
  //     const history = await History.findByPk(historyId);

  //     // error handling
  //     if (!cart) {
  //       result.status = 404;
  //       result.message = `Could not find the cart with id ${cartId}`;
  //       return result;
  //     }

  //     if (cart.historyId) {
  //       result.status = 400;
  //       result.message = `cart${cartId} already has the user`;
  //       return result;
  //     }

  //     if (!history) {
  //       result.status = 404;
  //       result.message = `Could not find the history with id ${historyId}`;
  //       return result;
  //     }

  //     // update the cart with new userId
  //     cart.historyId = user.id;
  //     await cart.save();

  //     result.status = 200;
  //     result.message = "Added history transaction successfully";
  //     result.data = cart;

  //     return result;
  //   },
};
