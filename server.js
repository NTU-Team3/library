const path = require("path"); // for static folder
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
app.use(bodyParser.urlencoded({ extended: false }));

// Set ejs
app.set("view engine", "ejs");
app.set("views", "views");
const PORT = 3000;

// Set path for static folder
app.use(express.static(path.join(__dirname, "public")));

// import route
const home = require("./routes/home"); // 3000/root
const login_signup = require("./routes/login_signup"); // 3000/root

// Get Routes
app.use(home);
app.use(login_signup);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
