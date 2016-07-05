// handle Google Maps stuff
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(48.1, 11.546),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: {lat: 48.09702, lng: 11.5452},
        map: map
        });
}

google.maps.event.addDomListener(window, 'load', initialize);
