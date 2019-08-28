// when user clicks add-btn
$("#my-4").on("click", function (event) {
  event.preventDefault();


    var name = $("#inputName").val().trim();
    var address = $("#inputAddress").val().trim();
    var email = $("#inputEmail").val().trim();
    var password = $("#inputPassword").val().trim();
  // make a product obj
  if (name === "" || address === "" || email === "" || password === "") {
    alert("You're missing information");
      }
  else {
    var newUser = {
      userName: $("#inputName").val().trim(),
      address: $("#inputAddress").val().trim(),
      email: $("#inputEmail").val().trim(),
      password: $("#inputPassword").val().trim(),
    };
    console.log(newUser);

    // send an AJAX POST-request with jQuery
    $.post("/api/newUser", newUser)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        alert("Creating new user account");

      });

    window.location.assign("/all");
  }});

