// create a map object
const map = L.map("mapid").setView([-22.999329,-45.546364], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [35, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-marker-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage">' +
    '<img src="/public/images/arrow-white.svg"></a>'
);

/* create and add marker */
L.marker([-22.999349,-45.548554], { icon }).addTo(map).bindPopup(popup);
