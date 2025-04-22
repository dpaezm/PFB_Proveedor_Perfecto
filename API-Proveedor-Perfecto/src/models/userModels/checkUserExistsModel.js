import getPool from '../../db/getPool.js';

const checkUserExistsModel = async ({ username, email }) => {
  const pool = await getPool();

  const [[userByUsername]] = await pool.query(
    `SELECT id FROM user WHERE username = ?`,
    [username],
  );
  if (userByUsername) return 'username';

  const [[userByEmail]] = await pool.query(
    `SELECT id FROM user WHERE email = ?`,
    [email],
  );
  if (userByEmail) return 'email';

  return null;
};

export default checkUserExistsModel;
