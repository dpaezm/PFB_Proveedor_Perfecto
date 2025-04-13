import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generateError from '../../utils/helpers.js';
import getUserByEmailModel from '../../models/userModels/getUserByEmailModel.js';

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw generateError('Faltan campos', 400);
    }

    const user = await getUserByEmailModel(email);

    const validPass = user && (await bcrypt.compare(password, user.password));

    if (!validPass) {
      throw generateError('Credenciales inválidas', 401);
    }

    if (!user.active) {
      throw generateError(
        'Usuario pendiente de activar. Por favor, activa tu usuario accediendo al email de verificación que has recibido en tu correo',
        403,
      );
    }

    const tokenInfo = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(tokenInfo, process.env.SECRET, {
      expiresIn: '7d',
    });

    res.send({
      status: 'ok',
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

export default loginUserController;
