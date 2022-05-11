const History = require("../models/history");

module.exports = {
  // Exporting an object, with methods 'listHistory'

  listHistory: async (historyId) => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // Do these with models
    const getHistory = await History.findByPk(historyId);

    if (!getHistory) {
      result.status = 404;
      result.message = `Couldnt get any listed history.`;
      return result;
    }

    result.status = 200;
    result.message = `History Details for ${historyId}`;
    result.data = getHistory;

    return result;
  },
};
