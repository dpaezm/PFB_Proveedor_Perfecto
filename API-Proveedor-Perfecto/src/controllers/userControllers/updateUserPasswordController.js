import updateUserPasswordModel from '../../models/userModels/updateUserPasswordModel.js';
import generateError from '../../utils/helpers.js';

const updateUserPasswordController = async (req, res, next) => {
  try {
    const { id, email, password, newPassword } = req.body;
    //const userId = req.user.id;
    // //obtenermos el id desde el authUserController

    if (!password || !newPassword) {
      throw generateError('Faltan campos para actualizar', 400);
    }

    await updateUserPasswordModel(id, email, password, newPassword);

    res.send({
      status: 'ok',
      message: 'Contraseña actualizada correctamente',
    });
  } catch (err) {
    next(err);
  }
};

export default updateUserPasswordController;
