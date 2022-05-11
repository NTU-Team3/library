//const { sequelize } = require("../config/db");

const Book = require("../models/book");

module.exports = {
  // Return all the books.
  book: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    //const isExist = Book.findAll();

    console.log("Value of the Book", Book);
    if (!Book) {
      result.status = 404;
      result.message = `The database has not been setup. Run setup to create all the tables.`;
      return result;
    }

    const books = await Book.findAll({
      order: [["title", "ASC"]],
    });

    // error handling
    if (!books) {
      result.status = 404;
      result.message = `The library is empty`;
      return result;
    }

    result.status = 200;
    result.message = "List of books in the library:";
    result.data = books;

    return result;
  },
};
