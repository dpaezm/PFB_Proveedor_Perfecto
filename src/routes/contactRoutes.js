import express from 'express';

import {
  authUserController,
  getRequestsController,
  newContactRequestController,
  newRatingController,
} from '../controllers/index.js';

const router = express.Router();

router.post('/contactrequest', authUserController, newContactRequestController);
router.get('/contactrequest/:providerId', getRequestsController);
// En esta app.get("/contactrequest" falta el auth

router.put('/contactrequest/:requestId', newRatingController);
// En esta app.put("/contactrequest" falta el auth

export default router;
