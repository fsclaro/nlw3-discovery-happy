// create a map object
const map = L.map("mapid").setView([-22.999233074539646, -45.54621256655083], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [35, 68],
});

let marker;
// create and add marker
map.on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon if exists
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// upload photos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da última imagem adiconada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verificar se o campo está vazio, se sim, então não adicionar
    const input = newFieldContainer.children[0];
    if (input.value == "") {
        return
    }
    // limpa o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = "";
    // adicionar o clone ao conteiner de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = "";
        return
    }
    span.parentNode.remove();
}

// selecionar o botão sim / não
function toggleSelect(event) {
    // retira a classe .active dos botões
    document.querySelectorAll('.button-select button')
        .forEach(function (button) {
            button.classList.remove('active');
        });
    // colocar a class .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');
    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}
