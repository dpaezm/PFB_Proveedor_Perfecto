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
    realname VARCHAR(27), 
    city VARCHAR (27), 
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20), 
    avatar VARCHAR(20), 
    description TINYTEXT,
    active BOOLEAN default false,
    isadmin BOOLEAN default false, 
    isprovider BOOLEAN default false, 
    registrationCode VARCHAR(100), 
    recoverPassCode VARCHAR(10), 
    created_at TIMESTAMP DEFAULT NOW()
    )
    
    `);

  await pool.query(`
      CREATE TABLE category(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
      categoryname VARCHAR(65) NOT NULL UNIQUE, 
      photo1 VARCHAR(20), 
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
      photo1 VARCHAR(50), 
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
      answer TINYTEXT, 
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
  INSERT INTO user (username, email, password, active, isadmin, isprovider)
  VALUES ?
  `,
    [
      [
        [
          'admin1',
          'admin1@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'admin2',
          'admin2@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'admin3',
          'admin3@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'Provider1',
          'provider1@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        [
          'Provider2',
          'provider2@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        [
          'Provider3',
          'provider3@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        ['Buyer1', 'buyer1@buyer.com', hashedPassword, true, false, false],
        ['Buyer2', 'buyer2@buyer.com', hashedPassword, true, false, false],
        ['Buyer3', 'buyer3@buyer.com', hashedPassword, true, false, false],
      ],
    ],
  );

  await pool.query(`
      INSERT INTO category (categoryname)
      VALUES ("Programming & Tech"), ("Graphics & Design"), ("Marketing"), ("Copywritting"), ("AI services"), ("Finance"), ("Bussines") ;
      `);

  await pool.query(
    `INSERT INTO product (owner_id, category_id, product_name, price, description, photo1) VALUES ?`,
    [
      [
        [
          4,
          1,
          'Desarrollo SaaS',
          999,
          'Desarrollaremos tu propio SaaS a medida',
          null,
        ],
        [
          4,
          7,
          'Bussines plan',
          650,
          'Te ayudaremos a crear un plan de negocio',
          null,
        ],
        [
          5,
          3,
          'Gestión de Social Media',
          750,
          'Contrátanos si necesitas un Community Manager',
          '',
        ],
        [
          5,
          3,
          'Social Media Ads',
          450,
          'Configuramos tus anuncios a medida',
          '',
        ],
        [6, 6, 'Dirección financiera', 1500, 'Te ayudo a encontrar tu CFO', ''],
      ],
    ],
  );

  await pool.query(
    `
  INSERT INTO contact (user_id, product_id, comment, status)
  VALUES ?
  `,
    [
      [
        [7, 1, 'Quiero conocer más detalles sobre tu producto', 'inicio'],
        [7, 3, 'Quiero conocer más detalles sobre tu producto', 'inicio'],
        [8, 5, 'Voy a contratar tus servicios', 'tramitando'],
      ],
    ],
  );

  await pool.query(
    `
  INSERT INTO contact (user_id, product_id, comment, status, rating)
  VALUES ?
  `,
    [
      [
        [
          8,
          1,
          'Excelente profesional, atendió todas nuestras consultas',
          'finalizado',
          '5',
        ],
        [9, 5, 'Nos dejó colgados en el último momento', 'cancelado', '1'],
      ],
    ],
  );

  console.log('Datos introducidos');

  process.exit();
} catch (e) {
  console.error('Error al crear las tablas:', e);
  process.exit(1);
}
