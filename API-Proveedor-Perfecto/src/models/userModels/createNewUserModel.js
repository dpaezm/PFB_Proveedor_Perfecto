import getPool from '../../db/getPool.js';

const createNewUserModel = async ({
  username,
  email,
  hashedPass,
  isProvider,
  registrationCode,
}) => {
  const pool = await getPool();

  // Insertamos el usuario con el registrationCode incluido
  await pool.query(
    `INSERT INTO user (username, email, password, isProvider, registrationCode) VALUES (?, ?, ?, ?, ?)`,
    [username, email, hashedPass, isProvider, registrationCode],
  );
};

export default createNewUserModel;
