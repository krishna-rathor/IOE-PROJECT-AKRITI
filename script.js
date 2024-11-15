// script.js

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    // Example: Add marker for a washroom
    var marker = new google.maps.Marker({
        position: {lat: -34.397, lng: 150.644},
        map: map,
        title: 'Nearby Washroom'
    });

    // You can add more markers for different shelters/washrooms
}

// Google Maps API script loading
window.onload = function() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key= &callback=initMap`;
    document.body.appendChild(script);
};

