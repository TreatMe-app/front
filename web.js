var express = require("express");
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/searchkey', function(request, response) {
    response.send({name:"Raymond",age:40});
});


function initGooglePlacesAPI(latitude, longitude, searchedKey){
	var position = new google.maps.LatLng(latitude, longitude);

	var request =  {
   	 location: position,
   	 radius: '500',
     types: [searchedKey]
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function buildResponse (resulsts){
	
}

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});