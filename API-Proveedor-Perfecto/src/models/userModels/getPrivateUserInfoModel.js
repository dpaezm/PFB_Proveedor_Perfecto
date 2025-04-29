import getPool from '../../db/getPool.js';

const getPrivateUserInfoModel = async (userId) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `SELECT id, username, email, avatar, description FROM user WHERE id = ?`,
    [userId],
    //FALTA HACER LA MEDIA DE VALORACIONES DE PRODUCTOS, LOS PRODUCTOS
  );

  return users[0]; // puede ser undefined si no hay resultados
};

export default getPrivateUserInfoModel;
