//This file offers a set of routes for displaying and saving data to the db

var express = require("express");
// Dependencies
// =============================================================
// var Product = require("../modelsold/wiishare.js.js");

db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

  // If a user sends data to add a new product...
  app.post("/api/new", function(req, res) {
    // Take the request...

     db.Product.create({
       name: req.body.name,
       product: req.body.product,
       city: req.body.city,
       zipCode: req.body.zipCode
       
    }).then(function(product) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(product);
    });
  })

  app.post("/api/newUser", function(req, res) {
    // Take the request...
    console.log(req.body);
     db.Users.create({
       name: req.body.userName,
       address: req.body.address,
       
    }).then(function(users) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(users);
    });
  })
}