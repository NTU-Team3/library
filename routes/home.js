const express = require("express");
const router = express.Router();

// Import libraries for handling HTTP errors
const createError = require("http-errors");

// import and instantiate cart controller
const CartController = require("../controllers/cart.controller");
const cartController = new CartController();

/*GET cart*/
router.get("/cart", (req, res) => {
  // res.render("cart", { pageTitle: "View Cart" });
  res.send("GET Request: cart route");
});

// router.get("/cart/addCart", (req, res) => {
//   // res.render("cart", { pageTitle: "View Cart" });
//   res.send("GET Request: add cart");
// });

// router.get("/cart/addUser", (req, res) => {
//   res.send(await )
// }
// cartController.addUser);

/*POST cart*/
router.post("/cart/addCart", cartController.addCart);
// res.send("posted");
// >>>>>>>>>>>>>>>>>>>>>>>>>> KMS: cannot use GET ROUTE & POST ROUTE on same end point = YARC cannot work

module.exports = router;
