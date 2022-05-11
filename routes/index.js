const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.

// Import libraries for handling HTTP errors
const createError = require("http-errors");

app.get("/", (req, res) => {
  let info = {};
  info.message = "Welcome to our Library!";
  res.json(info);
});

const adminRoutes = require("./admin.routes");
const publicRoutes = require("./public.routes");
const memberRoutes = require("./member.routes");
const cartRoutes = require("./home");

app.use(adminRoutes);
app.use(publicRoutes);
app.use(memberRoutes);
app.use(cartRoutes);

//const protectedRoutes = require("./protected.routes");
//app.use(protectedRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.json(createError(404));
});

module.exports = app;
