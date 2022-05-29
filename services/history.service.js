const History = require("../models/history");
const User = require("../models/user");
const Book = require("../models/book");

module.exports = {
  // Exporting an object, with methods 'listHistory', 'createHistory', 'updateHistory'

  /*
   'listHistory' - SERVICE
  */

  listHistory: async (userId) => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // Do these with models
    const getUser = await User.findByPk(userId);
    const getHistory = await History.findAll({ where: { user_id: userId }, include: Book, order: [["id", "ASC"]] });

    if (!getUser) {
      result.status = 404;
      result.message = `History - service (listHistory) / (NOT SUCCESSFUL) - User '${userId}' does not exist in database.`;
      return result;
    }

    if (JSON.stringify(getHistory) === "[]") {
      result.status = 404;
      result.message = `History - service (listHistory) / (NOT SUCCESSFUL) - There is no associated book history for user '${getUser.name} - ${getUser.email}'.`;
      return result;
    }

    result.status = 200;
    result.message = `History - service (listHistory) / (SUCCESSFUL) - For user '${getUser.name}' with email '${getUser.email}'.`;
    result.data = getHistory;

    return result;
  },

  /*
   'createHistory' - SERVICE
  */
  createHistory: async (userId, bookId) => {
    // Gets userId, bookId from controller
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // Does findByPk() with Models
    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);

    if (!user) {
      result.status = 404;
      result.message = `History - service (createHistory) / (NOT SUCCESSFUL) - 'No records with userId '${userId}' exists.`;
      return result;
    }

    if (!book) {
      result.status = 404;
      result.message = `History - service (createHistory) / (NOT SUCCESSFUL) - No records with bookId '${bookId}' exists.`;
      return result;
    }

    // Create new entry
    const createHistory = await History.create({
      userId: userId,
      bookId: bookId,
      borrowedDate: new Date(),
    });

    result.status = 200;
    result.message = `History - service (createHistory) / (SUCCESSFUL) - For userId '${userId}' and bookId '${bookId}'.`;
    result.data = createHistory;

    return result;
  },

  /*
   'updateHistory' - SERVICE
  */
  updateHistory: async (historyId) => {
    // Gets userId, bookId from controller
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // Does findByPk() with Models
    const getHistory = await History.findByPk(historyId);

    if (!getHistory) {
      result.status = 404;
      result.message = `History - service (updateHistory) / (NOT SUCCESSFUL) - No records with historyId '${historyId}' exists.`;
      return result;
    }

    // Updates only 'returnDate' and saves it into database
    getHistory.set({
      returnDate: new Date(),
    });
    await getHistory.save();

    result.status = 200;
    result.message = `History - service (updateHistory) / (SUCCESSFUL) - For historyId '${historyId}' with userId '${getHistory.userId}' and bookId '${getHistory.bookId}'.`;
    result.data = getHistory;

    return result;
  },
};
