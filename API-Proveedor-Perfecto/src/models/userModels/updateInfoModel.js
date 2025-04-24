import getPool from '../../db/getPool.js';
//borrado email para que no se pueda editar.

const updateUserInfoModel = async (
  userId,
  { username, name, city, phone, avatar, description },
) => {
  const pool = await getPool();

  await pool.query(
    `UPDATE user SET username = ?, name = ?, city = ?, phone = ?, description = ?, WHERE id = ?`,
    [username, name, city, phone, avatar, description, userId],
  );
};

export default updateUserInfoModel;
