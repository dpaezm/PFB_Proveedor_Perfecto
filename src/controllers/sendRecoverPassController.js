// Importamos las dependencias necesarias.
import crypto from 'crypto';

// Importamos la función que retorna una conexión con la base de datos.
import getPool from '../db/getPool.js';

// Importamos la función que envía un email.
import sendMailUtil from '../utils/sendMailUtil.js';

// Importamos la función que genera un error.
import generateError from '../utils/helpers.js';

// Función controladora que envía un correo de recuperación de contraseña.
const sendRecoverPassController = async (req, res, next) => {
  try {
    // Obtenemos los datos necesarios.
    const { email } = req.body;

    // Si faltan campos lanzamos un error.
    if (!email) {
      generateError('Faltan campos', 400);
    }

    // Obtenemos una conexión con la base de datos.
    const pool = await getPool();

    // Tratamos de obtener al usuario con el email recibido.
    const [users] = await pool.query(`SELECT id FROM user WHERE email = ?`, [
      email,
    ]);

    // Si existe un usuario con ese email procedemos a generar el código de recuperación y enviarlo.
    if (users.length > 0) {
      // Generamos un código de recuperación de contraseña.
      const recoverPassCode = crypto.randomBytes(15).toString('hex');

      // Actualizamos los datos del usuario para agregar el código anterior.
      await pool.query(`UPDATE user SET recoverPassCode = ? WHERE email = ?`, [
        recoverPassCode,
        email,
      ]);

      // Asunto del email de verificación.
      const emailSubject =
        'Recuperación de contraseña - Find ;) Proveedor Perfecto';

      // Cuerpo del email de verificación.
      const emailBody = `
                Hemos recibido una solicitud para recuperar contraseña en tu cuenta de Find ;). Si no has sido tú ignora este email.

                <a href="${process.env.CLIENT_URL}/users/password/reset/${recoverPassCode}">¡Cambiar contraseña!</a>
            `;

      // Enviamos el email.
      await sendMailUtil(email, emailSubject, emailBody);
    }

    // Enviamos una respuesta al cliente.
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
