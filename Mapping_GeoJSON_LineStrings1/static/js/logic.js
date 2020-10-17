// Add console.log to check to see if our code is working.
console.log("working");


var multipleMaps = function() {
    
    let daynav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v2/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
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
    let nightnav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    // Create a base layer that holds both maps.
    let baseMaps = {
        DayNav: daynav,
        NightNav: nightnav
    };

    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
        center: [44.0, -80.0],
        zoom: 2,
        layers: [daynav]
    });

    L.control.layers(baseMaps).addTo(map);

    let torontoData = "https://raw.githubusercontent.com/selkhayri/Mapping_Earthquakes/master/torontoRoutes.json";

    // Create a style for the lines.
    let myStyle = {
        color: "#ffffa1",
        weight: 2
    }

    d3.json(torontoData).then(function(data) {
        console.log(data);
        L.geoJson(data).addTo(map);

        L.geoJson(data.features, {   // featureCollection!!
            style: myStyle,
        // We turn each feature into a marker on the map.
            onEachFeature: function(feature, layer) {
                return layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3>Destination: " + feature.properties.dst + "</h3>");
            }
        }).addTo(map);
    });
}


multipleMaps();