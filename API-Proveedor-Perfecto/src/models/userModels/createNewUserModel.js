import getPool from '../../db/getPool.js';

const createNewUserModel = async ({
  username,
  name,
  city,
  email,
  hashedPass,
  phone,
  photoName,
  description,
  isProvider,
  registrationCode,
}) => {
  const pool = await getPool();

  // Insertamos el usuario con el registrationCode incluido
  await pool.query(
    `INSERT INTO user (username, name, city, email, password, phone, avatar, description, isProvider, registrationCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      username,
      name,
      city,
      email,
      hashedPass,
      phone,
      photoName,
      description,
      isProvider,
      registrationCode,
    ],
  );
};

export default createNewUserModel;
