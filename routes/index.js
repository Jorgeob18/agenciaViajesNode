import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('Inicio', {
    pagina: 'Home',
  });
});

router.get('/nosotros', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
});

router.get('/viajes', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('viajes', {
    pagina: 'Viajes',
  });
});

router.get('/testimoniales', (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('testimoniales', {
    pagina: 'Testimoniales',
  });
});

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

export default router;
