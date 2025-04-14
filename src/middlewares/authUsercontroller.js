import jwt from 'jsonwebtoken';

// Importamos la función que genera un error.
import generateError from '../utils/helpers.js';

// Función controladora intermedia que desencripta el token y agrega la info del
// usuario al objeto request.
const authUserController = async (req, res, next) => {
  try {
    // Obtenemos el token de la cabecera de la petición.
    const { authorization } = req.headers;

    if (!authorization) {
      generateError('Token no válido o no enviado', 401);
    }

    let [protocol, token] = authorization.split(' ');

    if (protocol !== 'Bearer' || !token) {
      generateError('Token no válido o no enviado', 401);
    }
    console.log(authorization);
    console.log(token);

    let tokenInfo;

    try {
      tokenInfo = jwt.verify(token, process.env.SECRET);
    } catch (err) {
      console.log(err);
      generateError('Credenciales inválidas', 401);
    }

    // Si hemos llegado hasta aquí quiere decir que el token ya se ha desencriptado.
    // Creamos la propiedad "user" en el objeto "request" (es una propiedad inventada).
    req.user = tokenInfo;

    // Pasamos el control a la siguiente función controladora.
    next();
  } catch (err) {
    next(err);
  }
};

export default authUserController;
