const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("library_db", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
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
