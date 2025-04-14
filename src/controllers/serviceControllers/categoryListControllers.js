import getCategoryListModel from '../../models/serviceModels/getCategoryList.js';

export default async function categoryListController(req, res, next) {
  try {
    const categoryList = await getCategoryListModel();

    res.send({
      status: 'ok',
      data: categoryList,
    });
  } catch (error) {
    next(error);
  }
}
