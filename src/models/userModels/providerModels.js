import getPool from '../../db/getPool.js';

export async function getProviders() {
  let pool = await getPool();

  let [providers] = await pool.query(
    `
        SELECT username, email, phone, avatar FROM user WHERE isprovider = true
        `,
  );
  return providers;
}

export async function getProviderDetail(providerId) {
  let pool = await getPool();

  let [provider] = await pool.query(
    `
        SELECT u.id, u.username, u.email, u.phone, u.avatar, p.product_name, p.price, p.description, c.rating, c.comment 
        FROM user u 
        LEFT JOIN product p ON u.id = p.owner_id
        LEFT JOIN contact c ON u.id = c.user_id 
        WHERE p.owner_id = ?
        `,
    [providerId],
  );
  return provider;
}
