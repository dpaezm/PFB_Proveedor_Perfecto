import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto 3000`);
});
