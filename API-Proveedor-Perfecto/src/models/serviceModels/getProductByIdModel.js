import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getProductByIdModel(id) {
  let pool;

  pool = await getPool();

  //selecciono producto por id
  const [product] = await pool.query(
    `
    SELECT p.id, p.product_name, p.price, p.photo1, p.description, c.categoryname, u.username AS provider, AVG co.rating AS avg_rating, COUNT(co.rating) AS total_ratings 
    FROM product p
    LEFT JOIN user u ON u.id = p.owner_id
    LEFT JOIN category c ON c.id = p.category_id 
    LEFT JOIN contact co ON co.product_id = p.id AND co.rating IS NOT NULL
    WHERE p.id = ?
    GROUP BY p.id
    `,
    [id],
  );

  if (product.length === 0) {
    throw generateError(`El producto con id: ${id} no existe`, 404);
  }

  return product[0];
}
