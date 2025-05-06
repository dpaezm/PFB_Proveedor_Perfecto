import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

export async function createContactRequest(user_id, product_id, comment) {
  let pool = await getPool();

  const [productCheck] = await pool.query(
    `SELECT id FROM product WHERE id = ?`,
    [product_id],
  );

  if (productCheck.length === 0) {
    throw generateError('El servicio no existe', 404);
  }

  const [newRequest] = await pool.query(
    `
        INSERT INTO contact (
        user_id, 
        product_id, 
        comment, 
        status
        ) VALUES (?, ?, ?, 'inicio')
        `,
    [user_id, product_id, comment],
  );

  return newRequest.insertId;
}

export async function manageContactRequest(providerId) {
  let pool = await getPool();

  const [requests] = await pool.query(
    `
        SELECT c.id, c.user_id, c.product_id, c.comment, c.answer, c.status, c.rating, c.comment, c.created_at, c.modified_at, u.username AS client, p.product_name
        FROM contact c
        JOIN product p ON c.product_id = p.id 
        JOIN user u ON c.user_id = u.id 
        WHERE p.owner_id = ?
        `,
    [providerId],
  );
  return requests;
}

export async function manageUserContactRequest(userId) {
  let pool = await getPool();

  const [requests] = await pool.query(
    `
        SELECT c.id, c.user_id, c.product_id, c.comment, c.answer, c.status, c.rating, c.comment, c.created_at, c.modified_at, p.product_name, provider.username AS provider
        FROM contact c
        JOIN product p ON c.product_id = p.id 
        JOIN user u ON c.user_id = u.id 
        JOIN user provider ON p.owner_id = provider.id
        WHERE c.user_id = ?
        `,
    [userId],
  );
  return requests;
}

export async function answerContactRequest(requestId, answer, providerId) {
  let pool = await getPool();

  const [check] = await pool.query(
    `
    SELECT c.id
    FROM contact c
    JOIN product p ON c.product_id = p.id
    WHERE c.id = ? AND p.owner_id = ?
    `,
    [requestId, providerId],
  );

  if (check.length === 0) {
    throw generateError(
      'No tienes permiso para responder esta solicitud o no existe',
      403,
    );
  }

  const [respuesta] = await pool.query(
    `
    UPDATE contact 
    SET answer = ?, status = 'tramitando', modified_at = NOW()
    WHERE id = ?
    `,
    [answer, requestId],
  );

  return respuesta;
}

export async function updateContactRequestStatus(requestId, userId, status) {
  const pool = await getPool();

  const [check] = await pool.query(
    `
    SELECT id
    FROM contact 
    WHERE id = ? AND user_id = ?
    `,
    [requestId, userId],
  );

  if (check.length === 0) {
    throw generateError(
      'No tienes permiso para responder esta solicitud o no existe',
      403,
    );
  }

  const [result] = await pool.query(
    `
        UPDATE contact 
        SET status = ?, modified_at = NOW()
        WHERE id = ?
        `,
    [status, requestId],
  );

  return result;
}
