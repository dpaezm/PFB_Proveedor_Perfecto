import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

//Añado las variable de entorno
import 'dotenv/config';

const app = express();

// Importamos las rutas.
import Routes from './src/routes/Routes.js';

//Importo funciones
import {
  error404Controller,
  errorController,
} from './src/controllers/errorControllers.js';

import newProductController from './src/controllers/productControllers.js';
import categoryListController from './src/controllers/categoryListControllers.js';
import productListController from './src/controllers/productListControllers.js';
import getProductByIdController from './src/controllers/productByIdControllers.js';

//Middewares externos
//Para poder usar el body en json
app.use(express.json());
//Para poder usar el body en form-data
app.use(fileUpload());
// Middleware que muestra por consola info sobre la petición entrante.
app.use(morgan('dev'));
//Servimos la carpeta public de forma estática
app.use('/media', express.static('public'));

//Endpoints
// Middleware que indica a Express dónde están las rutas.
app.use('/api', Routes);

//Middlewares de error
app.use(error404Controller);
app.use(errorController);

app.listen(process.env.API_PORT, () => {
  console.log(`Aplicación funcionando en el puerto ${process.env.API_PORT}`);
});
