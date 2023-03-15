import { Viaje } from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {
  // Consultar 3 viajes del modelo Viaje
  // Correccion branch test
  //Ejecutar al mismo tiempo las dos consultas en lugar de hacer await a una y despues a otra
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);
    res.render('inicio', {
      pagina: 'Home',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
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
