import getCategoryListModel from '../../models/categoryModels/getCategoryList.js';

export default async function categoryListController(req, res, next) {
  try {
    const categoryList = await getCategoryListModel();

    res.send({
      status: 'ok',
      data: {
        entries: categoryList,
      },
    });
  } catch (error) {
    next(error);
  }
}
