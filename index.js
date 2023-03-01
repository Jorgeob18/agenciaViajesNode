// const express = require('express');

import express from 'express'; // Se agrega "type": "module", en package.json para utilizar import y export
import router from './routes/index.js';

const app = express();

// Definir puertp
const port = process.env.PORT || 4000;

// Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
