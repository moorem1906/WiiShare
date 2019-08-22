$("#submitBtn").on("click", function(event) {
    event.preventDefault();
  
    var newProduct = {

      name: $("#productName").val().trim(),

      address: $("#address").val().trim(),

      city: $("#city").val().trim(),

      state: $("#state").val().trim(),

      country: $("#country").val().trim(),

      zip: $("#zip").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/basic", newProduct)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);

        alert("Adding product...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#role").val("");
    $("#age").val("");
    $("#force-points").val("");
  
  });
  