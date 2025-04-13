import express from 'express';
import {
  getProviderDetailController,
  getProvidersController,
} from '../controllers/userControllers/providerControllers.js';

import {
  getPrivateUserInfoController,
  activateUserController,
  loginUserController,
  newUserController,
  sendRecoverPassController,
  resetUserPassWithCodeController,
} from '../controllers/index.js';

const router = express.Router();

// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Middleware que registra un nuevo usuario.
router.post('/users/register', newUserController);

// Middleware que valida a un usuario.
router.put('/users/validate/:registrationCode', activateUserController);

// Middleware que logea a un usuario existente.
router.post('/users/login', loginUserController);

// Middleware que retorna info privada de mi usuario.
router.get('/users/me', authUserController, getPrivateUserInfoController);

// Middleware que permite enviar un correo de recuperación de contraseña.
router.put('/users/password/recover', sendRecoverPassController);

// Middleware que permite resetear la contraseña con un código.
router.put(
  '/users/password/reset/:recoverPassCode',
  resetUserPassWithCodeController,
);

router.get('/providers', getProvidersController);
router.get('/providers/:providerId', getProviderDetailController);

export default router;
