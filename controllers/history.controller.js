const historyService = require("../services/history.service");

class HistoryController {
  // This is a class, which has methods 'listHistory', 'createHistory', 'updateHistory'

  /*
   'listHistory' - CONTROLLER
  */
  async listHistory(req, res) {
    const userId = req.params.userId;

    if (isNaN(Number(userId))) {
      res.status(400);
      return res.send(`History - controller (listHistory) - User Id needs to be an integer.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.listHistory(userId);

    res.status(status);

    res.json({ message, data });
  }

  /*
   'createHistory' - CONTROLLER
  */
  async createHistory(req, res) {
    const { userId, bookId } = req.body;

    if (typeof userId !== "number" || typeof bookId !== "number") {
      res.status(400);
      return res.send(`History - controller (createHistory) - User Id and/or Book Id need to be integers.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.createHistory(userId, bookId);

    res.status(status);

    res.json({ message, data });
  }

  /*
   'updateHistory' - CONTROLLER
  */

  async updateHistory(req, res) {
    const historyId = req.params.historyId;

    if (isNaN(Number(historyId))) {
      res.status(400);
      return res.send(`History  - controller (updateHistory) - History Id needs to be an integer.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.updateHistory(historyId);

    res.status(status);

    res.json({ message, data });
  }
}

module.exports = HistoryController;
