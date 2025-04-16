import { createRating } from '../../models/contactModels/ratingModels.js';
import generateError from '../../utils/helpers.js';

export async function newRatingController(req, res, next) {
  try {
    const { requestId } = req.params;
    //const userId = 1;

    const userId = req.user.id;
    const { comment, rating } = req.body;

    if (!comment) {
      throw generateError('Debes enviar un comentario', 400);
    }

    if (!rating) {
      throw generateError('Introduce una valoración', 400);
    }

    await createRating(requestId, userId, comment, rating);

    res.send({
      status: 'ok',
      message: `Valoración enviada`,
    });
  } catch (error) {
    next(error);
  }
}
