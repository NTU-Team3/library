const express = require("express");
const app = express();
const path = require("path");

const publicSerivce = require("../services/public.service");

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
const customers = []; //for testing
const books = [{ booktitle: "book", isbn: 9849108 }]; //for testing

//GET /general/vehicle
// Return all the vehicles including the association model: driver.
class PublicController {
  async book(req, res) {
    const { status, data, message } = await publicSerivce.book();
    res.status(status);
    res.json({ message, data });
  }

  // Home page
  getHomePage(req, res) {
    return res.render("home", { pageTitle: "Welcome to our Library!" });
  }

  getSearchResult(req, res) {
    const booktitle = req.query.booktitle;
    const found = books.find((book) => {
      return book.booktitle === booktitle;
    });
    console.log(found);
    return res.send(found);
  }
  // end-Home page

  // LoginSignup page
  getLoginSignup(req, res) {
    res.render("login_signup", { pageTitle: "Login/Sign Up" });
  }

  postLoginSignup(req, res) {
    const userInfo = req.body;
    const newUser = new User(
      userInfo.fullname,
      userInfo.email,
      userInfo.password
    );
    newUser.save();
    console.log(customers);
  }
  //End LoginSignup page
}

module.exports = PublicController;
