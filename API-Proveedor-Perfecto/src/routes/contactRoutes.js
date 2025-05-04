import express from 'express';

import {
  answerContactRequestController,
  authUserController,
  getRequestsController,
  getReviewsController,
  newContactRequestController,
  newRatingController,
} from '../controllers/index.js';

const router = express.Router();

router.post('/contactrequest', authUserController, newContactRequestController);

router.get(
  '/contactrequest/:providerId',
  authUserController,
  getRequestsController,
);

router.put(
  '/contactrequest/answer/:requestId',
  authUserController,
  answerContactRequestController,
);

//Pendiente de implementar en el front
router.put(
  '/contactrequest/rating/:requestId',
  authUserController,
  newRatingController,
);

router.get('/reviews/provider/:id', getReviewsController);

export default router;
