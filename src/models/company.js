import generateError from "../utils/helpers.js";
import getPool from "../db/getPool.js";
import bcrypt from "bcryptjs";

// Crea una compañia en la base de datos y devuelve su id
export default async function createCompanyModel(
  owner_id,
  companyname,
  email,
  password,
  description,
  city,
  phone
) {
  let connection;

  connection = await getPool();
  //Comprobar que no exista otro usuario con ese email
  const [user] = await connection.query(
    `
      SELECT id FROM company WHERE email = ?
    `,
    [email]
  );

  if (user.length > 0) {
    throw generateError(
      "Ya existe una compañia en la base de datos con ese email",
      409
    );
  }

  //Encriptar la password
  const passwordHash = await bcrypt.hash(password, 8);

  //Crear el usuario
  const [newCompany] = await connection.query(
    `
      INSERT INTO company (owner_id, companyname, email, password, description, city, phone) VALUES(?, ?, ?, ?, ?, ?, ?)
    `,
    [owner_id, companyname, email, passwordHash, description, city, phone]
  );

  //Devolver la id
  return newCompany.insertId;
}
