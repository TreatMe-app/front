
var positionArray = [
{"lng" : 2.34202119999998, "lat" : 48.8632985, "title" : "Centre de santé Louvre" , "adresse":"15, rue du Louvre 75001 Paris"},
{"lng" : 2.34280660000002, "lat" : 48.8510191, "title" : "Centre Médical Saint Michel", "adresse":"22, boulevard Saint Michel 75006 Paris"},
{"lng" : 2.35723610000002, "lat" : 48.8645303, "title" : "Centre de santé Au Maire Volta", "adresse":"4, rue Au Maire 75003 Paris"},
{"lng" : 2.37131999999997, "lat" : 48.843191,  "title" : "Centre médical et dentaire mutualiste", "adresse":"62, quai de la Rapée 75012 Paris"},
{"lng" : 2.32959230000006, "lat" : 48.8476079, "title" : "Institut Arthur Vernes", "adresse":"36, rue d'Assas	75006 Paris"},
{"lat" :48.8672522       , "lng" :2.34786110000005   ,"title" : "Centre de Santé Dentaire Réaumur", "adresse":"106, rue Réaumur 75002 Paris"},	
{"lat" :48.8643567       , "lng" :2.35082220000004,   "title" : "Centre de santé René Laborie", "adresse":""},
{"lat":48.8415095, "lng" :	2.35138110000003, "title" : "Centre de santé de l'Epée de Bois", "adresse":""},
{"lat" :48.850729, "lng":	2.34636449999994, "title" : "UTMIF Centre Dentaire Saint Germain", "adresse":""},
{"lat" :  48.8720189, "lng" : 2.33987879999995   ,"title":"Centre de santé Haussmann", "adresse":""},	
{"lat" :48.8719264, "lng" :	2.32820760000004,"title":"Centre médical et dentaire Opéra", "adresse":""}	
];

var marker = new google.maps.Marker();
var professional = new google.maps.Marker();

var markerArray = [];

var infowindow = new google.maps.InfoWindow();

var geocoder = new google.maps.Geocoder();
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer({markerOptions :{visible:false}});

var trafficLayer = new google.maps.TrafficLayer();
var bikeLayer = new google.maps.BicyclingLayer();
var transitLayer = new google.maps.TransitLayer();


// Fonction qui permet d'effectuer de la géolocalisation inversée (reverse geocoding)
// partir des coordonnées celle-ci retourne l'adresse lisible et compréhensible
// pour l'utilisateur
// paramètres ???	   
function getReverseGeocoding(latlng, map, marker, text) 
{	
   
   
  geocoder.geocode({'location': latlng}
                   ,  function(results, status)
				   {
					if (status == google.maps.GeocoderStatus.OK) 
					{
					  if (results.length != 0) 
					  {
                          text += "<span><b> "+results[0].formatted_address+"</b></span>";
					    infowindow.setMap(null);
						infowindow.setContent(text);
						infowindow.setPosition(latlng);
						infowindow.open(map, marker);	
					  } 
					  else 
					  {
						alert('No results found');
					  }
					} 
					else 
					{
					  alert('Geocoder failed due to: ' + status);
					}
				   });
}

function displayDirection(origin, destination, map, travelMode)
{
    
    var request = {
        origin: origin,
        destination: destination,
        travelMode: travelMode
    };
    
    directionsService.route(request, function(response, status)
   {
    directionsDisplay.setMap(map);
      if (status == google.maps.DirectionsStatus.OK) 
      {
        directionsDisplay.setDirections(response);
          //alert("duration : " +response.routes[0].legs[0].duration.text+" - distance : "+response.routes[0].legs[0].distance.text);
      } 
       else 
       {
        alert("Directions query unsuccessful. Response status: " + status);
       }
    });    
}

function createMarker(arrayData, arrayStore, icon)
{    
    //arrayStore = [];
    for (var i = 0; i < arrayData.length; i++) 
    {
        var mk = new google.maps.Marker({
            position: new google.maps.LatLng(arrayData[i].lat,arrayData[i].lng),
            title : arrayData[i].title,
            //draggable : true,
            name : arrayData[i].title,
            //adresse : arrayData[i].adresse,
            icon: icon,
            //animation : google.maps.Animation.DROP
        });
        arrayStore.push(mk);	
    }    
}; 

 // Fonction qui ajoute les différents markers (overlays) sur la carte 
 // & y attache un évènement de type 'onclick'
 // Lors de cette action la carte est recentrée sur le marker sélectionné
function showMarker(arrayPush, map)
{ 
    for (var i = 0; i < arrayPush.length; i++) 
    {   
        //arrayPush[i].setMap(null);
        arrayPush[i].setMap(map.gmap);
        google.maps.event.addListener(arrayPush[i], 'click', function(e) {
            map.gmap.setZoom(13);
            map.gmap.setCenter(e.latLng);	
            getReverseGeocoding(e.latLng, map.gmap, this, ""); 
        });	
    }
 };
  

function toggleBounce(marker) 
{ 
    if (marker.getAnimation() != null) 
    {     
      marker.setAnimation(null);   
    } 
    else 
    {     
      marker.setAnimation(google.maps.Animation.BOUNCE);   
    } 
}; 
