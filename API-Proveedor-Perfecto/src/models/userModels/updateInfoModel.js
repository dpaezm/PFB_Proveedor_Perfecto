import getPool from '../../db/getPool.js';

const updateUserInfoModel = async (
  userId,
  { username, name, city, email, phone, avatar, description },
) => {
  const pool = await getPool();

  await pool.query(
    `UPDATE user SET username = ?, name = ?, city = ?, email = ?, phone = ?, description = ?, WHERE id = ?`,
    [username, name, city, email, phone, avatar, description, userId],
  );
};

export default updateUserInfoModel;
