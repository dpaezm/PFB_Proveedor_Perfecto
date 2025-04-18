import updateProductModel from '../../models/serviceModels/updateProductModel.js';

export default async function productUpdateController(req, res, next) {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const product = await updateProductModel(price, id);

    res.send({
      status: 'ok',
      message: 'producto actualizado',
    });
  } catch (error) {
    next(error);
  }
}
