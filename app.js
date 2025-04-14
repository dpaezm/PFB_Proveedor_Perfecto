import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import cors from 'cors';

//Añado las variable de entorno
import 'dotenv/config';

const app = express();

// Importamos las rutas.
import servicesRoutes from './src/routes/servicesRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
import usersRoutes from './src/routes/usersRoutes.js';

//Importo funciones
import {
  error404Controller,
  errorController,
} from './src/controllers/errorControllers/errorControllers.js';

//Middewares externos
app.use(cors())
//Para poder usar el body en json
app.use(express.json());
//Para poder usar el body en form-data
app.use(fileUpload());
// Middleware que muestra por consola info sobre la petición entrante.
app.use(morgan('dev'));
//Servimos la carpeta public de forma estática
app.use('/media', express.static('public'));
// Middleware que evita que las CORS interfieran a la hora de conectar el frontend con
// el backend.



//Endpoints a utilizar con las rutas
app.use(servicesRoutes);
app.use(contactRoutes);
app.use(usersRoutes);

//Middlewares de error
app.use(error404Controller);
app.use(errorController);

app.listen(process.env.API_PORT, () => {
  console.log(`Aplicación funcionando en el puerto ${process.env.API_PORT}`);
});
