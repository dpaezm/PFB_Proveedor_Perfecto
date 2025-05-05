import getPool from '../../db/getPool.js';
import bcrypt from 'bcrypt';
import generateError from '../../utils/helpers.js';
import getUserByEmailModel from './getUserByEmailModel.js';

const updateUserPasswordModel = async (id, email, password, newPass) => {
  const pool = await getPool();

  // Obtengo la contraseña actual del usuario

  /* const [userPass] = await pool.query(`SELECT password FROM user WHERE id=?`, [
    id,
  ]);

  const user = userPass[0];
  // Compruebo que coincide con la proporcionada

  console.log(user);
  console.log(password);
  console.log(newPass);
  console.log(id); */

  const user = await getUserByEmailModel(email);

  //const userPass = user.password;

  const validPass = user && (await bcrypt.compare(password, user.password));
  console.log(user.password);

  console.log(id, email, password, newPass);
  console.log(id);

  if (!validPass) {
    throw generateError('La contraseña no es correcta', 401);
  }

  const hashedPassword = await bcrypt.hash(newPass, 10);
  console.log(hashedPassword);

  await pool.query(`UPDATE user SET password = ? WHERE id = ?`, [
    hashedPassword,
    id,
  ]);
};

export default updateUserPasswordModel;
