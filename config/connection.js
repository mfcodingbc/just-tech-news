// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import the environment variables (to prevent sensitive info from being uploaded)
require('dotenv').config();

// create connection to the      database, using your username, password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'My$QLP@55w0rd', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;