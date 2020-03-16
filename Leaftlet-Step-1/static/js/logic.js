var link = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=40";


var cityMarkerss = [[48.8566, 2.3522],
                [45.7640, 4.8357]];

var cityLayer = L.layerGroup(cityMarkerss);

// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [46.2276, 2.2137],
  zoom: 6,
  layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);






function getColor(magnitude){
  switch (magnitude) {
    case (magnitude < 1):
      return "yellow";
    case (magnitude < 2):
      return "red";
    case (magnitude < 3):
      return "orange";
    case (magnitude < 4):
      return "green";
    case (magnitude < 5):
      return "purple";
    default:
      return "pink";
    }
};


// Grabbing our GeoJSON data..

    // Style each feature (in this case a neighborhood)
    
  

    // Called on each feature
    // onEachFeature: function(feature, layer) {
    //   // Set mouse events to change map styling
    //   layer.on({
    //     // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
    //     mouseover: function(event) {
    //       layer = event.target;
    //       layer.setStyle({
    //         fillOpacity: 0.9
    //       });
    //     },
    //     // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
    //     mouseout: function(event) {
    //       layer = event.target;
    //       layer.setStyle({
    //         fillOpacity: 0.5
    //       });
    //     },
    //     // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
    //     click: function(event) {
    //       map.fitBounds(event.target.getBounds());
    //     }
    //   });
    //   // Giving each feature a pop-up with information pertinent to it
    //   layer.bindPopup("<h1>" + feature.properties + "</h1> <hr> <h2>" + feature.properties + "</h2>");

    // }
// Start //

// var jsonLink = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=40"

// //
// //
// //

// d3.json(jsonLink, function(data){
  
//   var features = data.features;
//   console.log(features);
// });


 

//   var darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.dark",
//     accessToken: API_KEY
//   })

//         var geojsonMarkerOptions = {
//           radius: 8,
//           fillColor: 'red',
//           color: "#000",
//           weight: 1,
//           opacity: 1,
//           fillOpacity: 0.8
//       };

//       L.geoJSON(data, {
//         pointToLayer: function (feature, latlng) {
//             return L.circleMarker(latlng, geojsonMarkerOptions);
//         }
//         // style:myStyle
//       }).addTo(map);
 
  
  
  
//       var map = L.map("map", {
//         center: [14.6,-28.7],
//         zoom: 3
    
//       });
//   // function createMap(earthquakeData) {
    

//   // Create the tile layer that will be the background of our map
//   // var light=L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//   //   attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//   //   maxZoom: 18,
//   //   id: "mapbox.light",
//   //   accessToken: API_KEY
//   // })

  


//   // var baseMaps = {
//   //   "Light Map": light,
//   //   "Dark Map": dark
//   // };
  
  

 

//   // L.control.layers(baseMaps {
//   //   collapsed: false
//   // })
  
//   //create function to change color of circle marker depending on magnitude
//   function getColor(magnitude){
//     switch (magnitude) {
//       case (magnitude < 1):
//         return "yellow";
//       case (ma2nitude < 2):
//         return "red";
//       case (magnitude < 3):
//         return "orange";
//       case (magnitude < 4):
//         return "green";
//       case (magnitude < 5):
//         return "purple";
//       default:
//         return "pink";
//       }
//   }

//   //create function to change size of circle marker depending on magnitudde
//   function getRadius(magnitude) {

//   }

  //define object to set style of circle markers
  // myStyle={
  //   opacity: 0.5,
  //   fillopacity: 0.75,
  //   fillColor: getColor(feature.properties.mag),
  //   radius: getRadius(feature.properties.mag)
  // }

  //parse through data and append circle markers to map based on definedstyle
  



  // earthquakes.addTo(myEQMAP);




// // function createMap(earthquakeData) {
//   var myEQMAP = L.map("map", {
//     center: [14.6,-28.7],
//     zoom: 2,
//   });
//   // Create the tile layer that will be the background of our map
// L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.light",
//   accessToken: API_KEY
// }).addTo(myEQMAP);



// // L.control.layers(baseMaps, overlayMaps, {
// //   collapsed: false
// // }).addTo(map);

// // Create a baseMaps object to hold the lightmap layer
// // var baseMaps = {
// //   "Light Map": lightmap
// // };

// // // Create an overlayMaps object to hold the bikeStations layer
// // var overlayMaps = {
// //   "Bike Stations": earthquakeData
// // };

// // Create the map object with options


// // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map



// function createMarkers(response) {

//   // Pull the "stations" property off of response.data
//   var stations = response.data.stations;

//   // Initialize an array to hold bike markers
//   var earthquakeMarkers = [];

//   // Loop through the stations array
//   for (var index = 0; index < stations.length; index++) {
//     var station = stations[index];

//     // For each station, create a marker and bind a popup with the station's name
//     var earthquakeMarkers = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "<h3>");

//     // Add the marker to the bikeMarkers array
//     earthquakeMarkers.push(earthquakeMarkers);
//   }

//   // Create a layer group made from the bike markers array, pass it into the createMap function
//   createMap(L.layerGroup(earthquakeMarkers));
// }
// var startTime = ""

// var queryUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson$(startTime)`

// // console.log(queryUrl)

// limitQuery = "40"

// d3.json("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=40", function(data){

//   console.log(data);
//   var features = data.features;
//   console.log(features)
//   console.log(features[0].geometry.coordinates);
//   //need coordinates, magnitute of the earthquake to map the size?
//   //need the place name
//   //and magnitutde number

//   // coordinates = [[
//   //   [104.99404, 39.75621],
//   //   [56.99404, 39.75621],
//   //   [83.99404, 39.75621]
//   // ]]
//   var coordinatesArray = []
//   var magArray = []
//   var placeArray = []




// for (var i = 0; i < features.length; i++) {
//   coordinatesArray.push([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
//   magArray.push([features[i].properties.mag]);
//   placeArray.push([features[i].properties.place]);
// }

// console.log(coordinatesArray);
// console.log(magArray);
// console.log(placeArray);
// // //     var properties = feature[i].properties;
// //       var geometry = features[i].geometry;

// //       testArray.push([geometry.coordinates[1], geometry.coordinates[0]]);
// //       console.log(testArray);  
// // };
// console.log(coordinatesArray[0])
// for (var j = 0; j < coordinatesArray.length; j ++){
//   for (var m = 0; m < magArray.length; m ++){
  
//   var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "mag": magArray[m],
//         "place": "",
//         "popupContent": ""
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": coordinatesArray[j]
//     }
//   };
  
//   console.log(geojsonFeature);

//   var myLayer = L.geoJSON().addTo(myEQMAP);

//   myLayer.addData(geojsonFeature);
  

//   // L.geoJSON(geojsonFeature, {
//   //   onEachFeature: function(properties, layer) {
//   //       layer.bindPopup(properties.mag)

//   //   }



//   // }).addTo(myEQMAP);
//   }
// }

//     // console.log(magArray);
//     // console.log(coordinatesArray);
// });

// function chooseColor(mag){
//   switch(true){
//       case (mag<1):
//           return "";
//       case (mag<2):
//           return "";
//       case (mag<3):
//           return "";
//       case (mag<4):
//           return "";
//       case (mag<5):
//           return "";
//       default:
//           return "";
//   };
// }

//   //   
//   //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
//   //   }
//   // }
  




// // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// // d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers)
