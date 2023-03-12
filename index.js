// const express = require('express');

import express from 'express'; // Se agrega "type": "module", en package.json para utilizar import y export
import router from './routes/index.js';

const app = express();

// Definir puertp
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de Viajes';
  next();
});

//Definir carpeta Publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
