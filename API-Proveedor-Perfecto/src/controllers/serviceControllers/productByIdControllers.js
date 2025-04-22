import getProductByIdModel from '../../models/serviceModels/getProductByIdModel.js';

export default async function getProductByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const product = await getProductByIdModel(id);

    res.send({
      status: 'ok',
      data: product,
    });
  } catch (error) {
    next(error);
  }
}
