import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export async function createRating(requestId, userId, comment, rating) {
  let pool = await getPool();

  // Confirmo el estado de la relación cliente - proveedor
  const [compra] = await pool.query(
    `SELECT user_id, status FROM contact WHERE id = ?`,
    [requestId],
  );

  if (compra.length === 0)
    throw generateError('Transacción no encontrada', 404);

  const contact = compra[0];

  if (contact.user_id !== userId)
    throw generateError('No puedes valorar esta solicitud', 403);

  if (!['finalizado', 'cancelado'].includes(contact.status))
    throw generateError(
      'Solo puedes valorar solicitudes finalizadas o canceladas',
      403,
    );

  const [newRating] = await pool.query(
    `UPDATE contact SET comment = ?, rating = ? WHERE id = ?`,
    [comment, rating, requestId],
  );
}
