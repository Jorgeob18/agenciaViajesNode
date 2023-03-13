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

const paginaViajes = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('viajes', {
    pagina: 'Viajes',
  });
};

const paginaTestimoniales = (req, res) => {
  // req: lo que enviamos, res: lo que recibimos
  res.render('testimoniales', {
    pagina: 'Testimoniales',
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales };
