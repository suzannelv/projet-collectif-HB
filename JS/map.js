let map;
let markers = [];
let currentMarkerIndex = -1; // Initialise à -1 pour que le premier clic active le premier marqueur

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.8584, lng: 2.2945},
        zoom: 13
    });

    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            let lat = this.dataset.latitude;
            let lng = this.dataset.longitude;
            let latLng = new google.maps.LatLng(lat, lng);

            if (currentMarkerIndex !== -1) {
                markers[currentMarkerIndex].setMap(null);
            }

            currentMarkerIndex = parseInt(this.alt.replace('image', '')) - 1;
            let marker = new google.maps.Marker({
                position: latLng,
                map: map
            });

            map.setCenter(latLng);

            let contentString = '<div><strong>' + nom + ' ' + prenom + '</strong><br>' +
                'Age: ' + age + '</div>';

            let infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            markers[currentMarkerIndex] = marker;
        });
    }
}