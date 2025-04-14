//import generateError from "../utils/helpers.js";
import getPool from '../../db/getPool.js';
//import bcrypt from "bcryptjs";

// Crea un producto en la base de datos y devuelve su id
export default async function createProductModel(
  owner_id,
  category_id,
  product_name,
  price,
  description,
) {
  let pool = await getPool();

  //Creo el producto
  const [newProduct] = await pool.query(
    `
      INSERT INTO product (
      owner_id,
      category_id,
      product_name,
      price,
      description
      ) VALUES(?, ?, ?, ?, ?)
    `,
    [owner_id, category_id, product_name, price, description],
  );

  //Devolver la id
  return newProduct.insertId;
}
