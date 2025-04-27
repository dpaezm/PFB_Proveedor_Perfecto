import getProductByUserIdModel from '../../models/serviceModels/getProductByUserIdModel.js';

export default async function getProductByUserIdController(req, res, next) {
  try {
    const { id } = req.params;
    const product = await getProductByUserIdModel(id);

    res.send({
      status: 'ok',
      data: product,
    });
  } catch (error) {
    next(error);
  }
}
