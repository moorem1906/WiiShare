//Click The Request Button to create a product request
$("#my-5").on("click", function (event) {
  event.preventDefault();

// Code here handles how the page displays all of the products
// It pings the server. The server then pings the database and displays all of the products.

// make a get request to our api to grab every product
$.get("/api", function(data) {

  // for each product that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "product-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our product data to the well we just placed on the page

    // make the name an h2,
    $("#product-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the role an h3,
    $("#product-well-" + i).append("<h3>Product: " + data[i].product + "</h4>");
    // the age an h3,
    $("#product-well-" + i).append("<h3>City: " + data[i].city + "</h4>");
    // and the forcepoints an h3.
    $("#product-well-" + i).append("<h3>Zip Code: " + data[i].zipCode + "</h4>");
  }
});
