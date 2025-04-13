import getPool from '../db/getPool.js';

const saveRecoverPassCodeModel = async (email, recoverPassCode) => {
  const pool = await getPool();

  await pool.query(`UPDATE user SET recoverPassCode = ? WHERE email = ?`, [
    recoverPassCode,
    email,
  ]);
};

export default saveRecoverPassCodeModel;
