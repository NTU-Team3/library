const express = require("express");

// Import
const PublicController = require("../controllers/public.controller");
// Instantiate the class
const publicController = new PublicController();

const router = express.Router();

router.get("/public", (req, res) => {
  let info = {};
  info.message = "You have called a public route!";
  res.json(info);
  //return res.send("You have called a public route");
});
//GET /general/book
// Return all the books .

router.get("/public/book", publicController.book);

module.exports = router;
