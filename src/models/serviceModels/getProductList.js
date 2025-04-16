import getPool from '../../db/getPool.js';

export default async function getProductListModel() {
  let pool;

  pool = await getPool();

  //selecciono los productos
  const [productList] = await pool.query(
    `
      SELECT P.id, P.product_name, P.price, P.photo1, P.description, C.categoryname, U.username AS provider FROM product P
      LEFT JOIN user U ON U.id = P.owner_id
      LEFT JOIN category C ON c.id = p.category_id
    `,
  );

  //Devolver la lista
  return productList;
}
