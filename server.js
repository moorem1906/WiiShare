var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




// $(function(){

//     $(".create-form").on("submit", function(event){
//         event.preventDefault();

//         //This section creates the wiiShare request fgbn ,
//     var newwiiShare  = {
//         wiiShare_name: $("#newwiiShare").val().trim(), product: 0
//     };

//     $.ajax("/api/wiiShare", {
//         type: "POST",
//         data: newwiiShare
//     }).then(function () {
//         console.log("Wii Share");
//         location.reload();
//       });
//     });

//     $(".wiiShare").on("click", function(event){
//         event.preventDefault();
// //This sets the devoured to True

//         var id = $(this).data("id");
//         var productState = {
//             product: 1

//             //PUT request .then reload the page
//         };
//         $.ajax("api/wiiShare" + id, {
//             type: "PUT",
//             data:  productState,
//         }).then(function(){
//             console.log("wiiShare posted");
//             location.reload();
//         });
//     });
//     $(".trashwhiiShare").on("click", function(evet){
//         event.preventDefault();

//         var id = $(this).data("id");
//         //Sends the DELETE request 

//         $.ajax({
//             type:"DELETE",
//             url: "api/wiiShare" + id 

//         }).then(location.reload());
//     });


// });