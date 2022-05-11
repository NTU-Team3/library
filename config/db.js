const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://suvcqyykxtoool:6d1e81c21301965163175c411e79bcdc7a776200acc3fb82c7ca66a51e0aa0e1@ec2-54-172-175-251.compute-1.amazonaws.com:5432/ddlfmjblfrar1e",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

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
