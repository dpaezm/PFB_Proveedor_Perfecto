// Importamos las funciones controladoras de los usuarios.
import newUserController from './userControllers/newUserController.js';
import activateUserController from './userControllers/activateUserController.js';
import loginUserController from './userControllers/loginUserController.js';
import getPrivateUserInfoController from './userControllers/getPrivateUserInfoController.js';
import sendRecoverPassController from './userControllers/sendRecoverPassController.js';
import resetUserPassWithCodeController from './userControllers/resetUserPassWithCodeController.js';
import categoryListController from './serviceControllers/categoryListControllers.js';
import productListController from './serviceControllers/productListControllers.js';
import getProductByIdController from './serviceControllers/productByIdControllers.js';
import newProductController from './serviceControllers/productControllers.js';
import newCompanyController from './serviceControllers/companyControllers.js';

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
