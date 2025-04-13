import generateError from '../../utils/helpers.js';
import getPrivateUserInfoModel from '../../models/userModels/getPrivateUserInfoModel.js';

const getPrivateUserInfoController = async (req, res, next) => {
  try {
    const user = await getPrivateUserInfoModel(req.user.id);

    if (!user) {
      throw generateError('Usuario no encontrado', 404);
    }

    res.send({
      status: 'ok',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

export default getPrivateUserInfoController;
