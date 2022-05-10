const { user } = require("pg/lib/defaults");
const cartSerivce = require("../services/cart.service");

class CartController {
  async addUser(req, res) {
    // req.body: is from express.
    const { userId, cartId } = req.body;

    if (typeof userId !== "number" || typeof cartId !== "number") {
      res.status(400);
      return res.send("User Id and cart Id needs to be integers!");
    }

    // We use our cart service
    const { status, data, message } = await cartService.addUser(cartId, userId);
    // we deconstruct above because we have an object

    res.status(status);
    // return results from service layer

    // we send the message.
    res.json({ message, data });
  }
}

module.exports = CartController;
