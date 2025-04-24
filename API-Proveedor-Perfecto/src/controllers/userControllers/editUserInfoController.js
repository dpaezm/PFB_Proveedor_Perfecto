import updateUserInfoModel from '../../models/userModels/updateInfoModel.js';
import generateError from '../../utils/helpers.js';
import checkUserExistsModel from '../../models/userModels/checkUserExistsModel.js';

// No cambiar username y email, que queden estáticos.
const editUserInfoController = async (req, res, next) => {
  try {
    const { username, name, city, email, phone, avatar, description } =
      req.body;
    const userId = req.user.id; //obtenermos el id desde el authUserController

    if (!username || !email) {
      throw generateError('Faltan campos para actualizar', 400);
    }

    const conflictField = await checkUserExistsModel({ username, email });

    if (conflictField === 'username') {
      throw generateError('Nombre de usuario no disponible', 409);
    }

    if (conflictField === 'email') {
      throw generateError('Email no disponible', 409);
    }

    await updateUserInfoModel(userId, {
      username,
      name,
      city,
      email,
      phone,
      avatar,
      description,
    });

    res.send({
      status: 'ok',
      message: 'Información actualizada correctamente',
    });
  } catch (err) {
    next(err);
  }
};

export default editUserInfoController;
