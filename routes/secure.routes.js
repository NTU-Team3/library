const express = require("express");
const router = express.Router();
const SecureController = require("../controllers/secure.controller");

const secureController = new SecureController();
router.get("/login", secureController.getLogin);
router.post("/login", secureController.postLogin);

router.get("/verified", secureController.verifyCheck, (req, res) => {
  res.render("verified", {
    pageTitle: "verified",
    path: "/verified",
  });
});
module.exports = router;
