import { Viaje } from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('inicio', {
    pagina: 'Home',
    clase: 'home',
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

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll({ limit: 6 });
    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

// Muestra un viaje por su Slug
const paginaDetalleViaje = async (req, res) => {
  // console.log(req.params.slug);
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render('viaje', {
      pagina: 'Informacion viaje',
      viaje,
    });
  } catch (error) {}
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
