import bcrypt from 'bcrypt';
import crypto from 'crypto';
import sendMailUtil from '../../utils/sendMailUtil.js';
import generateError from '../../utils/helpers.js';

import { SMTP_USER } from '../../../envConfig.js';

import createNewUserModel from '../../models/userModels/createNewUserModel.js';
import checkUserExistsModel from '../../models/userModels/checkUserExistsModel.js';

const newUserController = async (req, res, next) => {
  try {
    const { username, email, password, isProvider = false } = req.body;
    // pendiente de ver como se envia el isProvider

    if (!username || !email || !password) {
      throw generateError('Faltan campos', 400);
    }

    const conflictField = await checkUserExistsModel({ username, email });

    if (conflictField === 'username') {
      throw generateError('Nombre de usuario no disponible', 409);
    }

    if (conflictField === 'email') {
      throw generateError('Email no disponible', 409);
    }

    const registrationCode = crypto.randomBytes(15).toString('hex');
    const hashedPass = await bcrypt.hash(password, 10);

    await createNewUserModel({
      username,
      email,
      hashedPass,
      isProvider,
      registrationCode,
    });

    if (!isProvider) {
      const emailSubject = 'Activa tu usuario en Find:)';
      const emailBody = `
        ¡Bienvenid@ ${username}!
        Gracias por registrarte en Find ;). Para activar tu cuenta, haz click en el siguiente enlace:
        <a href="${process.env.CLIENT_URL}/users/validate/${registrationCode}">¡Activa tu usuario!</a>
      `;
      await sendMailUtil(email, emailSubject, emailBody);
    } else {
      const emailSubject = 'Confirma la solicitud de alta de proveedor';
      const emailBody = `
        El proveedor ${username} acaba de registrarse. 
        Confirma el alta de su usuario como proveedor en el siguiente enlace: 

        <a href="${process.env.CLIENT_URL}/users/validate/${registrationCode}">Confirma la solicitud de proveedor</a>
      `;
      await sendMailUtil(SMTP_USER, emailSubject, emailBody);
    }

    res.status(201).send({
      status: 'ok',
      message:
        'Usuario registrado. En breves recibirás un enlace de verificación en tu correo electrónico.',
    });
  } catch (err) {
    next(err);
  }
};

export default newUserController;
