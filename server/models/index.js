const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
const Item = require("./Item")

// const Sauce = sequelize.define("sauces", {
//   name: Sequelize.STRING,
//   image: Sequelize.STRING,
// });


module.exports = {
  db: sequelize,
  Item,
};
