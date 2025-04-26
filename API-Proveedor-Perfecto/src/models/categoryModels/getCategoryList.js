import getPool from '../../db/getPool.js';

export default async function getCategoryListModel() {
  let pool;

  pool = await getPool();

  //selecciono los nombres de las categorías
  const [categoryList] = await pool.query(
    `
      SELECT categoryname, id, photo1 FROM category
    `,
  );

  //Devolver la lista
  return categoryList;
}
