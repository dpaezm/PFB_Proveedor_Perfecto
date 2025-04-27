import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getProductBySearchModel(input) {
  const pool = await getPool();
  const [products] = await pool.query(
    `
        SELECT 
        p.id, 
        p.product_name, 
        p.price, 
        p.photo1, 
        p.description, 
        c.categoryname, 
        u.username AS provider, 
        ROUND(AVG(co.rating), 1) AS avg_rating, COUNT(co.rating) AS total_ratings 
        FROM product p
        LEFT JOIN user u ON u.id = p.owner_id
        LEFT JOIN category c ON p.category_id = c.id
        WHERE LOWER(p.product_name) LIKE LOWER(?) OR LOWER(p.description) LIKE LOWER(?)
        `,
    [`%${input}%`, `%${input}%`],
  );
  if (products.length === 0) {
    throw generateError(
      `No se encontraron productos que coincidan con ${input}`,
      404,
    );
  }

  return products;
}
