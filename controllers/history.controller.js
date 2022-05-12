const historyService = require("../services/history.service");

class HistoryController {
  // This is a class, which has methods 'createHistory', 'updateHistory' , 'listHistory'

  /*
   'createHistory' - CONTROLLER
  */
  async createHistory(req, res) {
    const { userId, bookId } = req.body;

    if (isNaN(Number(userId)) || isNaN(Number(bookId))) {
      res.status(400);
      return res.send(`History Validation (createHistory) - User Id and/or Book Id need to be integers.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.createHistory(userId, bookId);

    res.status(status);

    res.json({ message, data });
  }

  /*
   'updateHistory' - CONTROLLER
  */

  /*
   'listHistory' - CONTROLLER
  */
  async listHistory(req, res) {
    const userId = req.params.userId;

    if (isNaN(Number(userId))) {
      res.status(400);
      return res.send(`History Validation (listHistory) - User id needs to be an integer.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.listHistory(userId);

    res.status(status);

    res.json({ message, data });
  }
}

module.exports = HistoryController;
