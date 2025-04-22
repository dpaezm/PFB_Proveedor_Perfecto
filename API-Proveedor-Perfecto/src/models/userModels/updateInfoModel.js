import getPool from '../../db/getPool.js';

const updateUserInfoModel = async (userId, { username, email }) => {
  const pool = await getPool();

  await pool.query(`UPDATE user SET username = ?, email = ? WHERE id = ?`, [
    username,
    email,
    userId,
  ]);
};

export default updateUserInfoModel;
