const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    dialect: "mssql",
    dialectOptions: {
      options: { encrypt: true, trustServerCertificate: true },
    },
    logging: false,
  }
);

module.exports = sequelize;
