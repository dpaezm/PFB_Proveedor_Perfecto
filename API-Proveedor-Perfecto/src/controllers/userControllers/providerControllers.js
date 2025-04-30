import {
  getProviderDetail,
  getProviders,
} from '../../models/userModels/providerModels.js';

export async function getProvidersController(req, res, next) {
  try {
    const providerList = await getProviders();

    res.send({
      status: 'ok',
      data: providerList,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProviderDetailController(req, res, next) {
  try {
    const providerId = req.params.providerId;
    console.log(providerId);

    const providerDetail = await getProviderDetail(providerId);

    res.send({
      status: 'ok',
      data: providerDetail,
    });
  } catch (error) {
    next(error);
  }
}
