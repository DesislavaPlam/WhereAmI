/* global window, kendo, document, navigator
 */


/////require(['positionLocator'], function(locatePosition) {
'use strict';
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
    
    // CALLBACKS WTF WTF SRSLY 
    document.addEventListener('deviceready', create, false);
}

document.addEventListener('deviceready', initGoogleMaps, false);
//google.maps.event.addDomListener(window, 'load', initGoogleMaps);
//document.addEventListener('deviceready', getPosstion, false);
//google.maps.event.addDomListener(window, 'load', getPosstion);
/////});