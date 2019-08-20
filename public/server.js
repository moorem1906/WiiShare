$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        //This section creates the wiiShare request fgbn ,
    var newwiiShare  = {
        wiiShare_name: $("#newwiiShare").val().trim(), product: 0
    };

    $.ajax("/api/wiiShare", {
        type: "POST",
        data: newwiiShare
    }).then(function () {
        console.log("Wii Share");
        location.reload();
      });
    });

    $(".wiiShare").on("click", function(event){
        event.preventDefault();
//This sets the devoured to True

        var id = $(this).data("id");
        var productState = {
            product: 1

            //PUT request .then reload the page
        };
        $.ajax("api/wiiShare" + id, {
            type: "PUT",
            data:  productState,
        }).then(function(){
            console.log("wiiShare posted");
            location.reload();
        });
    });
    $(".trashwhiiShare").on("click", function(evet){
        event.preventDefault();

        var id = $(this).data("id");
        //Sends the DELETE request 

        $.ajax({
            type:"DELETE",
            url: "api/wiiShare" + id 

        }).then(location.reload());
    });


   
});