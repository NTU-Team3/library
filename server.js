const router = require("./routes/");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.json()); // Enable express to parse JSON as request body.
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

const PORT = process.env.PORT || 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
