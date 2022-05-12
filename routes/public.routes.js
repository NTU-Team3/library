// Import
const PublicController = require("../controllers/public.controller");
// Instantiate the class
const publicController = new PublicController();

const express = require("express");
const router = express.Router();

const createError = require("http-errors");

/* Home page routes*/
router.get("/", publicController.getHomePage);
router.get("/booksearch/:booktitle", publicController.getSearchResult);
/* -End- Home page  */

/* Login or signup page routes*/
router.get("/login_signup", publicController.getLoginSignup);
router.post("/login_signup", publicController.postLoginSignup);

//router.post("/login_signup", publicController.postLoginSignup);

router.get("/public/book", publicController.book);

module.exports = router;
