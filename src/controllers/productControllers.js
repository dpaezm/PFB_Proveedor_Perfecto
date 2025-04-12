import createProductModel from "../models/product.js";
import generateError from "../utils/helpers.js";

export default async function newProductController(req, res, next) {
  console.log("creando producto");
  try {
    const { owner_id, category_id, product_name, prize, description } =
      req.body;

    // Esto debería ser sustituido por joi
    if (!product_name || !prize) {
      throw generateError("Debes enviar un nombre de producto y precio", 400);
    }

    const productId = await createProductModel(
      owner_id,
      category_id,
      product_name,
      prize,
      description
    );

    res.send({
      status: "ok",
      message: `product created with id: ${productId}`,
    });
  } catch (error) {
    next(error);
  }
}
