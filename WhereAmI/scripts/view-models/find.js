var app = app || {};

app.viewmodels = app.viewmodels || {};

(function(scope) {
    function start() {
        function init(e) {
            alert('go');
            var model = {
                createGoogleMap: function() {
                    //alert('here');
                    var latlng;
                    getPosition(function(street, position) {
                        alert('sadasdsadasdas');
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
            }
            var vm = kendo.observable(model);
        
            kendo.bind(e.view.element, vm);
        }
    
        scope.initKendo = {
            initMaps: init
        };
    }
    
    google.maps.event.addDomListener(window, 'load', start);
    //document.addEventListener('deviceready', start, false);
}(app.viewmodels));