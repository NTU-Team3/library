const router = require("./routes/");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
