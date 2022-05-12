const express = require("express");

// Import
const PublicController = require("../controllers/public.controller");
// Instantiate the class
const publicController = new PublicController();

const ReviewController = require("../controllers/review.controller");
// Instantiate the class
const reviewController = new ReviewController();

const router = express.Router();

router.get("/public", (req, res) => {
  let info = {};
  info.message = "You have called a public route!";
  res.json(info);
  //return res.send("You have called a public route");
});
//GET /general/book
// Return all the books .

router.get("/public/book", publicController.book);
router.get("/public/review", reviewController.listReview);

module.exports = router;
