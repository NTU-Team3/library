require("dotenv").config();
const { Sequelize } = require("sequelize");
const db = process.env.DATABASE_URL || "http://localhost:3000/";

const sequelize = new Sequelize(db, {
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
