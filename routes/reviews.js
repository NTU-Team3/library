const express = require("express");
const res = require("express/lib/response");

// Import
const ReviewController = require("../controllers/review.controller");
const Review = require("../models/review");
// Instantiate the class
const reviewController = new ReviewController();
const router = express.Router();

router.get("/review", reviewController.listReview);
router.post("/review", (req, rep) => {
  res.json(Review);
  Review.push(json.parse(reviewController.listReview));
  console.log(Review);
});

// router.post("/review", (req, res) => {
//   const userInfo = req.body;
//   const newUser = new User(userInfo.fullname, userInfo.email, userInfo.password);
//   newUser.save();
//   console.log(customers);
// });

module.exports = router;
