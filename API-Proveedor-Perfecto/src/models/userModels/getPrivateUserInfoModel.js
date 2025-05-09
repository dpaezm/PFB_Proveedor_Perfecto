import getPool from '../../db/getPool.js';

const getPrivateUserInfoModel = async (userId) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `
       SELECT 
      u.id,
      u.username,
      u.name,
      u.email,
      u.phone,
      u.avatar,
      u.city,
      u.description,
      u.isprovider,
      u.isadmin,
      u.active,
      u.created_at,

      (
        SELECT ROUND(AVG(c.rating), 1)
        FROM contact c
        INNER JOIN product p2 ON c.product_id = p2.id
        WHERE p2.owner_id = u.id AND c.rating IS NOT NULL
      ) AS avg_rating,
         (
    SELECT COUNT(c.rating)
    FROM contact c
    INNER JOIN product p2 ON c.product_id = p2.id
    WHERE p2.owner_id = u.id AND c.rating IS NOT NULL
  ) AS total_ratings,
      GROUP_CONCAT(DISTINCT cat.categoryname) AS categories
    FROM user u
    LEFT JOIN product p ON u.id = p.owner_id
    LEFT JOIN category cat ON p.category_id = cat.id
    WHERE u.id = ?
    GROUP BY u.id
    `,
    [userId],
    //FALTA HACER LA MEDIA DE VALORACIONES DE PRODUCTOS, LOS PRODUCTOS
  );

  return users[0]; // puede ser undefined si no hay resultados
};

export default getPrivateUserInfoModel;
