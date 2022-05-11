const express = require("express");
const app = express();
const path = require("path");
app.use(express.json()); // Enable express to parse JSON as request body.
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", "views");

// Import libraries for handling HTTP errors
const createError = require("http-errors");

// app.get("/", (req, res) => {
//   let info = {};
//   info.message = "Welcome to our Library!";
//   res.json(info);
// });

/* GET home page. */
const adminRoutes = require("./admin.routes");
const publicRoutes = require("./public.routes");
//const protectedRoutes = require("./protected.routes");
const cartRoutes = require("./home");

app.use(adminRoutes);
app.use(publicRoutes);
app.use(cartRoutes);
//app.use(protectedRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.json(createError(404));
});

module.exports = app;
const router = require(".");
