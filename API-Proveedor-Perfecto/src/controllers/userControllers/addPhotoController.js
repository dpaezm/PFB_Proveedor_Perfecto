// Importamos la función que retorna una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos la función que guarda una foto.
import savePhotoUtil from '../../utils/savePhotoUtil.js';

// Importamos la función que genera un error.
import generateError from '../utils/helpers.js';

// Función controladora que agrega una foto a un producto.
const addPhotoController = async (req, res, next) => {
  try {
    // Obtenemos el ID del product.
    const { productId } = req.params;

    // Obtenemos los datos necesarios.
    const photo = req.files?.photo;

    // Si falta algún campo lanzamos un error.
    if (!photo) {
      generateError('Faltan campos', 400);
    }

    // Obtenemos una conexión con la base de datos.
    const pool = await getPool();

    // Obtenemos las fotos de la entrada para comprobar si se ha alcanzado el
    // límite de 2 fotos.
    const [photos] = await pool.query(
      `SELECT id FROM product WHERE productId = ?`,
      [productId],
    );

    // Si hay más de dos fotos lanzamos un error.
    if (photos.length > 2) {
      generateError('Límite de 2 fotos alcanzado', 403);
    }

    // Guardamos la foto en la carpeta de subida de archivos y obtenemos su nombre.
    const photoName = await savePhotoUtil(photo, 1000);

    // Agregamos la foto a la base de datos.
    const [newPhoto] = await pool.query(
      `INSERT INTO product(photo1, productId) VALUE(?, ?)`,
      [photoName, productId],
    );

    // Enviamos una respuesta al cliente.
    res.status(201).send({
      status: 'ok',
      message: 'Foto agregada',
      data: {
        photo: {
          id: newPhoto.insertId,
          name: photoName,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export default addPhotoController;
