var app = app || {};

app.viewmodels = app.viewmodels || {};

(function(scope) {
    function createMap() {
        getPosition(function(street, position) {
            latlng = position;
            var myOptions = {
                zoom: 18,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var div = document.getElementById("map");

            var map = new google.maps.Map(div,
                                          myOptions);
            console.log(street);
        });
    }

    function bindMapCreationToKendo(e) {
        var model = {
            createGoogleMap: createMap
        }
        var vm = kendo.observable(model);
        
        kendo.bind(e.view.element, vm);
    }
    
    google.maps.event.addDomListener(window, 'load', function() {
        scope.initKendo = {
            initMaps: bindMapCreationToKendo
        };
    });
}(app.viewmodels));