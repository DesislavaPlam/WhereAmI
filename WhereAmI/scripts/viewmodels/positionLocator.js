//define(function() {
 
//useLocation is callback function, which can use the location
var getPosition = (function() {
    function locateDevice(callback, position) {
        location.latitude = position.coords.latitude;
        location.longtitude = position.coords.longitude;
            
        var pos = {
            lat: location.latitude, 
            lng: location.longtitude
        };
        
        var geocoder = new google.maps.Geocoder();
        
        // Find out longitude and latitude
        geocoder.geocode({
                             'latLng' : pos
                         }, function(results, status) {
                             if (status === google.maps.GeocoderStatus.OK) {
                                 if (callback !== undefined) {
                                     callback('The location is' + results[0], pos);
                                 }
                             } else {
                                 navigator.notification.alert(currentLocation = 'Location unavailable. Please check internet connection', function() {
                                 }, 'Localization failed');
                             }
                         });
    }
    
    return function getPosition (callback) {
        navigator.geolocation.getCurrentPosition(function(position) {
            locateDevice(callback, position);
        }, function(err) {
            alert('Erorr occured in application');       
        });
    };
}());