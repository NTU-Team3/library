const express = require("express");
const router = express.Router();
router.use(express.json()); // Enable express to parse JSON as request body.

const customers = [];

const User = class {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  save() {
    customers.push(this);
  }
};

router.get("/login_signup", (req, res) => {
  res.render("login_signup", { pageTitle: "Login/Sign Up" });
});

router.post("/login_signup", (req, res) => {
  const userInfo = req.body;
  const newUser = new User(
    userInfo.fullname,
    userInfo.email,
    userInfo.password
  );
  newUser.save();
  console.log(customers);
});

module.exports = router;
