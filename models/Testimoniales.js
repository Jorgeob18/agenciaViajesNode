import { Sequelize } from 'sequelize';
import db from '../config/db.js';

// Se necesitan definir las columnas, de lo contrario al ejecutar una consulta no traera si la omitimos
export const Testimonial = db.define('testimoniales', {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});
