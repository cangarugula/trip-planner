const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

const icons = {
  activity: "url(http://i.imgur.com/WbMOfMl.png)",
  hotel: "url(http://i.imgur.com/D9574Cu.png)",
  restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
}


const createElem = (type) => {
  let elem = document.createElement('div')
  elem.style.width = '32px';
  elem.style.height = '32px';
  elem.style.backgroundImage = icons[type]
  return elem;
}

const buildMarker = (type,coordinates) => {
  let domElem = createElem(type)
  console.log(domElem)
  return new mapboxgl.Marker(domElem).setLngLat(coordinates)
}

module.exports = buildMarker
