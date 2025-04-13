import getPool from '../../db/getPool.js';

const getUserByEmailModel = async (email) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `SELECT id, password, role, active FROM user WHERE email = ?`,
    [email],
  );

  return users[0]; // puede ser undefined si no existe
};

export default getUserByEmailModel;
