const express = require("express");
const app = express();
const path = require("path");
const adminService = require("../services/admin.service");
const publicSerivce = require("../services/public.service");

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
    return res.render("home", {
      pageTitle: "Welcome to our Library!",
      path: "/",
    });
  }

  async getSearchResult(req, res) {
    const booktitle = req.query.booktitle;
    const { status, data, message } = await publicSerivce.findBookByTitle(
      booktitle
    );
    res.status(status);
    res.json({ message, data });
  }
  // end-Home page

  // LoginSignup page
  getLoginSignup(req, res) {
    res.render("login_signup", {
      pageTitle: "Login/Sign Up",
      path: "/login_signup",
    });
  }

  async postLoginSignup(req, res) {
    const { fullname, email, psw } = req.body;
    await adminService.register(fullname, email, psw);
    res.redirect("/");
  }
  //End LoginSignup page
}

module.exports = PublicController;
