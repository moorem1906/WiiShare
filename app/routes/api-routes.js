//This file offers a set of routes for displaying and saving data to the db


// Dependencies
// =============================================================
var Product = require("../models/wiishare.js");

// Routes
// =============================================================
module.exports = function(app) {

  // If a user sends data to add a new product...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var product = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = product.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Product.create({
      routeName: routeName,
      name: product.name,
      product: product.product,
      city: product.city,
      zipCode: product.zipCode
    });

    res.status(204).end();
  });
};
