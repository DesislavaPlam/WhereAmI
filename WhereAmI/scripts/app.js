/* global window, kendo, document, navigator, console,
alert
*/
(function () {
    'use strict';
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
                }
        }           
    };
    
    // function onGetCurrentPositionSuccess(position) {
    //   console.dir(position);
    // }

    // function onGetCurrentPositionError(error) {
    //   console.dir(error);
    // }

    ///function onFindConctactsSuccess(contacts) {
    //filter contacts
    //console.dir(contacts);
    //}

    document.addEventListener('deviceready', function () {
       
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {

                                               transition: 'slide',

                                               skin: 'flat',

                                               initial: 'views/home.html'
                                           });
    }, false);
}());