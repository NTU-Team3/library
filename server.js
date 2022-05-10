const router = require("./routes");

const PORT = 5000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
