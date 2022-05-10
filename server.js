const router = require("./routes");

const PORT = 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
