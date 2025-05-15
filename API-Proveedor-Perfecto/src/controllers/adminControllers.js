import { incomingProvidersModel } from '../models/adminModels.js';
import generateError from '../utils/helpers.js';

export async function incomingProvidersController(req, res, next) {
  try {
    const providerList = await incomingProvidersModel();

    if (providerList.length == 0) {
      throw generateError('No hay proveedores pendientes de activar');
    }

    res.send({
      status: 'ok',
      data: {
        entries: providerList,
      },
    });
  } catch (error) {
    next(error);
  }
}
