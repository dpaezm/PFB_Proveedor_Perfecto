// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
  categoryListController,
  productListController,
  getProductByIdController,
  newProductController,
} from '../controllers/index.js';

const router = express.Router();
// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Middleware que lista todas las categorías.
router.get('/categories', categoryListController);
// Middleware que lista todos los productos.
router.get('/products', productListController);
// Middleware que lista un producto por su id.
router.get('/products/:id', getProductByIdController);
// Middleware que permite crear un nuevo producto.
router.post('/products', authUserController, newProductController);

export default router;
