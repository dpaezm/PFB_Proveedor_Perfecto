import express from "express";
import fileUpload from "express-fileupload";

//Añado las variable de entorno
import "dotenv/config";

const app = express();

//Importo funciones
import {
  error404Controller,
  errorController,
} from "./src/controllers/errorControllers.js";

//Middewares externos
//Para poder usar el body en json
app.use(express.json());
//Para poder usar el body en form-data
app.use(fileUpload());

//Servimos la carpeta public de forma estática
app.use("/media", express.static("public"));

//Endpoints

//Middlewares de error
app.use(error404Controller);
app.use(errorController);

app.listen(process.env.API_PORT, () => {
  console.log(`Aplicación funcionando en el puerto ${process.env.API_PORT}`);
});
