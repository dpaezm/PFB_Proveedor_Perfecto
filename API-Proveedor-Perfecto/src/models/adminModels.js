import getPool from '../db/getPool.js';

export async function incomingProvidersModel() {
  const pool = await getPool();

  const [providers] = await pool.query(
    `SELECT id, username, name, city, email, avatar, description, active, isprovider FROM user WHERE active = 0 AND isprovider = 1`,
  );

  return providers;
}

export async function AcceptAllIncomingProviders() {
  const pool = await getPool();

  await pool.query(
    `UPDATE user SET active = 1 WHERE active = 0 AND isprovider = 1`,
  );

  return;
}
