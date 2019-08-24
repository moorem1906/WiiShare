// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Product" model that matches up with DB
var Product = sequelize.define("product", {
  name: Sequelize.STRING,
  product: Sequelize.STRING,
  city: Sequelize.STRING,
  zipCode: Sequelize.INTEGER
}, {
  freezeTableName: true
});

// Syncs with DB
Product.sync();

module.exports = Product;