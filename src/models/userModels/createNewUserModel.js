import getPool from '../../db/getPool.js';

const createNewUserModel = async ({
  username,
  email,
  hashedPass,
  registrationCode,
}) => {
  const pool = await getPool();

  // Insertamos el usuario con el registrationCode incluido
  await pool.query(
    `INSERT INTO user (username, email, password, registrationCode) VALUES (?, ?, ?, ?)`,
    [username, email, hashedPass, registrationCode],
  );
};

export default createNewUserModel;
