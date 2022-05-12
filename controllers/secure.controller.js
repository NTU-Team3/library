const secureService = require("../services/secure.service");

class SecureController {
  getLogin(req, res) {
    return res.render("login", {
      path: "/login",
      pageTitle: "Login",
    });
  }

  async postLogin(req, res) {
    const { uname, psw } = req.body;
    const token = await secureService.authUser(uname, psw);

    console.log(token);
    req.session.token = token;
    res.redirect("/");
  }

  async verifyCheck(req, res, next) {
    //checking JWT
    let headers = {};
    await secureService.verifyCheck(req.body.token, next);
  }
}

module.exports = SecureController;
