// const { user } = require("pg/lib/defaults");
const Cart = require("../models/cart");
const cartService = require("../services/cart.service");

class CartController {
  async addCart(req, res) {
    //Test
    // const newTable = await Cart.sync({ alter: true });
    // if (newTable == null) {
    //   console.log("table is Null", newTable);
    // }

    // const { status, data, message } = await cartService.addCart();
    // res.status(status);
    // res.json({ message, data });

    // req.body: is from express.

    const { userId, bookId } = req.body;
    // >>>>> KMS: test for input being empty/ not a number
    if (typeof userId !== "number" || typeof bookId !== "number") {
      res.status(400);
      return res.send(`User Id : ${userId} and book Id : ${bookId} needs to be integers!`);
    }

    // res.send("added user");
    // We use our cart service
    const { status, data, message } = await cartService.addCart(bookId, userId);
    // // we deconstruct above because we have an object
    res.status(status);
    // // return results from service layer
    // // we send the message.
    res.json({ message, data });
  }
}

module.exports = CartController;

// if (userId.isEmpty() || bookId.isEmpty()) {
//   res.status(400);
//   return res.send("Do not leave blank for either field");
// }
