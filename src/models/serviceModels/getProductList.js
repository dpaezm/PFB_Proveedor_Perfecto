import getPool from '../../db/getPool.js';

export default async function getProductListModel() {
  let pool;

  pool = await getPool();

  //selecciono los productos
  const [productList] = await pool.query(
    `
      SELECT p.id, p.product_name, p.price, p.photo1, p.description, c.categoryname, u.username AS provider FROM product p
      LEFT JOIN user u ON u.id = p.owner_id
      LEFT JOIN category c ON c.id = p.category_id
    `,
  );

  //Devolver la lista
  return productList;
}
