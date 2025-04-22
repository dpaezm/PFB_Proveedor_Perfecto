// Importamos las dependencias.
import nodemailer from 'nodemailer';

// Importamos la función que genera un error.
import generateError from './helpers.js';

// Importas las variables de entorno necesarias.
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_MAIL } = process.env;

// Creamos un transporte (una conexión) para poder enviar el email.
const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Función que envía un email a un correo electrónico dado.
const sendMailUtil = async (email, subject, body) => {
  try {
    // Enviamos el email.
    await transport.sendMail({
      from: SMTP_MAIL,
      to: email,
      subject,
      text: body,
    });
  } catch (err) {
    console.error(err);

    throw generateError('Error al enviar email', 500);
  }
};

export default sendMailUtil;
