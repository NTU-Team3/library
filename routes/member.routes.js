const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/history.controller");
const historyController = new HistoryController();

router.get("/member", (req, res) => {
  res.send(`You have called a member route. Welcome member!`);
});

// Create history record using userid and bookid
// router.post("/member/history/create", historyController.createHistory);

// // Update history using userid
// router.put("/member/history/update/:userId", historyController.updateHistory);

// List history based on userid
router.get("/member/history/:userId", historyController.listHistory);

// import and instantiate cart controller
const CartController = require("../controllers/cart.controller");
const cartController = new CartController();

/*GET cart*/
router.get("/member/cart", cartController.viewCart);
// KMS >>>> Callback function not required, provided async in controller layer
// res.render("cart", { pageTitle: "View Cart" });
// res.send("GET Request: cart route");
// });

// router.get("/cart/addUser", cartController.addUser);

/*POST cart*/
// KMS: change to post
router.post("/member/cart/addCart", cartController.addCart);

module.exports = router;
