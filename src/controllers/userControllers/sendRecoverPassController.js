import crypto from 'crypto';
import generateError from '../../utils/helpers.js';
import sendMailUtil from '../../utils/sendMailUtil.js';

import getUserByEmailModel from '../../models/userModels/getUserByEmailModel.js';
import saveRecoverPassCodeModel from '../../models/userModels/saveRecoverPassCodeModel.js';

const sendRecoverPassController = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw generateError('Faltan campos', 400);
    }

    const user = await getUserByEmailModel(email);

    if (user) {
      const recoverPassCode = crypto.randomBytes(5).toString('hex');

      await saveRecoverPassCodeModel(email, recoverPassCode);

      const emailSubject =
        'Recuperación de contraseña - Find ;) Proveedor Perfecto';
      const emailBody = `
        Hemos recibido una solicitud para recuperar tu contraseña en Find ;). Si no has sido tú, ignora este email.
        <a href="${process.env.CLIENT_URL}/users/password/reset/${recoverPassCode}">¡Cambiar contraseña!</a>
      `;

      await sendMailUtil(email, emailSubject, emailBody);
    }

    res.send({
      status: 'ok',
      message:
        'Si existe un usuario con ese email enviaremos un correo de recuperación de contraseña',
    });
  } catch (err) {
    next(err);
  }
};

export default sendRecoverPassController;
