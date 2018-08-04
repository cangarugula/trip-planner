console.log("hello")
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")
const buildMarker = require('./marker')

mapboxgl.accessToken = "API TOKEN HERE"

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker('activity',[-74.009151, 40.705086]).addTo(map)
buildMarker('hotel',[-73.009151, 41.705086]).addTo(map)
buildMarker('restaurant',[-71.009151, 43.705086]).addTo(map)


