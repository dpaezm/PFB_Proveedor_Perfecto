import getProductBySearchModel from '../../models/serviceModels/getProductBySearchModel.js';

export default async function productBySearchController(req, res, next) {
  try {
    const { input } = req.query;

    const products = await getProductBySearchModel(input);

    res.send({
      status: 'ok',
      data: products,
    });
  } catch (error) {
    next(error);
  }
}
