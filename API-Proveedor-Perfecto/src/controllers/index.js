// Importamos las funciones controladoras de los usuarios.
import newUserController from './userControllers/newUserController.js';
import activateUserController from './userControllers/activateUserController.js';
import loginUserController from './userControllers/loginUserController.js';
import getPrivateUserInfoController from './userControllers/getPrivateUserInfoController.js';
import sendRecoverPassController from './userControllers/sendRecoverPassController.js';
import resetUserPassWithCodeController from './userControllers/resetUserPassWithCodeController.js';
import categoryListController from './categoryControllers/categoryListControllers.js';
import productListController from './serviceControllers/productListControllers.js';
import getProductByIdController from './serviceControllers/productByIdControllers.js';
import newProductController from './serviceControllers/productControllers.js';
import editUserInfoController from './userControllers/editUserInfoController.js';
import {
  getRequestsController,
  newContactRequestController,
} from './contactControllers/contactControllers.js';
import newRatingController from './contactControllers/ratingControllers.js';
import authUserController from '../middlewares/authUserController_.js';
import {
  getProviderDetailController,
  getProvidersController,
} from './userControllers/providerControllers.js';
import updateUserPasswordController from './userControllers/updateUserPasswordController.js';
import productByCategoryIdController from './serviceControllers/productByCategoryIdControllers.js';
import productByUserIdController from './serviceControllers/productByUserIdControllers.js';
import productBySearchController from './serviceControllers/productBySearchController.js';
import getReviewsController from './contactControllers/getReviewsController.js';

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
  getRequestsController,
  newContactRequestController,
  newRatingController,
  authUserController,
  getProviderDetailController,
  getProvidersController,
  editUserInfoController,
  updateUserPasswordController,
  productByCategoryIdController,
  productByUserIdController,
  productBySearchController,
  getReviewsController,
};
