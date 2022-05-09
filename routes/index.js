const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.

// Import libraries for handling HTTP errors
const createError = require("http-errors");

/* GET home page. */
app.get("/", (req, res) => {
  let info = {};
  info.message = "Welcome to our Library!";
  res.json(info);
});

module.exports = app;
