const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://uhqdsudkciqmvs:2413fa624382501afa1b87a73ec7f1f9326d71b3405b2de47af91a88486ab0f0@ec2-34-231-177-125.compute-1.amazonaws.com:5432/d7tq6hhv1akuff",
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
