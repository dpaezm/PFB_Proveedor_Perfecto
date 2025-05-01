import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export default async function getReviews(providerId) {
  let pool = await getPool();

  const [reviews] = await pool.query(
    `
            SELECT 
      c.comment,
      c.answer,
      c.rating,
      c.status,
      c.created_at,
      p.product_name,
      buyer.username AS comprador,
      provider.username AS proveedor
    FROM contact c
    JOIN user buyer ON c.user_id = buyer.id
    JOIN product p ON c.product_id = p.id
    JOIN user provider ON p.owner_id = provider.id
    WHERE p.owner_id = ?
      AND c.status IN ('cancelado', 'finalizado')
      AND c.comment IS NOT NULL
    ORDER BY c.created_at DESC
        `,
    [providerId],
  );

  if (reviews.length === 0) {
    throw generateError(
      `No hay reseñas para el proveedor con id: ${providerId}`,
      404,
    );
  }

  return reviews;
}
