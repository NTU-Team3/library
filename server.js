const router = require("./routes/");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", routes.index);

db.sequelize.sync().then(function () {
  http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
  });
});
