/**
 * Created by goldenmelon on 04.09.15.
 */
var customMapType = new google.maps.StyledMapType([
    {
        stylers: [
            {hue: '#7AC142'},
            {visibility: 'simplified'},
            {gamma: 0.5},
            {weight: 0.5}
        ]
    },
    {
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
    },
    {
        featureType: 'water',
        stylers: [{color: '#7AC142'}]
    }
], {
    name: 'Повесма'
});

var customMapTypeId = 'custom_style';

var ourCoords =  {
    latitude: 55.6701906,
    longitude: 37.7742348
};

function initMap() {
    var customMapType = new google.maps.StyledMapType([
        {
            stylers: [
                {hue: '#890000'},
                {visibility: 'simplified'},
                {gamma: 0.5},
                {weight: 1}
            ]
        },
        {
            elementType: 'labels',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'water',
            stylers: [{color: '#890000'}]
        }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 40.674, lng: -73.946},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}

window.onload = function() {
    showMap(ourCoords);
};
function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude,
        coords.longitude);
    var mapOptions = {
        zoom: 15,
        center: googleLatAndLong,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        },
        panControl: false,
        zoomControl: false,
        scaleControl: true
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    // add the user marker
    var title = "ООО ПОВЕСМА";
    var content = "<h3>ООО &laquo;ПОВЕСМА&raquo;</h3>Россия, 109559, г. Москва, ул. Цимлянская, д. 3, стр. 1";
    addMarker(map, googleLatAndLong, title, content);

}

function addMarker(map, latlong, title, content) {
    var image = 'images/markernew.png';

    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true,
        icon: image
    };
    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: content,
        position: latlong
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map);
    });
}