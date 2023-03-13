import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales);

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

export default router;
