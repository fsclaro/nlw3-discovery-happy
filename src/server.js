// importando pacotes
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express();

server
    // define rotas estáticas
    .use(express.static('public'))
    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // definindo rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

// subindo o servidor
server.listen(5500);
