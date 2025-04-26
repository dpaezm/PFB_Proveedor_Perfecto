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
    name VARCHAR(27), 
    city VARCHAR (27), 
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20), 
    avatar VARCHAR(80), 
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
      photo1 VARCHAR(120), 
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
      photo1 VARCHAR(80), 
      photo2 VARCHAR(100), 
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
      value VARCHAR(80), 
      comment TINYTEXT, 
      answer TINYTEXT, 
      status ENUM("inicio", "tramitando", "cancelado", "finalizado"), 
      rating TINYINT, 
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
  INSERT INTO user (username, name, city, email, password, active, isadmin, isprovider)
  VALUES ?
  `,
    [
      [
        [
          'admin1',
          'Andrés Sanchez',
          'Málaga',
          'admin1@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'admin2',
          'Patricio Escalona',
          'Málaga',
          'admin2@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'admin3',
          'Diego Páez',
          'A Coruña',
          'admin3@proveedor-perfecto.com',
          hashedPassword,
          true,
          true,
          false,
        ],
        [
          'Provider1',
          'Owen B.',
          'Mexico DF',
          'provider1@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        [
          'Provider2',
          'Sam Francisco',
          'Portland',
          'provider2@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        [
          'Provider3',
          'Sarah Wind',
          'London',
          'provider3@provider.com',
          hashedPassword,
          true,
          false,
          true,
        ],
        [
          'Buyer1',
          'Pedro R.',
          'Madrid',
          'buyer1@buyer.com',
          hashedPassword,
          true,
          false,
          false,
        ],
        [
          'Buyer2',
          'Ben Aflek',
          'Roterdam',
          'buyer2@buyer.com',
          hashedPassword,
          true,
          false,
          false,
        ],
        [
          'Buyer3',
          'Neil Factor',
          'Factory city',
          'buyer3@buyer.com',
          hashedPassword,
          true,
          false,
          false,
        ],
      ],
    ],
  );

  await pool.query(`
      INSERT INTO category (categoryname, photo1)
      VALUES ("Programming & Tech", "/media/categories/Categoria_1.png"), ("Graphics & Design", "/media/categories/Categoria_2.png"), ("Marketing", "/media/categories/Categoria_3.png"), ("Copywritting", "/media/categories/Categoria_4.png"), ("AI services", "/media/categories/Categoria_5.png"), ("Finance", "/media/categories/Categoria_6.png"), ("Bussines", "/media/categories/Categoria_7.png") ;
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
