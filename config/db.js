const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("library_db", "postgres", "", {
//   host: "localhost",
//   dialect: "postgres",
// });

const sequelize = new Sequelize("postgres://fnbethehxrgjwi:e806c0ccec517359ddd9f5b446bbe229b4bd0f8a554b27fd17fa2271778a9588@ec2-54-172-175-251.compute-1.amazonaws.com:5432/dahngglaei1616", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const testConn = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (err) {
    console.log("Could not connect to the database", err);
    return false;
  }
};

module.exports = {
  testConn,
  sequelize,
};
