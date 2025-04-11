// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
  newUserController,
  activateUserController,
  loginUserController,
} from '../controllers/index.js';

// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Creamos el router.
const router = express.Router();

// Middleware que registra un nuevo usuario.
router.post('/users/register', newUserController);

// Middleware que valida a un usuario.
router.put('/users/validate/:registrationCode', activateUserController);

// Middleware que logea a un usuario existente.
router.post('/users/login', loginUserController);

export default router;
