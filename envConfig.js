//import 'dotenv/config';

process.loadEnvFile();

export const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
  API_PORT,
  JWT_SECRET,
  UPLOADS_DIR,
  SMTP_HOST,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_MAIL,
  SERVER_URL,
} = process.env;
