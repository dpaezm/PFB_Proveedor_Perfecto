import updateUserByIdModel from '../../models/userModels/updateUserByIdModel.js';

export default async function updateUserByIdController(req, res, next) {
  try {
    const { userId } = req.params;
    const { isadmin, isprovider, active } = req.body;

    await updateUserByIdModel(userId, { isadmin, isprovider, active });

    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (err) {
    next(err);
  }
}
