import getPool from '../../db/getPool.js';

const getPrivateUserInfoModel = async (userId) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `SELECT id, username, email, avatar FROM user WHERE id = ?`,
    [userId],
  );

  return users[0]; // puede ser undefined si no hay resultados
};

export default getPrivateUserInfoModel;
