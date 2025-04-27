import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getProductByUserIdModel(id) {
  const pool = await getPool();

  const [user] = await pool.query(
    `
    SELECT isprovider FROM user WHERE id = ?
    `,
    [id],
  );

  if (!user[0].isprovider) {
    throw generateError(`El usuario ${id} no es un proveedor`, 403);
  }

  //selecciono producto por id de proveedor
  const [products] = await pool.query(
    `
    SELECT p.id, p.product_name, p.price, p.photo1, p.photo2, p.description, c.categoryname, u.username AS provider, u.avatar, AVG(co.rating) AS avg_rating, COUNT(co.rating) AS total_ratings 
    FROM product p
    LEFT JOIN user u ON u.id = p.owner_id
    LEFT JOIN category c ON c.id = p.category_id 
    LEFT JOIN contact co ON co.product_id = p.id AND co.rating IS NOT NULL
    WHERE u.id = ?
    GROUP BY p.id
    `,
    [id],
  );

  if (products.length === 0) {
    throw generateError(
      `El usuario ${id} todavía no ha subido ningún producto`,
      404,
    );
  }

  return products;
}
