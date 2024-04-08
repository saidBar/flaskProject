let map;
let featureLayer;
async function initMap() {
  const {Map} = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: {lat: 41.1472, lng: 28.7844},
    zoom: 10,// Adjust the zoom level as needed
    mapId: "a449062d42e614ea"
  });
  featureLayer = map.getFeatureLayer("ADMINISTRATIVE_AREA_LEVEL_1");

  const featureStyleOptions = {
    strokeColor: "#353535",
    strokeOpacity: 1.0,
    strokeWeight: 3.0,
    fillColor: "transparent",
    fillOpacity: 0,
  };

  featureLayer.style = (options) => {
    if (options.feature.placeId == "ChIJexVgWlG2yhQR6B1akfSarCI") {
      return featureStyleOptions;
    }
  };
}

initMap().then(r => initMap());
