function initMap(){
  var options = {
    center: {lat: 37.7749, lang: -122.4194},
    zoom: 8
  }
  map = new google.maps.Map(document.getElementById("map"), options);
}