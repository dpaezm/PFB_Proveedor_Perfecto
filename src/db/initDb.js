import getPool from "./getPool.js";

try {
  let pool = await getPool();

  console.log("Borrando tablas...");
  await pool.query(`DROP TABLE IF EXISTS product, category, user;`);

  console.log("Creando tablas...");
  await pool.query(`
    CREATE TABLE user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    active BOOLEAN default false,
    activationCode VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP ON UPDATE NOW()
    )
    `);

  await pool.query(`
    CREATE TABLE category(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL UNIQUE,
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
    desription TINYTEXT,
    buy_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP ON UPDATE NOW(),
    FOREIGN KEY (owner_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (buyer_id) REFERENCES user(id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
    )
    `);

  console.log("Tablas creadas");
  process.exit();
} catch (e) {
  console.error("Error al crear las tablas:", e);
  process.exit(1);
}
