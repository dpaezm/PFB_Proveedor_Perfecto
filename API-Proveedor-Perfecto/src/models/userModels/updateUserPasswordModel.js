import getPool from '../../db/getPool.js';
import bcrypt from 'bcrypt';
import generateError from '../../utils/helpers.js';

const updateUserPasswordModel = async (userId, password, newPass) => {
  const pool = await getPool();

  // Obtengo la contraseña actual del usuario

  const [userPass] = await pool.query(
    `SELECT password FROM user WHERE id=?`,
    userId,
  );

  const user = userPass[0];
  // Compruebo que coincide con la proporcionada

  // console.log(user);

  const validPass = user && (await bcrypt.compare(password, user.password));

  if (!validPass) {
    throw generateError('La contraseña no es correcta', 401);
  }

  const hashedPassword = await bcrypt.hash(newPass, 10);

  await pool.query(`UPDATE user SET password = ? WHERE id = ?`, [
    hashedPassword,
    userId,
  ]);
};

export default updateUserPasswordModel;
