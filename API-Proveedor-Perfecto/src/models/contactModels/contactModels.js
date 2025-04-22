import getPool from '../../db/getPool.js';

export async function createContactRequest(
  user_id,
  product_id,
  comment,
  status,
) {
  let pool = await getPool();

  const [newRequest] = await pool.query(
    `
        INSERT INTO contact (
        user_id, 
        product_id, 
        comment, 
        status
        ) VALUES (?, ?, ?, ?)
        `,
    [user_id, product_id, comment, status],
  );

  return newRequest.insertId;
}

export async function manageContactRequest(providerId) {
  let pool = await getPool();

  const [requests] = await pool.query(
    `
        SELECT c.user_id, c.product_id, c.comment, c.status, u.username AS client, p.product_name
        FROM contact c
        JOIN product p ON c.product_id = p.id 
        JOIN user u ON c.user_id = u.id 
        WHERE p.owner_id = ?
        `,
    [providerId],
  );
  return requests;
}
