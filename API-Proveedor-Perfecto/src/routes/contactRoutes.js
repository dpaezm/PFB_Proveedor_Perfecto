import express from 'express';

import {
  answerContactRequestController,
  authUserController,
  getRequestsController,
  getReviewsController,
  getUserRequestsController,
  newContactRequestController,
  newRatingController,
  updateContactRequestStatusController,
} from '../controllers/index.js';

const router = express.Router();

router.post('/contactrequest', authUserController, newContactRequestController);

router.get(
  '/contactrequest/:providerId',
  authUserController,
  getRequestsController,
);

router.get(
  '/contactrequest/user/:userid',
  authUserController,
  getUserRequestsController,
);

router.put(
  '/contactrequest/answer/:requestId',
  authUserController,
  answerContactRequestController,
);

router.put(
  '/contactrequest/status/:requestId',
  authUserController,
  updateContactRequestStatusController,
);

router.put(
  '/contactrequest/rating/:requestId',
  authUserController,
  newRatingController,
);

router.get('/reviews/provider/:id', getReviewsController);

export default router;
