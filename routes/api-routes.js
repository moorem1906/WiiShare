// Dependencies
// =============================================================
var newProduct = require("../models/wiiShare");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
//   app.get("/api/:characters?", function(req, res) {
//     if (req.params.characters) {
//       // Display the JSON for ONLY that character.
//       // (Note how we're using the ORM here to run our searches)
//       Character.findOne({
//         where: {
//           routeName: req.params.characters
//         }
//       }).then(function(result) {
//         return res.json(result);
//       });
//     } else {
//       Character.findAll().then(function(result) {
//         return res.json(result);
//       });
//     }
//   });

  // If a user sends data to add a new product...
  app.post("/", function(req, res) {
    // Take the request...
    var product = req.body;

    // Create a routeName
  
    var routeName = product.name.replace(/\s+/g, "").toLowerCase();

    // Then add the product to the database using sequelize
    newProduct.create({
      routeName: routeName,
      name: newProduct.name,
      address: newProduct.address,
      city: newProduct.city,
      state: newProduct.state,
      country: newProduct.country,
      zip: newProduct.zip
    });

    res.status(204).end();
  });
};