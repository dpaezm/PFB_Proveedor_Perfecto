import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';
import getProductByIdModel from './getProductByIdModel.js';

export default async function updateProductModel(price, id) {
  let pool;

  pool = await getPool();

  //selecciono producto por id
  const product = await getProductByIdModel(id);
  /* if (product.length === 0) {
    throw generateError(`El producto con id: ${id} no existe`, 404);
  } */
  const [productUpdate] = await pool.query(
    `UPDATE product SET price=? WHERE id=?`,
    [price, id],
  );
  return productUpdate[0];
}
