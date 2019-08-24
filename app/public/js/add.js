// Code here handles what happens when a user submits a new product on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a product obj
  var newProduct = {
    name: $("#name").val().trim(),
    product: $("#product").val().trim(),
    city: $("#city").val().trim(),
    zipCode: $("#zipCode").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newProduct)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      alert("Adding product...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#product").val("");
  $("#city").val("");
  $("#zipCode").val("");

});

