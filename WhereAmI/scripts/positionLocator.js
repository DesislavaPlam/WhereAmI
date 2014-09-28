//define(function() {
    
//Returns string:
//the whole street name
//Gospodi SHTO PRAISH TEI
var getPosition = function (useLocation) {
    function startSearch() {
        navigator.geolocation.getCurrentPosition(function(position) {
            location.latitude = position.coords.latitude;
            location.longtitude = position.coords.longitude;
            console.log('hi');
            var pos = {
                lat: location.latitude, 
                lng: location.longtitude
            };
            //alert('boom');
            var geocoder = new google.maps.Geocoder();
            //alert('boom');
            ///alert('here');
            // Find out longitude and latitude
            geocoder.geocode({
                                 'latLng' : pos
                             }, function(results, status) {
                                 if (status == google.maps.GeocoderStatus.OK) {
                                     useLocation('The location is' + results[0], pos);
                                 } else {
                                     alert(currentLocation = 'Location unavailable. Status: ' + status);
                                 }
                             });
        });
    }
    
    startSearch();
    //document.addEventListener('deviceready', startSearch, false);
};
//});