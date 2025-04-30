import getPool from '../../db/getPool.js';

const getPrivateUserInfoModel = async (userId) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `SELECT id, username, name, city, email, phone, avatar, description, created_at FROM user WHERE id = ?`,
    [userId],
    //FALTA HACER LA MEDIA DE VALORACIONES DE PRODUCTOS, LOS PRODUCTOS
  );

  return users[0]; // puede ser undefined si no hay resultados
};

export default getPrivateUserInfoModel;
