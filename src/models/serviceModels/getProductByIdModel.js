import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getProductByIdModel(id) {
  let pool;

  pool = await getPool();

  //selecciono producto por id
  const [product] = await pool.query(
    `
    SELECT P.id, P.product_name, P.price, P.photo1, P.description, C.categoryname, U.username AS provider FROM product P
      LEFT JOIN user U ON U.id = P.owner_id
      LEFT JOIN category C ON c.id = p.category_id WHERE P.id = ?
    `,
    [id],
  );

  if (product.length === 0) {
    throw generateError(`El producto con id: ${id} no existe`, 404);
  }

  return product[0];
}
