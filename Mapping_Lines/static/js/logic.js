// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [34.0522, -118.2437], 
//     zoom: 4
//   });

//            OR
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY,
    tileSize: 512,
    zoomOffset: -1
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinate for each point to be used in the polyline
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinate and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// Skill Drill
// Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops, Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map. 
// SFO - AUS - YXU - YYZ - JFK
let flight = [
    [37.6213, -122.3789554], //SFO
    [30.2026, -97.668146], //AUS
    [42.9869502, -81.243177], //YXU
    [43.6777, -79.6248], //YYZ
    [40.6413, -73.778139] //JFK
];

map.setView([39.114053, -94.6274636], 5);  // Center on Kansas City, Kansas

L.polyline(flight, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '10, 10', 
    dashOffset: '5'
}).addTo(map);

