// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import the environment variables (to prevent sensitive info from being uploaded)
require('dotenv').config();

// create connection to the      database, using your username, password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;