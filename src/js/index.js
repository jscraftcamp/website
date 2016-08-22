$( document ).ready(function(){
    $(".button-collapse").sideNav();

    if($('#map').length > 0) {
      initializeMap();
    }

    if($('#participants').length > 0) {
      initializeParticipants();
    }

});

/**
 * register handlebars list helper
 */
Handlebars.registerHelper('list', function(context, options) {
  var ret = "";
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }
  return ret;
});

/**
 * init participants list
 */
function initializeParticipants() {
  $.getJSON("/participants.json", function(data) {
    var items = [];
    var sum = 0;
    var sum_saturday = 0;
    var sum_sunday = 0;

    $.each(data, function(index, participant) {
      var source = $("#participant-template").html();
      var template = Handlebars.compile(source);
      var card = template(participant);
      items.push(card);
      sum++;
      if(participant.when.saturday) sum_saturday++;
      if(participant.when.sunday) sum_sunday++;
    });
    $("#participants").append(items.join(""));
    $("#sum").append(sum+" participants");
    $("#sum_saturday").append(sum_saturday+" participants on Saturday (max. 100)");
    $("#sum_sunday").append(sum_sunday+" participants on Sunday (max. 100)");
  });
}

/**
 * init google map
 */
function initializeMap() {
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
        },{
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

//google.maps.event.addDomListener(window, 'load', initializeMap);
