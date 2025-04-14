import getPool from '../../db/getPool.js';

export default async function getCategoryListModel() {
  let connection;

  connection = await getPool();

  //selecciono los nombres de las categorías
  const [categoryList] = await connection.query(
    `
      SELECT categoryname FROM category
    `,
  );

  //Devolver la lista
  return categoryList;
}
