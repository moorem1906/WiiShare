// Code here handles what happens when a user submits a new product on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#my-4").on("click", function(event) {
    event.preventDefault();
  
    // make a product obj
    var newUser = {
      name: $("#inputName").val().trim(),
      address: $("#inputAddress").val().trim(),
      email: $("#inputEmail").val().trim(),
      password: $("#inputPassword").val().trim(),
      zipCode: $("zipCode").val().trim()

    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newUser)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        alert("Adding product...");
        console.log(data);
        
      });
  
    // empty each input box by replacing the value with an empty string
    $("#inputName").val("");
    $("#inputAddress").val("");
    $("#inputEmail").val("");
    $("#inputPassword").val("");
    $("#zipCode").val("");
  
  });
  
  
  
  // when user clicks sign-up btn
  $("#my-4").on("click", function(event) {
    event.preventDefault();
  
  //make a user info obj
  var newUser = {
    userName: $("#inputName").val().trim(),
    address: $("#inputAddress").val().trim(),
  };
  
  console.log(newUser);
  
    // send an AJAX POST-request with jQuery
    $.post("/api/newUser", newUser)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        alert("Adding new user to db");
        console.log(data);
  
        $("#inputName").val("");
        $("#inputAddress").val("");
      });
    });x