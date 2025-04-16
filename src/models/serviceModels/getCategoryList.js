import getPool from '../../db/getPool.js';

export default async function getCategoryListModel() {
  let pool;

  pool = await getPool();

  //selecciono los nombres de las categorías
  const [categoryList] = await pool.query(
    `
      SELECT categoryname FROM category
    `,
  );

  //Devolver la lista
  return categoryList;
}
