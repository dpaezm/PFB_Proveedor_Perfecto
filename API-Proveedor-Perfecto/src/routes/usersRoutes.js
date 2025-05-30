import express from 'express';

import {
  getPrivateUserInfoController,
  activateUserController,
  loginUserController,
  newUserController,
  sendRecoverPassController,
  resetUserPassWithCodeController,
  getProviderDetailController,
  getProvidersController,
  authUserController,
  updateUserPasswordController,
  updateUserByIdController,
  getAllUsersController,
} from '../controllers/index.js';
import editUserInfoController from '../controllers/userControllers/editUserInfoController.js';

const router = express.Router();
// Middleware que permite ver todos los usuarios.
router.get('/users', getAllUsersController);
// Middleware que permite ver un usuario por su id.
router.patch('/users/:userId', updateUserByIdController);

// Middleware que registra un nuevo usuario.
router.post('/users/register', newUserController);

// Middleware que valida a un usuario.
router.put('/users/validate/:registrationCode', activateUserController);

// Middleware que logea a un usuario existente.
router.post('/users/login', loginUserController);

// Middleware que retorna info privada de mi usuario.
router.get('/users/me', authUserController, getPrivateUserInfoController);

// Middleware que permite editar la información de un usuario.
router.put('/users/me/edit', authUserController, editUserInfoController);

// Middleware que permite enviar un correo de recuperación de contraseña.
router.put('/users/password/recover', sendRecoverPassController);

//Middlewar que permite modificar la contraseña.

router.post(
  '/users/updatepassword',
  authUserController,
  updateUserPasswordController,
);
// Middleware que permite resetear la contraseña con un código.
router.put(
  '/users/password/reset/:recoverPassCode',
  resetUserPassWithCodeController,
);

router.get('/providers', getProvidersController);
router.get('/providers/:providerId', getProviderDetailController);

export default router;
