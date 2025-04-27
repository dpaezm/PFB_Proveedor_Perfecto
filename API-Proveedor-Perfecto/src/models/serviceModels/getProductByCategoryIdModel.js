import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getProductByCategoryIdModel(id) {
  const pool = await getPool();

  //selecciono producto por id de categoría
  const [products] = await pool.query(
    `
    SELECT p.id, p.product_name, p.price, p.photo1, p.photo2, p.description, c.categoryname, u.username AS provider, u.avatar, AVG(co.rating) AS avg_rating, COUNT(co.rating) AS total_ratings 
    FROM product p
    LEFT JOIN user u ON u.id = p.owner_id
    LEFT JOIN category c ON c.id = p.category_id 
    LEFT JOIN contact co ON co.product_id = p.id AND co.rating IS NOT NULL
    WHERE c.id = ?
    GROUP BY p.id
    `,
    [id],
  );

  if (products.length === 0) {
    throw generateError(`La categoría con id: ${id} no existe`, 404);
  }

  return products;
}
