import getPool from "../db/getPool.js";
import generateError from "../utils/helpers.js";

export default async function getProductByIdModel(id) {
  let connection;

  connection = await getPool();

  //selecciono producto por id
  const [product] = await connection.query(
    `
    SELECT * FROM product WHERE id = ?
    `,
    [id]
  );

  if (product.length === 0) {
    throw generateError(`El producto con id: ${id} no existe`, 404);
  }

  return product[0];
}
