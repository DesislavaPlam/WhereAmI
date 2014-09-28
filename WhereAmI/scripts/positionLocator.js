//define(function() {
    
//Returns string:
//the whole street name
//Gospodi SHTO PRAISH TEI
var getPosition = function (useLocation) {
    function startSearch() {
        navigator.geolocation.getCurrentPosition(function(position) {
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
                                 if (status == google.maps.GeocoderStatus.OK) {
                                     useLocation('The location is' + results[0], pos);
                                 } else {
                                     navigator.notification.alert(currentLocation = 'Location unavailable. Please check internet connection', function() {
                                     }, 'Localization failed')
                                 }
                             });
        }, function(err) {
            alert('Erorr occured in application');       
        });
    }
    
    startSearch();
    //document.addEventListener('deviceready', startSearch, false);
};
//});