// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [34.0522, -118.2437], 
    zoom: 14
  });


// Create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.

// Dark Theme
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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

// Light-yellow circle with a 300-meter radius of Central Los Angeles.

// light-yellow circle
var circle = L.circle([34.0522, -118.2437], 2500, {
    stroke: true, //true/false for stroke
    color: 'black', //stroke color
    opacity: 1, //a value between 0 and 1
    weight: 5, //stroke weight
    fill: true, //boolean for fill - true/false
    fillColor: 'yellow', //HEX or color name
    fill0pacity: 1, //opacity 0-1 of fill
   }).addTo(map);

