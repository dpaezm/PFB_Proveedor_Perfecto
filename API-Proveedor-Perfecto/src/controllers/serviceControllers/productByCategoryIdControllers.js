import getProductByCategoryIdModel from '../../models/serviceModels/getProductByCategoryIdModel.js';

export default async function getProductByCategoryIdController(req, res, next) {
  try {
    const { id } = req.params;
    const product = await getProductByCategoryIdModel(id);

    res.send({
      status: 'ok',
      data: product,
    });
  } catch (error) {
    next(error);
  }
}
