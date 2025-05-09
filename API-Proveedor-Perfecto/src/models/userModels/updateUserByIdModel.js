import getPool from '../../db/getPool.js';
import generateError from '../../utils/helpers.js';

const updateUserByIdModel = async (userId, { isadmin, isprovider, active }) => {
  const pool = await getPool();

  const fields = [];
  const values = [];

  const isValidBinary = (value) => value === 0 || value === 1;

  if (isadmin !== undefined) {
    if (!isValidBinary(isadmin)) {
      throw generateError('El valor de isadmin debe ser 0 o 1', 400);
    }
    fields.push('isadmin = ?');
    values.push(isadmin);
  }

  if (isprovider !== undefined) {
    if (!isValidBinary(isprovider)) {
      throw generateError('El valor de isprovider debe ser 0 o 1', 400);
    }
    fields.push('isprovider = ?');
    values.push(isprovider);
  }

  if (active !== undefined) {
    if (!isValidBinary(active)) {
      throw generateError('El valor de active debe ser 0 o 1', 400);
    }
    fields.push('active = ?');
    values.push(active);
  }

  if (!fields.length) return;

  const query = `UPDATE user SET ${fields.join(', ')} WHERE id = ?`;
  values.push(userId);

  await pool.query(query, values);
};

export default updateUserByIdModel;
