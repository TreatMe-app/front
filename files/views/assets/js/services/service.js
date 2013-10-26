/*
 * Service settings
 */
var DoctoraliaSettings = {
    "apiKey": "89dbbd84",
    "url": "https://api.doctoralia.com/v1"
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