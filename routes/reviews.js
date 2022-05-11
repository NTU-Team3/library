const express = require("express");
const router = express.Router();

// Import libraries for handling HTTP errors
const createError = require("http-errors");

// POST comments
router.post("/books/:id/comments", (req, res) => {
  res.send("Comment is posted.");
});
// POST Ratings
router.get("/books/:id/ratings", (req, res) => {
  res.send("Book is rated.");
});

module.exports = router;
