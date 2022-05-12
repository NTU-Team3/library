const express = require("express");

// Import
const ReviewController = require("../controllers/review.controller");
// Instantiate the class
const reviewController = new ReviewController();

// Import libraries for handling HTTP errors
// const createError = require("http-errors");
const router = express.Router();
// POST comments
// router.get("/review", (req, res) => {
//   res.send("Review is under public.");
// let info = {};
// info.message = "You have reviews";
// res.json(info);
// });
// GET reviews
router.get("/review", reviewController.listReview);

module.exports = router;
