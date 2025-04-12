import createProductModel from "../models/product.js";
import generateError from "../utils/helpers.js";

export default async function newProductController(req, res, next) {
  console.log("creando producto");
  try {
    const { owner_id, buyer_id, category_id, name, price, description } =
      req.body;

    // Esto debería ser sustituido por joi
    if (!name || !price) {
      throw generateError("Debes enviar un nombre de producto y precio", 400);
    }

    const id = await createProductModel(
      owner_id,
      buyer_id,
      category_id,
      name,
      price,
      description
    );

    res.send({
      status: "ok",
      message: `product created with id: ${id}`,
    });
  } catch (error) {
    next(error);
  }
}
