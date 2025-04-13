// Importamos las dependencias necesarias.
import bcrypt from 'bcrypt';

// Importamos la función que retorna una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos la función que genera un error.
import generateError from '../../utils/helpers.js';

// Función controladora que permite resetear la contraseña con un código de recuperación.
const resetUserPassWithCodeController = async (req, res, next) => {
  try {
    // Obtenemos el código de recuperación.
    const { recoverPassCode } = req.params;

    // Obtenemos la nueva contraseña.
    const { newPassword, repeatedPassword } = req.body;

    // Si falta algún campo lanzamos un error.
    if (!newPassword || !repeatedPassword) {
      generateError('Faltan campos', 400);
    }

    // Si las contraseñas no son idénticas lanzamos un error.
    if (newPassword !== repeatedPassword) {
      generateError('Las contraseñas no coinciden', 400);
    }

    // Obtenemos una conexión con la base de datos.
    const pool = await getPool();

    // Tratamos de obtener al usuario con el código de recuperación recibido.
    const [users] = await pool.query(
      `SELECT id FROM user WHERE recoverPassCode = ?`,
      [recoverPassCode],
    );

    // Si no existe ningún usuario con ese código de recuperación lanzamos un error.
    if (users.length < 1) {
      generateError('Código de recuperación inválido', 401);
    }

    // Encriptamos la contraseña.
    const hashedPass = await bcrypt.hash(newPassword, 10);

    // Actualizamos la contraseña del usuario.
    await pool.query(
      `UPDATE user SET password = ?, recoverPassCode = NULL WHERE recoverPassCode = ?`,
      [hashedPass, recoverPassCode],
    );

    // Enviamos una respuesta al cliente.
    res.send({
      status: 'ok',
      message: 'Contraseña actualizada',
    });
  } catch (err) {
    next(err);
  }
};

export default resetUserPassWithCodeController;
