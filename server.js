const router = require("./routes/");
const express = require("express");
const app = express();

app.get("/", routes.index);

const PORT = process.env.PORT || 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
