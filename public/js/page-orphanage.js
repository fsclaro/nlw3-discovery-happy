const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create a map object
const map = L.map("mapid", options).setView([-22.999329, -45.546364], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [35, 68],
  popupAnchor: [170, 2],
});

L.marker([-22.999349, -45.548554], { icon }).addTo(map);

/* image gallery */
function selectImage(event) {
  // captura o botão clicado
  const button = event.currentTarget;

  // remove todas as classes .active dos botões
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // seleciona a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualiza o container de image
  imageContainer.src = image.src;

  // adiciona a classe .active para o botão clicado
  button.classList.add('active');
}
