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

  function onFindConctactsSuccess(contacts) {
    //filter contacts
    console.dir(contacts);
  }

  document.addEventListener('deviceready', function () {
    var peshoIliGosho = navigator.contacts.create({
      displayName: 'Pesho ili Gosho',
      emails: [
        new ContactField('work', 'pesho@gosho.com', false),
        new ContactField('home', 'gosho@pesho.com', true)
      ]
    });

    peshoIliGosho.save(function () {
      var fields = [
        navigator.contacts.fieldType.displayName,
        navigator.contacts.fieldType.phoneNumbers,
        navigator.contacts.fieldType.emails
      ];

      var options = new ContactFindOptions();
      // options.filter = 'pesho@gosho.com';
      options.multiple = true;

      navigator.contacts.find(fields,
        onFindConctactsSuccess,
        onFindConctactsSuccess,
        options);

    });


    navigator.splashscreen.hide();

    app = new kendo.mobile.Application(document.body, {

      transition: 'slide',

      skin: 'flat',

      initial: 'views/home.html'
    });

  }, false);


}());