import getPool from '../../db/getPool.js';

const getAllUsersModel = async () => {
  const pool = await getPool();

  const [users] = await pool.query(`
    SELECT 
      id,
      username,
      name,
      email,
      phone,
      avatar,
      city,
      description,
      active,
      isprovider,
      isadmin,
      created_at
    FROM user
    ORDER BY created_at DESC
  `);

  return users;
};

export default getAllUsersModel;
