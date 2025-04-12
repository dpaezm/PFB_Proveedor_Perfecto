//import generateError from "../utils/helpers.js";
import getPool from "../db/getPool.js";
//import bcrypt from "bcryptjs";

// Crea un producto en la base de datos y devuelve su id
export default async function createProductModel(
  owner_id,
  buyer_id,
  category_id,
  name,
  price,

  description
) {
  let connection;

  connection = await getPool();

  //Creo el producto
  const [newProduct] = await connection.query(
    `
      INSERT INTO product (owner_id,
  buyer_id,
  category_id,
  name,
 price,
   description) VALUES(?, ?, ?, ?, ?, ?)
    `,
    [owner_id, buyer_id, category_id, name, price, description]
  );

  //Devolver la id
  return newProduct.insertId;
}
