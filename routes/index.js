import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.send('Inicio');
});

router.get('/nosotros', (req, res) => {
  res.render('Nosotros');
});

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

export default router;
