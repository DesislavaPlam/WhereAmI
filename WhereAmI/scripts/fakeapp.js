/* global window, kendo, document, navigator
 */


/////require(['positionLocator'], function(locatePosition) {
'use strict';
console.log('hi');
function initGoogleMaps () {
    var app;
    window.APP = {
        models: {
            home: {
                    title: 'Where am I?'
                },
            settings: {
                    title: 'Settings'
                },
            find: {
                    title: 'Where am I?'
                }
        },
        getCurrentLocation: 'lala'//getPosstion(
    }
         
    app = new kendo.mobile.Application(document.body, {

                                           transition: 'slide',

                                           skin: 'flat',

                                           initial: 'views/find.html'
    
                                       });
    
    // CALLBACKS WTF WTF SRSLY SAY NOT TO JS
    function create() {
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
            alert(document);
            var div = document.getElementById("map");
            alert('BeforeMap');
            var map = new google.maps.Map(div,
                                          myOptions);
            console.log(street); 
        });
    }
    //alert('here');
    document.addEventListener('deviceready', create, false);
}

//initGoogleMaps();
document.addEventListener('deviceready', initGoogleMaps, false);
//DOES FUCKIN MAGIC PLS EXPLAIN WAT
//
//google.maps.event.addDomListener(window, 'load', initGoogleMaps);
//document.addEventListener('deviceready', getPosstion, false);
//google.maps.event.addDomListener(window, 'load', getPosstion);
/////});