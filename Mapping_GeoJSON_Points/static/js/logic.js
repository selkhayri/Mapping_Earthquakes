// Add console.log to check to see if our code is working.
console.log("working");

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type":"Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

// ================================================================
var sanFran = function() {
    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
        center: [34.0522, -118.2437], 
        zoom: 4
    });

    //            OR
    // Create the map object with center at the San Francisco airport.
    // let map = L.map('mapid').setView([34.0522, -118.2437], 4);

    // We create the tile layer that will be the background of our map.
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


    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

    // Grabbing our GeoJSON data.
    L.geoJson(sanFranAirport, {
        // We turn each feature into a marker on the map.
        pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>");
        }

    }).addTo(map);
};

// ==============================================================================================
var nightSanFran = function() { 
    let map = L.map('mapid').setView([37.61899948120117, -122.375], 10);

    // Skill Drill
    // Edit your logic.js to create a popup marker for San Francisco Airport on a night preview navigation map. When you click on the popup, it will display the city, state, and the name of the airport.
    streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/navigation-preview-night-v2',
        accessToken: API_KEY,
        tileSize: 512,
        zoomOffset: -1
    });

    streets.addTo(map);

    // // Grabbing our GeoJSON data.
    L.geoJson(sanFranAirport, {
        // We turn each feature into a marker on the map.
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
        }

    }).addTo(map);

};

var sanFranPopupMarker = function() {
//==================================================================================
    // Skill Drill
    // Edit your logic.js to create a popup marker for the San Francisco Airport on the outdoor map. When you click on the popup, it will display the airport code and name of the airport.
    let map = L.map('mapid').setView([37.61899948120117, -122.375], 10);

    streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        accessToken: API_KEY,
        tileSize: 512,
        zoomOffset: -1
    });

    streets.addTo(map);

    // Grabbing our GeoJSON data.
    L.geoJson(sanFranAirport, {
        // We turn each feature into a marker on the map.
        pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng).bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
        }

    }).addTo(map);
} 

var allAirports1 = function() { 
    //=========================================================================================================
    // Section 13.5.3
    // Edit your L.geoJson() layer to add a popup marker that displays all airports’ codes and names.
    // Create the map object with center and zoom level.
    let map = L.map('mapid').setView([37.5, -122.5], 5);
    map.setView([30, 30], 3);

    streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        accessToken: API_KEY,
        tileSize: 512,
        zoomOffset: -1
    });

    streets.addTo(map);

    // Accessing the airport GeoJSON URL
    let airportData = "https://raw.githubusercontent.com/selkhayri/Mapping_Earthquakes/master/majorAirports.json";

    // Grabbing our GeoJSON data.
    d3.json(airportData).then(function(data) {

        // Method 1: Individual features
        data.features.forEach(function(feature) {
            L.geoJson(data.features, {
            // We turn each feature into a marker on the map.
                pointToLayer: function(feature,latlng) {
                    console.log(feature.properties.faa);
                    console.log(feature.properties.name);
                    console.log(latlng);
                    return L.marker(latlng).bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
                }
            }).addTo(map);
        });
    });
}


var allAirports2 = function() { 
    //=========================================================================================================
    // Section 13.5.3
    // Edit your L.geoJson() layer to add a popup marker that displays all airports’ codes and names.
    // Create the map object with center and zoom level.
    let map = L.map('mapid').setView([37.5, -122.5], 5);
    map.setView([30, 30], 3);

    streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        accessToken: API_KEY,
        tileSize: 512,
        zoomOffset: -1
    });

    streets.addTo(map);

    // Accessing the airport GeoJSON URL
    let airportData = "https://raw.githubusercontent.com/selkhayri/Mapping_Earthquakes/master/majorAirports.json";

    // Grabbing our GeoJSON data.
    d3.json(airportData).then(function(data) {
        // Method 2: feature collection        
        L.geoJson(data.features, {   // featureCollection!!
            // We turn each feature into a marker on the map.
            pointToLayer: function(feature, latlng) {
                console.log(feature);
                return L.marker(latlng).bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
            }
        }).addTo(map);
    });
}

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
    let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    // Create a base layer that holds both maps.
    let baseMaps = {
        Street: streets,
        Dark: dark
    };

    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
        center: [30, 30],
        zoom: 2,
        layers: [streets]
    });

    L.control.layers(baseMaps).addTo(map);

    let airportData = "https://raw.githubusercontent.com/selkhayri/Mapping_Earthquakes/master/majorAirports.json";


    // Skill Drill
    // Edit your L.geoJson() layer to add a popup marker that displays all airports’ codes and names for both the Street and Dark layers.
    // d3.json(airportData).then(function(data) {
    //     console.log(data);
    //     L.geoJson(data).addTo(map);
    // });

    d3.json(airportData).then(function(data) {
        console.log(data);
        L.geoJson(data).addTo(map);

        L.geoJson(data.features, {   // featureCollection!!
        // We turn each feature into a marker on the map.
            pointToLayer: function(feature, latlng) {
                console.log(feature);
                return L.marker(latlng).bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
            }
        }).addTo(map);;
    });
}


// sanFran();
// nightSanFran();
// sanFranPopupMarker();
// allAirports1();
// allAirports2();
multipleMaps();