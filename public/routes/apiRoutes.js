
// slack -- from Gabe 

var distance = require('google-distance-matrix');

var origin = ["7102 Roddy Ct Fort Washington MD 20744"];
var destinations = [" 950 N Glebe Rd Arlington VA"];
distance.key('AIzaSyCwIsGCqV8Xks5y90Vl0yVR2KlMi_W97eY');
distance.units('imperial');
distance.matrix(origin, destinations, function (err, distances) {
   if (!err)
      //  console.log(distances.rows[0].elements[0].distance.text);
       console.log(distances)
})








/*
var xhr = new XMLHttpRequest();
xhr.open('GET', distanceUrl);
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      plaintext = xhr.responseText;
      responseObject = JSON.parse(plaintext);
      console.log(plaintext); // 'This is the returned text.'
      console.log(responseObject) // Logs the parsed json object you can easily access properties, check the console which they are, assuming there is a property calculatedDistance you could access like:
      console.log(responseObject.calculatedDistance)
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};




// API key for the distance matrix
//   AIzaSyAtxzOJ8u8sETdxN04UEHxKp6GS35_nfD0


// function for 2 input boxes. 
$(function() {

  function calculateDistance(origin, destination) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
  }

  function callback(response, status) {
    if (status != google.maps.DistanceMatrixStatus.OK) {
      $('#result').html(err);
    } else {
      var origin = response.originAddresses[0];
      var destination = response.destinationAddresses[0];
      if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
        $('#result').html("" 
                          + origin + " and " + destination);
      } else {
        var distance = response.rows[0].elements[0].distance;
        var distance_value = distance.value;
        var distance_text = distance.text;
        var miles = distance_text.substring(0, distance_text.length - 3);
        $('#result').html("It is " + miles + " miles from " + origin + " to " + destination);
      }
    }
  }
    
  $('#distance_form').submit(function(e){
      event.preventDefault();
      var origin = $('#origin').val();
      var destination = $('#destination').val();
      var distance_text = calculateDistance(origin, destination);
  });
 
});



<!DOCTYPE html>
<html>
  <head>
    <title>Google Apps Script API Quickstart</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>Google Apps Script API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>

    <script type="text/javascript">
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '<YOUR_CLIENT_ID>';
      var API_KEY = '<YOUR_AIzaSyAtxzOJ8u8sETdxN04UEHxKp6GS35_nfD0>';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = 'https://www.googleapis.com/auth/script.projects';

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
//       function handleClientLoad() {
//         gapi.load('client:auth2', initClient);
//       }

//       /**
//        *  Initializes the API client library and sets up sign-in state
//        *  listeners.
//        */
//       function initClient() {
//         gapi.client.init({
//           apiKey: API_KEY,
//           clientId: CLIENT_ID,
//           discoveryDocs: DISCOVERY_DOCS,
//           scope: SCOPES
//         }).then(function () {
//           // Listen for sign-in state changes.
//           gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//           // Handle the initial sign-in state.
//           updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//           authorizeButton.onclick = handleAuthClick;
//           signoutButton.onclick = handleSignoutClick;
//         }, function(error) {
//           appendPre(JSON.stringify(error, null, 2));
//         });
//       }

//       /**
//        *  Called when the signed in status changes, to update the UI
//        *  appropriately. After a sign-in, the API is called.
//        */
//       function updateSigninStatus(isSignedIn) {
//         if (isSignedIn) {
//           authorizeButton.style.display = 'none';
//           signoutButton.style.display = 'block';
//           callAppsScript();
//         } else {
//           authorizeButton.style.display = 'block';
//           signoutButton.style.display = 'none';
//         }
//       }

//       /**
//        *  Sign in the user upon button click.
//        */
//       function handleAuthClick(event) {
//         gapi.auth2.getAuthInstance().signIn();
//       }

//       /**
//        *  Sign out the user upon button click.
//        */
//       function handleSignoutClick(event) {
//         gapi.auth2.getAuthInstance().signOut();
//       }

//       /**
//        * Append a pre element to the body containing the given message
//        * as its text node. Used to display the results of the API call.
//        *
//        * @param {string} message Text to be placed in pre element.
//        */
//       function appendPre(message) {
//         var pre = document.getElementById('content');
//         var textContent = document.createTextNode(message + '\n');
//         pre.appendChild(textContent);
//       }

//       /**
//        * Shows basic usage of the Apps Script API.
//        *
//        * Call the Apps Script API to create a new script project, upload files
//        * to the project, and log the script's URL to the user.
//        */
//       function callAppsScript() {
//         gapi.client.script.projects.create({
//           resource: {
//             title: 'My Script'
//           }
//         }).then((resp) => {
//           return gapi.client.script.projects.updateContent({
//             scriptId: resp.result.scriptId,
//             resource: {
//               files: [{
//                 name: 'hello',
//                 type: 'SERVER_JS',
//                 source: 'function helloWorld() {\n  console.log("Hello, world!");\n}'
//               }, {
//                 name: 'appsscript',
//                 type: 'JSON',
//                 source: "{\"timeZone\":\"America/New_York\",\"" +
//                    "exceptionLogging\":\"CLOUD\"}"
//               }]
//             }
//           });
//         }).then((resp) => {
//           let result = resp.result;
//           if (result.error) throw result.error;
//           console.log(`https://script.google.com/d/${result.scriptId}/edit`);
//         }).catch((error) => {
//           // The API encountered a problem.
//           return console.log(`The API returned an error: ${error}`);
//         });
//       }

//     </script>

//     <script async defer src="https://apis.google.com/js/api.js"
//       onload="this.onload=function(){};handleClientLoad()"
//       onreadystatechange="if (this.readyState === 'complete') this.onload()">
//     </script>
//   </body>
// </html>








// /*var origin1 = new google.maps.LatLng(38.939986, -77.081140);
// var origin2 = 'Washington, DC';
// var destinationA = 'The George Washington University'
// var destinationB = new google.maps.LatLng(38.899873, -77.048803);

// var service = new google.maps.DistanceMatrixService();
// service.getDistanceMatrix(
//   {
//     origins: [origin1, origin2],
//     destinations: [destinationA, destinationB],
//     travelMode: 'DRIVING',
//     transitOptions: TransitOptions,
//     drivingOptions: DrivingOptions,
//     unitSystem: UnitSystem,
//     avoidHighways: Boolean,
//     avoidTolls: Boolean,
//   }, callback);

// function callback(response, status) {
  
// }



// function callback(response, status) {
//     if (status == 'OK') {
//       var origins = response.originAddresses;
//       var destinations = response.destinationAddresses;
  
//       for (var i = 0; i < origins.length; i++) {
//         var results = response.rows[i].elements;
//         for (var j = 0; j < results.length; j++) {
//           var element = results[j];
//           var distance = element.distance.text;
//           var duration = element.duration.text;
//           var from = origins[i];
//           var to = destinations[j];
//         }
//       }
//     }
//   }
//   */