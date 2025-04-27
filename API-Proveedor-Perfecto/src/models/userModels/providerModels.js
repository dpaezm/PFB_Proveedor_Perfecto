import getPool from '../../db/getPool.js';

export async function getProviders() {
  let pool = await getPool();

  let [providers] = await pool.query(
    `
        SELECT 
  u.id,
  u.username,
  u.name,
  u.city,
  u.email,
  u.phone,
  u.avatar,
  u.description, 
  u.created_at, 
  GROUP_CONCAT(DISTINCT c.categoryname) AS categories,
  ROUND(AVG(co.rating), 1) AS avg_rating
FROM user u
LEFT JOIN product p ON u.id = p.owner_id
LEFT JOIN category c ON p.category_id = c.id
LEFT JOIN contact co ON p.id = co.product_id AND co.rating IS NOT NULL
WHERE u.isprovider = true
GROUP BY u.id
        `,
  );
  return providers;
}

/* export async function getProviderDetail(providerId) {
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
} */

// este lo devuelve producto a producto, haciendo el avg rating individualmente.
/* export async function getProviderDetail(providerId) {
  let pool = await getPool();

  let [provider] = await pool.query(
    `SELECT u.id, u.username, u.name, u.email, u.phone, u.avatar, u.created_at, p.product_name, p.price, p.description, r.avg_rating
FROM user u
LEFT JOIN product p ON u.id = p.owner_id
LEFT JOIN (SELECT p.owner_id, AVG (c.rating) AS avg_rating FROM contact c INNER JOIN product p ON p.id = c.product_id 
WHERE c.rating IS NOT NULL
GROUP BY p.owner_id) r ON u.id = r.owner_id
WHERE u.id = ?
  `,
    [providerId],
  );
  return provider;
} */

// este lo devuelve el proveedor sin productos, haciendo el avg rating global del conjunto de sus productos.

export async function getProviderDetail(providerId) {
  let pool = await getPool();

  let [provider] = await pool.query(
    `
       SELECT 
      u.id,
      u.username,
      u.name,
      u.email,
      u.phone,
      u.avatar,
      u.created_at,
      (
        SELECT AVG(c.rating)
        FROM contact c
        INNER JOIN product p2 ON c.product_id = p2.id
        WHERE p2.owner_id = u.id AND c.rating IS NOT NULL
      ) AS avg_rating,
      GROUP_CONCAT(DISTINCT cat.categoryname) AS categories
    FROM user u
    LEFT JOIN product p ON u.id = p.owner_id
    LEFT JOIN category cat ON p.category_id = cat.id
    WHERE u.id = ?
    GROUP BY u.id
    `,
    [providerId],
  );
  return provider;
}
