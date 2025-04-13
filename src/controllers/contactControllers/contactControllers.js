import {
  createContactRequest,
  manageContactRequest,
} from '../../models/contactModels/contactModels.js';
import generateError from '../../utils/helpers.js';

export async function newContactRequestController(req, res, next) {
  try {
    const { user_id, product_id, comment, status } = req.body;

    if (!comment) {
      throw generateError('Introduce un mensaje', 400);
    }

    let requestId = await createContactRequest(
      user_id,
      product_id,
      comment,
      status,
    );

    res.send({
      status: 'ok',
      message: `Solicitud de contacto ${requestId} creada correctamente`,
    });
  } catch (error) {
    next(error);
  }
}

export async function getRequestsController(req, res, next) {
  try {
    const providerId = req.params.providerId;

    const requests = await manageContactRequest(providerId);

    res.send({
      status: 'ok',
      requests,
    });
  } catch (error) {
    next(error);
  }
}
