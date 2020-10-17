// Add console.log to check to see if our code is working.
console.log("working");


var multipleMaps = function() {
    
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        accessToken: API_KEY,
        tileSize: 512,
        zoomOffset: -1
    });

    // We create the dark view tile layer that will be an option for our map.
    let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-streets-v11',
        accessToken: API_KEY
    });

    // Create a base layer that holds both maps.
    let baseMaps = {
        "Streets": streets,
        "Satellite Streets": satelliteStreets
    };

    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
        center: [44.0, -80.0],
        zoom: 10,
        layers: [streets]
    });

    L.control.layers(baseMaps).addTo(map);

    let torontoHoods = "https://raw.githubusercontent.com/selkhayri/Mapping_Earthquakes/master/torontoNeighborhoods.json";

    // Create a style for the lines.
    let myStyle = {
        color: "#0000ff",
        weight: 1,
        fillColor: "yellow"
    }

    d3.json(torontoHoods).then(function(data) {
        console.log(data);

        L.geoJson(data.features, {   // featureCollection!!
            style: myStyle,
        // We turn each feature into a marker on the map.
            onEachFeature: function(feature, layer) {
                return layer.bindPopup("<h3>Neighbourhood: " + feature.properties.AREA_NAME + "</h3>");
            }
        }).addTo(map);
    });
}


multipleMaps();