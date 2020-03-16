
var qurl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200"


d3.json(qurl, function(data) {

  mapFeatures(data.features);
  console.log(data)  
});

  function mapFeatures(data) {

    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
  
    function radiusSize(magnitude) {
      return magnitude * 20000;
    }
  
  
    function getColor(magnitude) {
      if (magnitude < 1) {
        return "lightcoral"
      }
      else if (magnitude < 2) {
        return "coral"
      }
      else if (magnitude < 3) {
        return "khaki"
      }
      else if (magnitude < 4) {
        return "lightseagreen"
      }
      else if (magnitude < 5) {
        return "lightblue"
      }
      else {
        return "slategray"
      }
    }
  
  
    var earthquakes = L.geoJSON(data, {
      pointToLayer: function(data, latlng) {
        return L.circle(latlng, {
          radius: radiusSize(data.properties.mag),
          color: getColor(data.properties.mag),
          fillOpacity: 1,
          stroke: true
                    
        });
      },
      onEachFeature: onEachFeature
    });
  
    createMap(earthquakes);
  }

  function createMap(earthquakes) {


    var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
    });

    var outdoor = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.outdoors",
      accessToken: API_KEY
    });
  
    var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.satellite",
      accessToken: API_KEY
    });
  
    var grayscale = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });
  
    var fline = new L.LayerGroup();
    
    var baseMaps = {
      "Streetmap View": street,
      "Outdoors View": outdoor,
      "Greyscale View": grayscale,
      "Satellite View": satellite
    };
  
    var overlayMaps = {
      Earthquakes: earthquakes,
      FaultLines: fline
    };
  
    var myMap = L.map("map", {
      center: [14.6,-28.7],
      zoom: 3,
      layers: [outdoor, earthquakes, fline]
    });
  
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

    var faultlinequery = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json";
    
    // Create the faultlines and add them to the faultline layer
    d3.json(faultlinequery, function(data) {
      L.geoJSON(data, {
        style: function() {
          return {color: "orangered", fillOpacity: 0}
        }
      }).addTo(fline)
    })
  
  }