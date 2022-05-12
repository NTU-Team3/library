// const History = require("../models/history");
// const User = require("../models/user");
// const Book = require("../models/book");

// module.exports = {
//   // Exporting an object, with methods 'createHistory', 'updateHistory' , 'listHistory'

//   /*
//    'createHistory' - CONTROLLER
//   */
//   createHistory: async (userId, bookId) => {
//     // Gets userId, bookId from controller

//     const borrowDate = new Date();
//     const fborrowDate = borrowDate.toISOString().slice(0, 19).replace("T", " ");

//     console.log(userId);
//     console.log(bookId);
    

//     const result = {
//       status: null,
//       message: null,
//       data: null,
//     };

//     // Does findByPk() with Models
//     const user = await User.findByPk(userId);
//     const book = await Book.findByPk(bookId);

//     if (!user) {
//       result.status = 404;
//       result.message = `History DB Insertion (createHistory) / (NOT successful) - 'No records with userId ${userId}' exists.`;
//       return result;
//     }

//     if (!book) {
//       result.status = 404;
//       result.message = `History DB Insertion (createHistory) / (NOT successful) - No records with bookId '${bookId}' exists.`;
//       return result;
//     }

//     // history.userId = userId;
//     // history.bookId = bookId;
//     // history.borrowDate = fborrowDate; 
//     // await history.save(); // save changes made on the line above

//     result.status = 200;
//     result.message = `History DB Insertion (createHistory) / (Successful) - For userId '${userId}' and bookId '${bookId}'.`;
//     result.data = t;

//     return result;
//   }
// },

//   /*
//    'updateHistory' - SERVICE
//   */

//   /*
//    'listHistory' - SERVICE
//   */
//   listHistory: async (userId) => {
//     const result = {
//       status: null,
//       message: null,
//       data: null,
//     };

//     // Do these with models
//     const getUser = await User.findByPk(userId);
//     const getHistory = await History.findAll({ where: { user_id: userId } });

//     if (!getUser) {
//       result.status = 404;
//       result.message = `History DB Query (listHistory) / (NOT successful) - User '${userId}' does not exist in database.`;
//       return result;
//     }

//     if (JSON.stringify(getHistory) === "[]") {
//       result.status = 404;
//       result.message = `History DB Query (listHistory) / (NOT successful) - There is no associated book history for user '${getUser.name} - ${getUser.email}'.`;
//       return result;
//     }

//     result.status = 200;
//     result.message = `History DB Query (listHistory) / (Successful) - For user '${getUser.name}' with email '${getUser.email}'.`;
//     result.data = getHistory;

//     return result;
//   }