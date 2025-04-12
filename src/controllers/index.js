// Importamos las funciones controladoras de los usuarios.
import newUserController from './newUserController.js';
import activateUserController from './activateUserController.js';
import loginUserController from './loginUserController.js';
import getPrivateUserInfoController from './getPrivateUserInfoController.js';
import sendRecoverPassController from './sendRecoverPassController.js';
import resetUserPassWithCodeController from './resetUserPassWithCodeController.js';

export {
  newUserController,
  activateUserController,
  loginUserController,
  getPrivateUserInfoController,
  sendRecoverPassController,
  resetUserPassWithCodeController,
};
