import express from 'express';
import { incomingProvidersController } from '../controllers/adminControllers.js';
import authUserController from '../middlewares/authUserController_.js';

const router = express.Router();

router.get(
  `/incomingProviders`,
  authUserController,
  incomingProvidersController,
);

export default router;
