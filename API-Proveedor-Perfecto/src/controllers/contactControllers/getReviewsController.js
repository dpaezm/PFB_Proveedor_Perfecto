import getReviews from '../../models/contactModels/getReviews.js';

export default async function getReviewsController(req, res, next) {
  try {
    const { id } = req.params;

    const reviews = await getReviews(id);

    res.send({
      status: 'ok',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
}
