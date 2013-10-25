
var marker = new google.maps.Marker();
var geocoder = new google.maps.Geocoder();

// Fonction qui permet d'effectuer de la géolocalisation inversée (reverse geocoding)
// partir des coordonnées celle-ci retourne l'adresse lisible et compréhensible
// pour l'utilisateur
// paramètres ???	   
function getReverseGeocoding(latlng, map, marker, text) 
{	
   
  var infowindow = new google.maps.InfoWindow(); 
  geocoder.geocode({'location': latlng}
                   ,  function(results, status)
				   {
					if (status == google.maps.GeocoderStatus.OK) 
					{
					  if (results.length != 0) 
					  {
                          text += "<span><b> I'm here : "+results[0].formatted_address+"</b></span>";
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