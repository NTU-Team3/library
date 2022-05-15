const express = require("express");
const router = express.Router();

router.get("/member", (req, res) => {
  res.send(`You have called a member route. Welcome member!`);
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*

  /member/history - ROUTE STARTS 

*/

const HistoryController = require("../controllers/history.controller");
const historyController = new HistoryController();

// List histories based on userid, with association model 'Book'
router.get("/member/history/:userId", historyController.listHistory);

// Create new history record using userid and bookid
router.post("/member/history/create", historyController.createHistory);

// Update history using historyid, 'returnDate' will be populated/refreshed with current date
router.put("/member/history/update/:historyId", historyController.updateHistory);

/*

  /member/history - ROUTE ENDS 

*/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
