const path = require("path"); // for static folder
const express = require("express");

const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.

// Set ejs
app.set("view engine", "ejs");
app.set("views", "views");
const PORT = 3000;

// Set path for static folder
app.use(express.static(path.join(__dirname, "public")));

// import route
const home = require("./routes/home"); // 3000/

// Get Routes
app.use(home);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
