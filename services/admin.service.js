const { sequelize } = require("../config/db");

const Book = require("../models/book");
const User = require("../models/user");
const Reservation = require("../models/reservation");
const Status = require("../models/status");

module.exports = {
  //
  setup: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    /* create table Book */
    await Book.sync({ alter: true });
    await Reservation.sync({ alter: true });
    await Status.sync({ alter: true });
    /* insert bulk records into Book table */
    const newBooks = await Book.bulkCreate([
      {
        isbn: "9780141439600",
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        qty: 2,
        availQty: 2,
      },
      {
        isbn: "9788845292613",
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        qty: 3,
        availQty: 3,
      },
      {
        isbn: "9781932429237",
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        qty: 1,
        availQty: 1,
      },
      {
        isbn: "9780830878024",
        title: "The Greco-Roman World of the New Testament Era",
        author: "James S. Jeffers",
        qty: 1,
        availQty: 1,
      },
    ]);

    console.log("Creating User table");
    /* Create User table */
    await User.sync({ alter: true });

    console.log("Bulk insert users");
    /* Bulk insert records into User table */
    const newUsers = await User.bulkCreate([
      {
        email: "help@gmail.com",
        password: "LittleLamp",
        name: "Charles Dickens",
        noOfBook: 0,
      },
      {
        email: "craxy@hotmail.com",
        password: "Max%imum1",
        name: "Code Hunter",
        noOfBook: 0,
      },
      {
        email: "in@gmail.com",
        password: "@ttle00Lamp",
        name: "Bookworms",
        noOfBook: 0,
      },
      {
        email: "speed@gmail.com",
        password: "@ct0ber",
        name: "Secret User",
        noOfBook: 0,
      },
    ]);
    // error handling
    if (!newBooks) {
      result.status = 404;
      result.message = `Book list is empty`;
      return result;
    } else {
      result.status = 200;
      result.message = "List of books:";
      result.data = newBooks;
      return result;
    }

    // error handling
    if (!newUsers) {
      result.status = 404;
      result.message = `User list is empty`;
      return result;
    } else {
      result.status = 200;
      result.message = "List of Users:";
      result.data = newUsers;
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
