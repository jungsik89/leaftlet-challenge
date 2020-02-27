// function createMap(earthquakeData) {
  var myEQMAP = L.map("map", {
    center: [14.6,-28.7],
    zoom: 2,
  });
  // Create the tile layer that will be the background of our map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myEQMAP);



// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(map);

// Create a baseMaps object to hold the lightmap layer
// var baseMaps = {
//   "Light Map": lightmap
// };

// // Create an overlayMaps object to hold the bikeStations layer
// var overlayMaps = {
//   "Bike Stations": earthquakeData
// };

// Create the map object with options


// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map



function createMarkers(response) {

  // Pull the "stations" property off of response.data
  var stations = response.data.stations;

  // Initialize an array to hold bike markers
  var earthquakeMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < stations.length; index++) {
    var station = stations[index];

    // For each station, create a marker and bind a popup with the station's name
    var earthquakeMarkers = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "<h3>");

    // Add the marker to the bikeMarkers array
    earthquakeMarkers.push(earthquakeMarkers);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(earthquakeMarkers));
}
var startTime = ""

var queryUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson$(startTime)`

// console.log(queryUrl)

limitQuery = "40"

d3.json("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=40", function(data){

  console.log(data);
  var features = data.features;
  console.log(features)
  console.log(features[0].geometry.coordinates);
  //need coordinates, magnitute of the earthquake to map the size?
  //need the place name
  //and magnitutde number

  // coordinates = [[
  //   [104.99404, 39.75621],
  //   [56.99404, 39.75621],
  //   [83.99404, 39.75621]
  // ]]
  var coordinatesArray = []
  var magArray = []
  var placeArray = []




for (var i = 0; i < features.length; i++) {
  coordinatesArray.push([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
  magArray.push([features[i].properties.mag]);
  placeArray.push([features[i].properties.place]);
}

console.log(coordinatesArray);
console.log(magArray);
console.log(placeArray);
// //     var properties = feature[i].properties;
//       var geometry = features[i].geometry;

//       testArray.push([geometry.coordinates[1], geometry.coordinates[0]]);
//       console.log(testArray);  
// };
console.log(coordinatesArray[0])
for (var j = 0; j < coordinatesArray.length; j ++){
  for (var m = 0; m < magArray.length; m ++){
    console.log(magArray);
    console.log(coordinatesArray);
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "mag": magArray[m],
        "place": "",
        "popupContent": ""
    },
    "geometry": {
        "type": "Point",
        "coordinates": coordinatesArray[j]
    }
  };
  
  L.geoJSON(geojsonFeature, {
    onEachFeature: function(properties, l) {
        l.bindPopup(properties.mag)

    }



  }).addTo(myEQMAP);
  }
}

});

function getColor(d) {  
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

  //   
  //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
  //   }
  // }
  




// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);
