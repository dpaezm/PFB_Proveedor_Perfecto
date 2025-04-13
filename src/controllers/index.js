// Importamos las funciones controladoras de los usuarios.
import newUserController from './userControllers/newUserController.js';
import activateUserController from './userControllers/activateUserController.js';
import loginUserController from './userControllers/loginUserController.js';
import getPrivateUserInfoController from './userControllers/getPrivateUserInfoController.js';
import sendRecoverPassController from './userControllers/sendRecoverPassController.js';
import resetUserPassWithCodeController from './userControllers/resetUserPassWithCodeController.js';
import categoryListController from './categoryListControllers.js';
import productListController from './productListControllers.js';
import getProductByIdController from './productByIdControllers.js';
import newProductController from './productControllers.js';
import newCompanyController from './companyControllers.js';

export {
  newUserController,
  activateUserController,
  loginUserController,
  getPrivateUserInfoController,
  sendRecoverPassController,
  resetUserPassWithCodeController,
  categoryListController,
  productListController,
  getProductByIdController,
  newProductController,
  newCompanyController,
};
