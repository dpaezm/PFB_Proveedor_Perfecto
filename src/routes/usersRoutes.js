import express from 'express';
import {
  getProviderDetailController,
  getProvidersController,
} from '../controllers/userControllers/providerControllers.js';

const router = express.Router();

router.get('/providers', getProvidersController);
router.get('/providers/:providerId', getProviderDetailController);

export default router;
