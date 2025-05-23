import bcrypt from 'bcrypt';
import crypto from 'crypto';
import sendMailUtil from './../../utils/sendMailUtil.js';
import generateError from './../../utils/helpers.js';

import { SMTP_MAIL } from './../../../envConfig.js';

import createNewUserModel from './../../models/userModels/createNewUserModel.js';
import checkUserExistsModel from './../../models/userModels/checkUserExistsModel.js';
import savePhotoUtil from '../../utils/savePhotoUtil.js';

const newUserController = async (req, res, next) => {
  try {
    const {
      username,
      name,
      city,
      email,
      password,
      phone,
      description,
      isprovider,
    } = req.body;
    // pendiente de ver como se envia el isProvider

    const avatar = req.files?.avatar || null;
    let photoName = null;
    if (avatar) {
      photoName = await savePhotoUtil(avatar, 100);
    }
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
      name,
      city,
      email,
      hashedPass,
      phone,
      photoName,
      description,
      isprovider,
      registrationCode,
    });

    if (isprovider == 0) {
      const emailSubject = 'Activa tu usuario en Find:)';
      const emailBody = `
        ¡Bienvenid@ ${username}!
        Gracias por registrarte en Find ;). Para activar tu cuenta, haz click en el siguiente enlace:
        <a href="${process.env.FRONT_URL}/validate/${registrationCode}">¡Activa tu usuario!</a>
      `;
      await sendMailUtil(email, emailSubject, emailBody);
    } else {
      const emailSubject = 'Confirma la solicitud de alta de proveedor';
      const emailBody = `
        El proveedor ${username} acaba de registrarse. 
        Confirma el alta de su usuario como proveedor en el siguiente enlace: 

        <a href="${process.env.FRONT_URL}/validate/${registrationCode}">Confirma la solicitud de proveedor</a>
      `;
      await sendMailUtil(SMTP_MAIL, emailSubject, emailBody);
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
