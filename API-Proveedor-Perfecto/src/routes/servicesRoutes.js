// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
  categoryListController,
  productListController,
  getProductByIdController,
  newProductController,
  authUserController,
  productByCategoryIdController,
  productByUserIdController,
  productBySearchController,
} from '../controllers/index.js';

const router = express.Router();

// Middleware que lista todas las categorías.
router.get('/categories', categoryListController);
// Middleware que lista todos los productos.
router.get('/products', productListController);
// Middleware que devuelve las coincidencias de busqueda de productos
router.get('/products/search', productBySearchController);
// Middleware que lista un producto por su id.
router.get('/products/:id', getProductByIdController);
// Middleware que permite crear un nuevo producto.
router.post('/products', authUserController, newProductController);
// Middleware que permite visualizar la lista de productos por usuario
router.get('/products/user/:id', productByUserIdController);
// Middleware que permite visualizar la lista de productos por categoría
router.get('/categories/:id', productByCategoryIdController);

export default router;
