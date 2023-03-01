// const express = require('express');

import express from 'express'; // Se agrega "type": "module", en package.json

const app = express();

// Definir puertp
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.send('Inicio');
});

app.get('/nosotros', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.send('Contacto');
});

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
