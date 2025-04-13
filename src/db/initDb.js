import bcrypt from 'bcrypt';
import getPool from './getPool.js';

try {
  let pool = await getPool();

  console.log('Borrando tablas...');

  await pool.query(`DROP TABLE IF EXISTS contact, product, category, user;`);

  console.log('Creando tablas...');

  await pool.query(`
      CREATE TABLE user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(27) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20), 
    avatar VARCHAR(20), 
    active BOOLEAN default false,
    isadmin BOOLEAN default false, 
    isprovider BOOLEAN default false, 
    registrationCode VARCHAR(10), 
    recoverPassCode VARCHAR(10), 
    created_at TIMESTAMP DEFAULT NOW()
    )
    
    `);

  await pool.query(`
      CREATE TABLE category(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
      categoryname VARCHAR(65) NOT NULL UNIQUE, 
      created_at TIMESTAMP DEFAULT NOW()
      )
      `);

  await pool.query(`
      CREATE TABLE product( 
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      owner_id INT UNSIGNED,
      category_id INT UNSIGNED,
      product_name VARCHAR(50) NOT NULL,
      price DECIMAL(10, 2) NOT NULL, 
      photo1 VARCHAR(20), 
      photo2 VARCHAR(20), 
      description TINYTEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY (owner_id) REFERENCES user(id) ON DELETE SET NULL,
      FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
      )
    `);

  await pool.query(`
      CREATE TABLE contact (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
      user_id INT UNSIGNED, 
      product_id INT UNSIGNED, 
      value VARCHAR(20), 
      comment TINYTEXT, 
      status ENUM("inicio", "tramitando", "cancelado", "finalizado"), 
      rating ENUM("1", "2", "3", "4", "5"), 
      created_at TIMESTAMP DEFAULT NOW(), 
      modified_at TIMESTAMP DEFAULT NOW(), 
      FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL,
      FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE SET NULL
      )
      `);

  console.log('Tablas creadas');

  console.log('Introduciendo datos');

  const hashedPassword = await bcrypt.hash('1234', 10);

  await pool.query(
    `
      INSERT INTO user (username, email, password, isadmin) 
      VALUES (?, ?, ?, ?)
      `,
    ['admin1', 'admin1@proveedor-perfecto.com', hashedPassword, true],
  );

  await pool.query(`
      INSERT INTO category (categoryname)
      VALUES ("Programming & Tech"), ("Graphics & Design"), ("Marketing"), ("Copywritting"), ("AI services"), ("Finance"), ("Bussines") ;
      `);

  console.log('Datos introducidos');

  process.exit();
} catch (e) {
  console.error('Error al crear las tablas:', e);
  process.exit(1);
}
