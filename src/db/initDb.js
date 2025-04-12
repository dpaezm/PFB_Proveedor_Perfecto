import "dotenv/config";

import getPool from "./getPool.js";

try {
  let pool = await getPool();

  console.log("Borrando tablas...");
  await pool.query(`DROP TABLE IF EXISTS product, company, category, user;`);

  console.log("Creando tablas...");

  await pool.query(`
      CREATE TABLE user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(27) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20), 
    avatar VARCHAR(20), 
        -- Pendiente de resolver duda sobre imagenes en tablas
    active BOOLEAN default false,
    role ENUM("admin", "owner", "buyer") NOT NULL, 
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP ON UPDATE NOW()
    )
    
    `);

  await pool.query(`
      CREATE TABLE category(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      categoryname VARCHAR(65) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP ON UPDATE NOW()
      )
      `);

  await pool.query(`
    CREATE TABLE product(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    owner_id INT UNSIGNED NOT NULL,
    buyer_id INT UNSIGNED,
    category_id INT UNSIGNED,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    photo VARCHAR(20), 
        -- Pendiente de resolver duda sobre imagenes en tablas
    description TINYTEXT,
    buy_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP ON UPDATE NOW(),
    FOREIGN KEY (buyer_id) REFERENCES user(id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
    )
    `);

  console.log("Tablas creadas");

  console.log("Introduciendo datos");

  await pool.query(`
      INSERT INTO user (username, email, password, role) 
      VALUES ("admin1", "admin1@proveedor-perfecto.com", "1234", "admin")
      `);

  await pool.query(`
      INSERT INTO category (categoryname)
      VALUES ("Programming & Tech"), ("Graphics & Design"), ("Marketing"), ("Copywritting"), ("AI services");
      `);

  console.log("Datos introducidos");

  process.exit();
} catch (e) {
  console.error("Error al crear las tablas:", e);
  process.exit(1);
}
