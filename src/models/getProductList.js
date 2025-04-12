import getPool from "../db/getPool.js";

export default async function getProductListModel() {
  let connection;

  connection = await getPool();

  //selecciono los productos
  const [productList] = await connection.query(
    `
      SELECT name, price FROM product
    `
  );

  //Devolver la lista
  return productList;
}
