const { Op } = require("sequelize");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const res = require("express/lib/response");
const { checkPrime } = require("crypto");
const { nextTick } = require("process");

//Generate token with the above data.
const privateKey = fs.readFileSync(
  path.join(__dirname, "..", "config", "jwtRS256.key")
);

//-end

module.exports = {
  authUser: async (username, password) => {
    //for login
    const result = {
      status: null,
      message: null,
      data: null,
      token: null,
    };
    console.log("verifying");
    console.log(username);
    console.log(password);
    if (username && password) {
      const user = await User.findOne({
        where: {
          email: username,
        },
      });
      if (user) {
        const password_valid = await bcrypt.compare(password, user.password);
        if (password_valid) {
          const loginData = {
            accountId: user.id,
          };
          const token = jwt.sign(loginData, privateKey, {
            algorithm: "RS256",
            expiresIn: "1h",
          });
          return token;
        } else {
          console.log("Username or Password Incorrect");
        }
      } else {
        console.log("Username or Password Incorrect");
      }
    }
    return result;
  },

  verifyCheck: async (token, next) => {
    const result = {
      status: null,
      message: null,
      data: null,
    };
    try {
      console.log("...verifying token");
      jwt.verify(
        token,
        privateKey,
        { algorithms: ["RS256"] },
        function (err, decoded) {
          if (err) {
            console.error(err); // The token will fail is it expires.
            return;
          }

          console.log(decoded); // You get the decrypted data.
        }
      );
      next();
    } catch (error) {
      result.status = 401;
      result.message = "Auth failed";
      return result;
    }
  }, // check jwt token
};
