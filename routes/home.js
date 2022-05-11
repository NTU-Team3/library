const express = require("express");
const router = express.Router();

// Import libraries for handling HTTP errors
const createError = require("http-errors");

// import and instantiate cart controller
const CartController = require("../controllers/cart.controller");
const cartController = new CartController();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Welcome to our Library!" });
});

/*GET cart*/
router.get("/cart", (req, res) => {
  // res.render("cart", { pageTitle: "View Cart" });
  res.send("GET Request: cart route");
});

/*POST cart*/
router.post("/cart/addUser", cartController.addUser);

module.exports = router;
