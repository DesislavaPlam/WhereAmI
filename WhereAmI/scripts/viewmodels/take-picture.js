var app = app || {};

app.viewmodels = app.viewmodels || {};

(function(scope) {
    var onSuccess = function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
        
    }
        
    var onFail = function onFail(message) {
        alert('Failed because: ' + message);
    }
    
    function init(e) {
        //debugger;
        var model = {
            addImage: function() {
                //debugger;
                var configuration = {
                    quality: 50,
                    destinationType: Camera.DestinationType.NATIVE_URL,
                    sourceType : Camera.PictureSourceType.CAMERA,
                    saveToPhotoAlbum: true
                };
            
                navigator.camera.getPicture(
                    onSuccess, onFail, configuration);
            },  
            getImage: function() {
                //debugger;
                var configuration = {
                    quality: 50,
                    destinationType: Camera.DestinationType.NATIVE_URL,
                    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
                    saveToPhotoAlbum: true
                };
                navigator.camera.getPicture(
                    onSuccess, onFail, configuration);
            }    
        }
        var vm = kendo.observable(model);
        
        kendo.bind(e.view.element, vm);
    }
    
    scope.takePicture = {
        title: "Where am I?",
        init: init
    };
}(app.viewmodels));