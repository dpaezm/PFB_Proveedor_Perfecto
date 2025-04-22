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

//Importo funciones de error
import {
  error404Controller,
  errorController,
} from './src/controllers/errorControllers/errorControllers.js';
import { UPLOADS_DIR } from './envConfig.js';

//Middewares externos
//Para poder usar el body en json
app.use(express.json());
//Para poder usar el body en form-data
app.use(fileUpload());
// Middleware que muestra por consola info sobre la petición entrante.
app.use(morgan('dev'));
// Middleware que indica a Express cuál es el directorio de ficheros estáticos.
app.use(express.static(UPLOADS_DIR));
app.use(cors(/* { origin: FRONT_URL } */));

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
