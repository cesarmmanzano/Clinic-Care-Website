let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: -22.8502119, lng: -47.0624987 },
    zoom: 19,
  });

  map = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: -22.896491, lng: -47.0462158 },
    zoom: 19,
  });

  map = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: -22.8786726, lng: -47.0590897 },
    zoom: 18,
  });

  map = new google.maps.Map(document.getElementById("map4"), {
    center: { lat: -22.8406149, lng: -47.0519793},
    zoom: 18,
  });
}