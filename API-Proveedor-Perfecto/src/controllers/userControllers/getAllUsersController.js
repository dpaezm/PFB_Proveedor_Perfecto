import getAllUsersModel from '../../models/userModels/getAllUsersModel.js';

const getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUsersModel();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export default getAllUsersController;
