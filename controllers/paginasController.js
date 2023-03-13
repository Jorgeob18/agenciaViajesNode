import { Viaje } from '../models/Viajes.js';
const paginaInicio = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('Inicio', {
    pagina: 'Home',
  });
};

const paginaNosotros = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
};

const paginaViajes = async (req, res) => {
  // Consultar DB
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes: viajes,
  });
};

const paginaTestimoniales = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('testimoniales', {
    pagina: 'Testimoniales',
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales };
