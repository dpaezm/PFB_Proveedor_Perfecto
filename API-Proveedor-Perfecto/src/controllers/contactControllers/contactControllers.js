import {
  answerContactRequest,
  createContactRequest,
  manageContactRequest,
  manageUserContactRequest,
  updateContactRequestStatus,
} from '../../models/contactModels/contactModels.js';
import generateError from '../../utils/helpers.js';

export async function newContactRequestController(req, res, next) {
  try {
    const user_id = req.user.id;
    const { product_id, comment } = req.body;

    if (!comment) {
      throw generateError('Introduce un mensaje', 400);
    }

    let requestId = await createContactRequest(user_id, product_id, comment);

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
    const providerId = req.user.id;

    const requests = await manageContactRequest(providerId);

    res.send({
      status: 'ok',
      requests,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserRequestsController(req, res, next) {
  try {
    const userId = req.user.id;

    const requests = await manageUserContactRequest(userId);

    res.send({
      status: 'ok',
      requests,
    });
  } catch (error) {
    next(error);
  }
}

export async function answerContactRequestController(req, res, next) {
  try {
    const { requestId } = req.params;
    const { answer } = req.body;
    const providerId = req.user.id;

    const respuesta = await answerContactRequest(requestId, answer, providerId);

    res.send({
      status: 'ok',
      message: `Respuesta a la solicitud de contacto ${requestId} enviada correctamente`,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateContactRequestStatusController(req, res, next) {
  try {
    const { requestId } = req.params;
    const { status } = req.body;
    const userId = req.user.id;

    await updateContactRequestStatus(requestId, userId, status);

    res.send({
      status: 'ok',
      message: `Estado de la solicitud actualizado a ${status}`,
    });
  } catch (error) {
    next(error);
  }
}
