const express = require("express");
const router = express.Router();

// Import libraries for handling HTTP errors
const createError = require("http-errors");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Welcome to our Library!" });
});

module.exports = router;
