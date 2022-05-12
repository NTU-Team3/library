const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);
app.use(express.json()); // Enable express to parse JSON as request body.
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", "views");

// Import libraries for handling HTTP errors
const createError = require("http-errors");

/* GET home page. */
const adminRoutes = require("./admin.routes");
const publicRoutes = require("./public.routes");
const secureRoutes = require("./secure.routes");
//const protectedRoutes = require("./protected.routes");

app.use(adminRoutes);
app.use(publicRoutes);
app.use(secureRoutes);

//app.use(protectedRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
});

module.exports = app;
const router = require(".");
