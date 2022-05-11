const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const path = require("path");
app.use(express.json()); // Enable express to parse JSON as request body.
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

/* GET home page. */
const adminRoutes = require("./routes/admin.routes");
const publicRoutes = require("./routes/public.routes");
//const protectedRoutes = require("./protected.routes");

app.use(adminRoutes);
app.use(publicRoutes);
//app.use(protectedRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.json(createError(404));
});

module.exports = app;
const router = require(".");

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
