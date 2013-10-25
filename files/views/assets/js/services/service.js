/*
 * Service settings
 */
var DoctoraliaSettings = {
    "apiKey": "89dbbd84",
    "url": "https://api.doctoralia.com/v1"
}
var GoogleMapsAutocompleteSettings = {
    "output": "json",
    "sensor": "true",
    "key": "AIzaSyCoX1wNDyuj2Sf2OTdQEb8oD3c5KvGhg1s",
    "components": "components=country:fr",
    "offset": "3",
    "radius": "1000"
}

/*
 * Services
 */

var PlacesAutocomplete = new Appery.RestService({
    'url': 'https://maps.googleapis.com/maps/api/place/autocomplete/json?',
    'dataType': 'json',
    'type': 'get',
});
var GeolocationService = new Appery.GeolocationService({});

var Doctoralia = new Appery.RestService({
    'url': '{url}/{country}/specialities?apiKey={apiKey}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': DoctoraliaSettings
});