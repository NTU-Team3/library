const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/history.controller");
const historyController = new HistoryController();

router.get("/member", (req, res) => {
  res.send("Welcome User!");
});

router.get("/member/history/:historyId", historyController.listHistory);

module.exports = router;
