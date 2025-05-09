import getPool from '../../db/getPool.js';

export default async function getProductListModel() {
  let pool;

  pool = await getPool();

  //selecciono los productos
  const [productList] = await pool.query(
    `
      SELECT p.id, p.product_name, p.price, p.photo1, p.description, c.categoryname, u.username AS provider, u.city, ROUND(AVG(co.rating), 1) AS avg_rating, COUNT(co.rating) AS total_ratings  
      FROM product p
      LEFT JOIN user u ON u.id = p.owner_id
      LEFT JOIN category c ON c.id = p.category_id 
      LEFT JOIN contact co ON co.product_id = p.id AND co.rating IS NOT NULL
  GROUP BY p.id
      ORDER BY p.created_at DESC

    `,
  );

  //Devolver la lista
  return productList;
}
