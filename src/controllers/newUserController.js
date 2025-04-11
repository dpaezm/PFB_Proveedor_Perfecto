// Importamos las dependencias necesarias.
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// Importamos la función que retorna una conexión con la base de datos.
import getPool from '../db/getPool.js';

// Importamos la función que envía un email.
import sendMailUtil from '../utils/sendMailUtil.js';

// Importamos la función que genera un error.
import generateError from '../utils/helpers.js';

// Función controladora que permite crear un usuario.
const newUserController = async (req, res, next) => {
  try {
    // Obtenemos los datos necesarios del body.
    const { username, email, password } = req.body;

    // Si falta algún campo lanzamos un error.
    if (!username || !email || !password) {
      generateError('Faltan campos', 400);
    }

    // Obtenemos una conexión con la base de datos.
    const pool = await getPool();

    // Obtenemos el listado de usuarios con el nombre de usuario recibido.
    let [users] = await pool.query(`SELECT id FROM users WHERE username = ?`, [
      username,
    ]);

    // Si existe algún usuario con ese nombre de usuario lanzamos un error.
    if (users.length > 0) {
      generateError('Nombre de usuario no disponible', 409);
    }

    // Obtenemos el listado de usuarios con el email de usuario recibido.
    [users] = await pool.query(`SELECT id FROM users WHERE email = ?`, [email]);

    // Si existe algún usuario con ese email lanzamos un error.
    if (users.length > 0) {
      generateError('Email no disponible', 409);
    }

    // Creamos un código de registro.
    const registrationCode = crypto.randomBytes(15).toString('hex');

    // Encriptamos la contraseña.
    const hashedPass = await bcrypt.hash(password, 10);

    // Insertamos el usuario.
    await pool.query(
      `INSERT INTO users(username, email, password, isProvider, isAdmin, registrationCode) VALUES(?, ?, ?, ?, ?)`,
      [username, email, hashedPass, false, false, registrationCode],
    );

    // Asunto del email de verificación.
    const emailSubject = 'Activa tu usuario en Find:)';

    // Cuerpo del email de verificación.
    const emailBody = `
            ¡Bienvenid@ ${username}!

            Gracias por registrarte en Find:). Para activar tu cuenta, haz click en el siguiente enlace:

            <a href="${process.env.CLIENT_URL}/users/validate/${registrationCode}">¡Activa tu usuario!</a>
        `;

    // Enviamos el email.
    await sendMailUtil(email, emailSubject, emailBody);

    // Enviamos una respuesta al cliente.
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
