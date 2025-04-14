import mysql from "mysql2/promise";

import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} from "../../envConfig.js";


let pool;

async function getPool() {
  try {
    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
      });
    }

    return await pool;
  } catch (e) {
    console.error(e);
    throw new Error("Problema al obtener la pool", { cause: e });
  }
}

export default getPool;
