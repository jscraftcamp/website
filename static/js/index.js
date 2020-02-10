$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $(".dropdown-button-mobile").dropdown();
});



// handle Google Maps stuff
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(48.1, 11.546),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var styles = [
    {
      stylers: [
        { hue: "#2196f3" },
        { saturation: -50 }
      ]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var marker = new google.maps.Marker({
    position: {lat: 48.09702, lng: 11.5452},
    map: map
  });
}

typeof google != 'undefined'
  && google.maps.event.addDomListener(window, 'load', initialize);
