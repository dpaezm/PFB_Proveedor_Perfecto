import createProductModel from '../../models/serviceModels/product.js';
import generateError from '../../utils/helpers.js';
import savePhotoUtil from '../../utils/savePhotoUtil.js';

export default async function newProductController(req, res, next) {
  console.log('creando producto');
  try {
    const { category_id, product_name, price, description } = req.body;
    const ownerId = req.user.id;

    // Creamos un array con los valores del objeto "files". Esto nos permitirá crear un array con
    // las fotos recibidas del cliente. Utilizamos el "slice" para evitar que nos puedan llegar más
    // de dos fotos dado que es el límite que hemos establecido para cada entrada.
    const { photo1 } = req.files;

    /* .slice(0, 2);

    // Recorremos el array de fotos para almacenar las fotos en disco y guardarlas en la base de datos.
    for (const photo of photosArr) {
      // Guardamos la foto en la carpeta de subida de archivos.
     
    } */
    const photoName = await savePhotoUtil(photo1, 1000);
    // Esto debería ser sustituido por joi
    if (!product_name || !price || !photo1) {
      throw generateError(
        'Debes enviar un nombre de producto, precio y una foto',
        400,
      );
    }

    const productId = await createProductModel(
      ownerId,
      category_id,
      product_name,
      price,
      description,
      photoName,
    );

    res.send({
      status: 'ok',
      message: `product created with id: ${productId}`,
    });
  } catch (error) {
    next(error);
  }
}
