const { sequelize } = require("../config/db");
const Cart = require("../models/cart");
// connect to history Model
// const History = require("../models/history");
// connect to User model
const User = require("../models/user");
const Book = require("../models/book");
const { book } = require("./public.service");

module.exports = {
  viewCart: async () => {
    const results = {
      status: null,
      message: null,
      data: null,
    };

    const viewCart = await Cart.findAll(
      // KMS: need to link table relationship
      {
        include: [Book, User],
        order: [["id", "ASC"]],
      }
    );

    results.status = 200;
    results.message = "View cart in service layer";
    results.data = viewCart; //LMS : Note to change to viewCart
    console.log(results);
    return results;
  },

  addCart: async (bookIdentity, userIdentity) => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // Ensure Book and User exists
    // Connect to Book and User model
    const book = await Book.findByPk(bookIdentity);
    const user = await User.findByPk(userIdentity);

    // const cart = await Cart.findByPk(cartId); // KMS: cannot cartId because no argument for cartId

    // >>>>>>>>>>>>>>>>>>>>>> result.send(result); // KMS: error not a function

    // await Cart.sync({ alter: true });

    // // error handling
    const cart = await Cart.findOne({
      where: { bookId: bookIdentity, userId: userIdentity },
    });
    console.log("cart:", cart);
    // duplicated
    if (cart) {
      result.status = 404;
      result.message = `Cart already has book id ${bookIdentity} and user id ${userIdentity}`;
      return result;
    }

    // if(!book)
    // if (cart.userId !== userIdentity || cart.bookId !== bookIdentity) {
    //   result.status = 400;
    //   result.message;
    // }
    // >>>>>> KMS : Technically if no cart, it means it is a new item.
    // if (!cart) {
    //   console.log("not cart", cart);
    //   result.status = 404;
    //   result.message = `Could not find the cart with an id `;
    //   return result;
    // }

    // // if (cart.userId) {
    // //   result.status = 400;
    // //   result.message = `cart${cartId} already has the user`;
    // //   return result;
    // // }

    // >>>>>>>>>>>>>>>> KMS: tested in controller layer => when there is no value.
    // if (user == null) {
    //   result.status = 404;
    //   result.message = `Could not find the user with id ${userIdentity}`;
    //   return result;
    // }

    // if (book == null) {
    //   result.status = 404;
    //   result.message = `Could not find the book with id ${bookIdentity}`;
    //   return result;
    // }

    const addNewCart = await Cart.create({ bookId: bookIdentity, userId: userIdentity });
    console.log("add new cart", addNewCart);
    if (addNewCart.isNewRecord == "false") {
      result.status = 404;
      result.message = "Either userId or bookId does not exists in database";
      return result;
    }
    // update the cart with new userId
    // cart.bookId = book.id;
    // cart.userId = user.id;
    // await cart.save();

    result.status = 200;
    result.message = "Added user and book successfully in cart layer";
    result.data = addNewCart;
    console.log(result);
    return result;
  },
};
