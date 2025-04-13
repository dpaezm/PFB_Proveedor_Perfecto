import getProductListModel from '../models/getProductList.js';

export default async function productListController(req, res, next) {
  try {
    const productsList = await getProductListModel();

    res.send({
      status: 'ok',
      data: productsList,
    });
  } catch (error) {
    next(error);
  }
}
