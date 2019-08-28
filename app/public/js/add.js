// Code here handles what happens when a user submits a new product on the form.
// Takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var product = $("#product").val().trim();

  if (name === "" || product === ""){
    alert("Please add your name and a product");
  }
  else {
  // make a product obj
  var newProduct = {
    name: $("#name").val().trim(),
    product: $("#product").val().trim(),
  };
  console.log(newProduct);

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newProduct)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      alert("Adding product...");
      
    });


}});