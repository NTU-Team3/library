const router = require("./routes");

const PORT = process.env.PORT || 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
