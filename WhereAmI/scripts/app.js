/* global window, kendo, document, navigator, console,
alert
*/
(function () {
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
         
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {

                                               transition: 'slide',

                                               skin: 'flat',

                                               initial: 'views/home.html'
                                           });
    }

    document.addEventListener('deviceready', initGoogleMaps, false);
}());