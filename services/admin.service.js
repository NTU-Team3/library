const { sequelize } = require("../config/db");

const Book = require("../models/book");
const User = require("../models/user");
const History = require("../models/history");

module.exports = {
  //
  setup: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    // /* create table Book */
    // await Book.sync({ alter: true });

    // /* insert bulk records into Book table */
    // const newBooks = await Book.bulkCreate([
    //   {
    //     isbn: "9780141439600",
    //     title: "A Tale of Two Cities",
    //     author: "Charles Dickens",
    //     qty: 2,
    //     availQty: 2,
    //   },
    //   {
    //     isbn: "9788845292613",
    //     title: "The Lord of the Rings",
    //     author: "J.R.R. Tolkien",
    //     qty: 3,
    //     availQty: 3,
    //   },
    //   {
    //     isbn: "9781932429237",
    //     title: "Think and Grow Rich",
    //     author: "Napoleon Hill",
    //     qty: 1,
    //     availQty: 1,
    //   },
    //   {
    //     isbn: "9780830878024",
    //     title: "The Greco-Roman World of the New Testament Era",
    //     author: "James S. Jeffers",
    //     qty: 1,
    //     availQty: 1,
    //   },
    // ]);

    // console.log("Creating User table");
    // /* Create User table */
    // await User.sync({ alter: true });

    // console.log("Bulk insert users");
    // /* Bulk insert records into User table */
    // const newUsers = await User.bulkCreate([
    //   {
    //     email: "help@gmail.com",
    //     password: "LittleLamp",
    //     name: "Charles Dickens",
    //     noOfBook: 0,
    //   },
    //   {
    //     email: "craxy@hotmail.com",
    //     password: "Max%imum1",
    //     name: "Code Hunter",
    //     noOfBook: 0,
    //   },
    //   {
    //     email: "in@gmail.com",
    //     password: "@ttle00Lamp",
    //     name: "Bookworms",
    //     noOfBook: 0,
    //   },
    //   {
    //     email: "speed@gmail.com",
    //     password: "@ct0ber",
    //     name: "Secret User",
    //     noOfBook: 0,
    //   },
    // ]);

    console.log("Creating History table");
    /* Create History table */
    await History.sync({ alter: true });

    console.log("Bulk insert histories");
    /* Bulk insert records into History table */
    const newHistories = await History.bulkCreate([
      {
        userId: 1111,
        bookId: 12,
        borrowedDate: "2022-01-01 11:11:11",
        returnDate: "2022-01-10 11:11:11",
      },
      {
        userId: 2222,
        bookId: 13,
        borrowedDate: "2022-02-01 12:22:22",
        returnDate: "2022-02-10 12:22:22",
      },
      {
        userId: 3333,
        bookId: 14,
        borrowedDate: "2022-03-01 13:33:33",
        returnDate: "2022-03-10 13:33:33",
      },
      {
        userId: 4444,
        bookId: 15,
        borrowedDate: "2022-04-01 14:44:44",
        returnDate: "2022-04-10 14:44:44",
      },
    ]);

    // // error handling
    // if (!newBooks) {
    //   result.status = 404;
    //   result.message = `Book list is empty`;
    //   return result;
    // } else {
    //   result.status = 200;
    //   result.message = "List of books:";
    //   result.data = newBooks;
    //   return result;
    // }

    // // error handling
    // if (!newUsers) {
    //   result.status = 404;
    //   result.message = `User list is empty`;
    //   return result;
    // } else {
    //   result.status = 200;
    //   result.message = "List of Users:";
    //   result.data = newUsers;
    //   return result;
    // }

    // error handling
    if (!newHistories) {
      result.status = 404;
      result.message = `History list is empty`;
      return result;
    } else {
      result.status = 200;
      result.message = "List of Histories:";
      result.data = newHistories;
      return result;
    }
  },

  reset: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };
    // drop all tables in the database
    const isSuccess = sequelize.drop();

    // error handling
    if (!isSuccess) {
      result.status = 404;
      result.message = `Failed to reset database`;
      return result;
    } else {
      result.status = 200;
      result.message = "Database has been reset!";
      result.data = null;
      return result;
    }
    //const users = await User.destroy();
  },
};
