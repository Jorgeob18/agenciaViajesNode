import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('Inicio');
});

router.get('/nosotros', (req, res) => {
  const viajes = 'Viaje a Alemania';

  res.render('Nosotros', {
    viajes,
  });
});

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

export default router;
