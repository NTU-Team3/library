const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/history.controller");
const historyController = new HistoryController();

router.get("/member", (req, res) => {
  res.send("Welcome User!");
});

router.get("/member/history/:historyId", historyController.listHistory);

// import and instantiate cart controller
const CartController = require("../controllers/cart.controller");
const cartController = new CartController();

/*GET cart*/
router.get("/cart", (req, res) => {
  // res.render("cart", { pageTitle: "View Cart" });
  res.send("GET Request: cart route");
});

// router.get("/cart/addUser", cartController.addUser);

/*POST cart*/
router.get("/cart/addUser", cartController.addUser);

module.exports = router;
