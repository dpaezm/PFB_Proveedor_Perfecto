import express from 'express';
import {
  getRequestsController,
  newContactRequestController,
} from '../controllers/contactControllers/contactControllers.js';
import { newRatingController } from '../controllers/contactControllers/ratingControllers.js';

const router = express.Router();

router.post('/contactrequest', newContactRequestController);
router.get('/contactrequest/:providerId', getRequestsController);
// En esta app.get("/contactrequest" falta el auth

router.put('/contactrequest/:requestId', newRatingController);
// En esta app.put("/contactrequest" falta el auth

export default router;
